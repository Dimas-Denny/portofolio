"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What technologies do you work with?",
    answer:
      "I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
  },
  {
    question: "Do you work on freelance or remote projects?",
    answer:
      "Absolutely. I've collaborated with clients and teams across different time zones, fully remote. I keep things transparent with regular progress updates, clear documentation, and tools like Slack, Notion, and GitHub, so you always know where your project stands.",
  },
  {
    question: "Can you convert Figma or Sketch designs into code?",
    answer:
      "Yes, and it's my favorite part of the job. I turn Figma or Sketch files into pixel-perfect, responsive code, matching every spacing, color, and typography detail, then add smooth interactions that bring the design to life on any screen size.",
  },
  {
    question: "Do you collaborate with backend developers or teams?",
    answer:
      "Definitely. I work closely with backend developers to integrate REST and GraphQL APIs, align on data structures early, and handle loading, error, and empty states gracefully. Good communication keeps the frontend and backend moving in sync.",
  },
  {
    question: "Are you available for full-time roles?",
    answer:
      "Yes, I'm open to full-time opportunities where I can grow with a product team for the long run. If you think I'd be a great fit, let's talk. I'd love to hear about what you're building.",
  },
];

/* Circle icon: "+" when open, "−" when closed (following the Figma design) */
function ToggleIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative flex size-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 lg:size-12",
        isOpen
          ? "border-primary-300 bg-primary-300 text-white"
          : "border-neutral-300 bg-white text-neutral-950",
      )}
    >
      {/* Horizontal bar (always visible) */}
      <span className="absolute h-0.5 w-3 rounded-full bg-current lg:w-4" />
      {/* Vertical bar: grows in when open to form a "+" */}
      <span
        className={cn(
          "absolute h-3 w-0.5 rounded-full bg-current transition-transform duration-300 lg:h-4",
          isOpen ? "scale-y-100" : "scale-y-0",
        )}
      />
    </span>
  );
}

export default function Faq() {
  // First item open by default.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="bg-neutral-100 py-10 lg:pt-20 lg:pb-14">
      <div className="container-custom">
        {/* Heading */}
        <h2 className="text-center text-display-sm font-bold text-neutral-950 md:text-display-md lg:text-display-xl">
          Let&apos;s Clear Things Up
        </h2>
        <p className="mt-2 text-center text-sm text-neutral-950">
          I&apos;ve answered a few questions that usually come up when working
          with a frontend developer like me.
        </p>

        {/* FAQ list */}
        <ul className="mt-6 divide-y divide-neutral-300 lg:mt-10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const number = String(index + 1).padStart(2, "0");
            const buttonId = `faq-button-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <li key={faq.question} className="py-5 first:pt-0">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-start gap-3 text-left text-lg font-semibold text-neutral-950 lg:items-center lg:gap-0 lg:text-xl"
                  >
                    <span className="w-7 shrink-0 lg:w-51.75">{number}</span>
                    <span className="flex-1">{faq.question}</span>
                    <ToggleIcon isOpen={isOpen} />
                  </button>
                </h3>

                {/* Answer: animates height from 0 to auto */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-2 pl-10 text-sm text-neutral-600 lg:max-w-238.75 lg:pl-51.75 lg:text-md">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
