"use client";

import { useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type ResultType = "success" | "error";

// Same images as the Portfolio section
const projectThumbs = [
  { slug: "project-3", image: "/images/porto3.png", title: "Portfolio 3" },
  { slug: "project-1", image: "/images/porto1.png", title: "Portfolio 1" },
  { slug: "project-2", image: "/images/porto2.png", title: "Portfolio 2" },
];

const inputClass =
  "w-full rounded-xl border border-neutral-300 bg-white px-4 text-sm text-neutral-950 placeholder:text-neutral-500 outline-none transition-colors focus:border-primary-300 focus:ring-2 focus:ring-primary-100";

// Content for each result modal
const resultContent = {
  success: {
    image: "/icons/succeed.svg",
    headerBg: "bg-secondary-100",
    title: "Got Your Message!",
    description: "Really appreciate you reaching out. I'll be in touch soon.",
    action: "Back to Home",
  },
  error: {
    image: "/icons/failed.svg",
    headerBg: "bg-neutral-200",
    title: "Message Failed",
    description:
      "Sorry about that. Please check your connection and try again.",
    action: "Try Again",
  },
};

async function sendMessage(data: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (!navigator.onLine) {
    throw new Error("No internet connection");
  }
  return Object.fromEntries(data);
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  // What to do after the modal finishes closing
  const pendingAction = useRef<"home" | "retry" | null>(null);

  const [isSending, setIsSending] = useState(false);
  const [result, setResult] = useState<ResultType>("success");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const content = resultContent[result];

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    setIsSending(true);
    try {
      await sendMessage(new FormData(form));
      form.reset();
      setResult("success");
    } catch {
      // Keep the typed values so the user doesn't lose their message
      setResult("error");
    } finally {
      setIsSending(false);
      setIsDialogOpen(true);
    }
  };

  // "Back to Home" or "Try Again" button
  const handleAction = () => {
    pendingAction.current = result === "success" ? "home" : "retry";
    setIsDialogOpen(false);
  };

  // Runs after the open/close animation finishes (page is scrollable again)
  const handleOpenChangeComplete = (open: boolean) => {
    if (open) return;

    const action = pendingAction.current;
    pendingAction.current = null;

    if (action === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (action === "retry") {
      formRef.current?.requestSubmit(); // resend with the same values
    }
  };

  return (
    <section
      id="contact"
      className="bg-neutral-50 pt-10 pb-12 lg:bg-white lg:pt-30 lg:pb-30"
    >
      <div className="container-custom lg:grid lg:grid-cols-[523fr_613fr] lg:items-start lg:gap-16">
        {/* ===== Left column: heading, intro, thumbnails ===== */}
        <div>
          <h2 className="text-display-sm font-bold text-neutral-950 lg:text-display-xl">
            Let&apos;s Work Together
          </h2>
          <p className="mt-3 text-sm font-medium text-neutral-950">
            Have a project in mind or just want to say hi? Drop me a message
            &mdash; I&apos;d love to hear from you.
          </p>

          {/* Project thumbnails */}
          <div className="mt-6 grid grid-cols-3 gap-3 lg:mt-10 lg:max-w-116.5 lg:gap-5">
            {projectThumbs.map((item) => (
              <Link
                key={item.slug}
                href={`/projects/${item.slug}`}
                className="group relative aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={item.image}
                  alt={`${item.title} preview`}
                  fill
                  sizes="(min-width: 1024px) 142px, 33vw"
                  className="object-cover object-top-left transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* ===== Right column: illustration + form ===== */}
        <div className="lg:-mt-40.5">
          {/* Illustration "holding" the form card */}
          <div className="relative z-10 mx-auto mt-6 -mb-3 h-43.5 w-49.25 lg:mt-0">
            <Image
              src="/images/animate.png"
              alt=""
              fill
              sizes="197px"
              className="object-contain object-bottom"
            />
          </div>

          {/* Form card */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="relative rounded-2xl bg-white p-4 shadow-[0_4px_24px_rgba(10,13,18,0.06)] lg:rounded-3xl lg:p-8"
          >
            {/* ...Name, Email, Message fields stay exactly the same... */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className="text-sm font-bold text-neutral-950"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Enter your name"
                className={`${inputClass} h-12`}
              />
            </div>

            <div className="mt-5 flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-sm font-bold text-neutral-950"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className={`${inputClass} h-12`}
              />
            </div>

            <div className="mt-5 flex flex-col gap-1">
              <label
                htmlFor="message"
                className="text-sm font-bold text-neutral-950"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Enter your message"
                className={`${inputClass} h-34 resize-none py-3`}
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="mt-5 h-11 w-full rounded-full bg-primary-300 text-sm font-bold text-white transition-colors hover:bg-primary-400 disabled:cursor-not-allowed disabled:opacity-70 lg:h-12"
            >
              {isSending ? "Sending..." : "Let's Talk"}
            </button>
          </form>
        </div>
      </div>

      {/* Result modal (success / error) */}
      <Dialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onOpenChangeComplete={handleOpenChangeComplete}
      >
        <DialogContent
          showCloseButton={false}
          className="w-[calc(100%-2rem)] max-w-90.25 gap-0 overflow-visible rounded-2xl border-none bg-white p-0 shadow-none sm:max-w-90.25"
        >
          <div className={cn("relative h-40 rounded-t-2xl", content.headerBg)}>
            <Image
              src={content.image}
              alt=""
              width={214}
              height={194}
              className="absolute bottom-2 left-1/2 h-48.5 w-53.5 max-w-none -translate-x-1/2"
            />
          </div>

          <div className="p-6 text-center">
            <DialogTitle className="text-xl leading-8 font-bold text-neutral-950">
              {content.title}
            </DialogTitle>
            <DialogDescription className="mt-2 text-sm text-neutral-950">
              {content.description}
            </DialogDescription>

            <button
              type="button"
              onClick={handleAction}
              className="mt-4 h-11 w-full rounded-full bg-primary-300 text-sm font-bold text-white transition-colors hover:bg-primary-400"
            >
              {content.action}
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
