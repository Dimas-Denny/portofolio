"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";

// Same images as the Portfolio section
const portfolioThumbs = [
  { slug: "portfolio-3", image: "/images/porto3.png", title: "Portfolio 3" },
  { slug: "portfolio-1", image: "/images/porto1.png", title: "Portfolio 1" },
  { slug: "portfolio-2", image: "/images/porto2.png", title: "Portfolio 2" },
];

const inputClass =
  "w-full rounded-xl border border-neutral-300 bg-white px-4 text-sm text-neutral-950 placeholder:text-neutral-500 outline-none transition-colors focus:border-primary-300 focus:ring-2 focus:ring-primary-100";

export default function Contact() {
  const [isSent, setIsSent] = useState(false);

  // show a success message and reset the form
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setIsSent(true);
  };

  return (
    <section id="contact" className="bg-neutral-50 pt-10 pb-12">
      <div className="container-custom">
        {/* Heading */}
        <h2 className="text-display-sm font-bold text-neutral-950">
          Let&apos;s Work Together
        </h2>
        <p className="mt-3 text-sm font-medium text-neutral-950">
          Have a project in mind or just want to say hi? Drop me a message
          &mdash; I&apos;d love to hear from you.
        </p>

        {/* Portfolio thumbnails */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          {portfolioThumbs.map((item) => (
            <Link
              key={item.slug}
              href={`/portfolio/${item.slug}`}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={item.image}
                alt={`${item.title} preview`}
                fill
                sizes="(max-width: 768px) 33vw, 200px"
                className="object-cover object-top-left transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </Link>
          ))}
        </div>

        {/* Illustration "holding" the form card */}
        <div className="relative z-10 mx-auto mt-6 -mb-3 h-43.5 w-49.25">
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
          onSubmit={handleSubmit}
          className="relative rounded-2xl bg-white p-4 shadow-[0_4px_24px_rgba(10,13,18,0.06)]"
        >
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
            className="mt-5 h-11 w-full rounded-full bg-primary-300 text-sm font-bold text-white transition-colors hover:bg-primary-400"
          >
            Let&apos;s Talk
          </button>

          {/* Success message */}
          <p
            aria-live="polite"
            className="mt-3 text-center text-sm text-primary-300"
          >
            {isSent &&
              "Thanks! Your message has been sent. I'll get back to you soon."}
          </p>
        </form>
      </div>
    </section>
  );
}
