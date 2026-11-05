"use client";

import { useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { motion, useReducedMotion, type PanInfo } from "framer-motion";
import { ArrowLeft, ArrowRight, Star, User } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah Tan",
    role: "Product Manager at Finovate",
    avatar: "/icons/pict1.svg",
    quote:
      "Working with Dimas was a smooth experience from start to finish. He translated our design into clean, responsive code and even suggested improvements we hadn't thought of. Highly recommended!",
  },
  {
    name: "Daniel Morris",
    role: "Engineering Lead at Brightlane",
    quote:
      "Dimas's code is a joy to review. His components are reusable, well-typed, and easy to follow, which made onboarding new developers onto the project remarkably fast.",
  },
  {
    name: "Aisha Rahman",
    role: "UI/UX Designer at Pixelnest",
    quote:
      "As a designer, I rarely see my Figma files come to life this accurately. Dimas nailed every spacing, animation, and breakpoint, and always asked the right questions.",
  },
  {
    name: "Kenji Watanabe",
    role: "CTO at Loopwave",
    quote:
      "Dimas rebuilt our landing page and cut the load time in half. Our Lighthouse scores went green across the board, and our conversion rate noticeably improved.",
  },
  {
    name: "Maria Gonzales",
    role: "Founder at Sprout Studio",
    quote:
      "Communication was clear from day one. Dimas kept us updated, hit every deadline, and delivered a responsive website our customers love using on their phones.",
  },
  {
    name: "Rizky Pratama",
    role: "Senior Frontend Engineer & Mentor",
    quote:
      "I mentored Dimas early in his journey, and his growth has been impressive. He picks up new tools quickly, writes clean TypeScript, and genuinely cares about accessibility.",
  },
];

const DESKTOP_QUERY = "(min-width: 1024px)";

// true when the screen is at least the lg breakpoint (1024px)
function useIsDesktop() {
  return useSyncExternalStore(
    (onChange) => {
      const query = window.matchMedia(DESKTOP_QUERY);
      query.addEventListener("change", onChange);
      return () => query.removeEventListener("change", onChange);
    },
    () => window.matchMedia(DESKTOP_QUERY).matches,
    () => false, // server render: assume mobile
  );
}

function getCardState(position: number, isDesktop: boolean) {
  // Desktop cards are wider, so the back cards step in further
  const stack = isDesktop
    ? [
        { y: 21, scale: 0.918 },
        { y: 43, scale: 0.833 },
      ]
    : [
        { y: 10, scale: 0.945 },
        { y: 20, scale: 0.89 },
      ];

  if (position < 0) {
    return { x: "-115%", y: 0, scale: 1, rotate: -8, opacity: 0 };
  }
  if (position === 0) {
    return { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 };
  }
  if (position === 1) {
    return { x: 0, ...stack[0], rotate: 0, opacity: 0.6 };
  }
  if (position === 2) {
    return { x: 0, ...stack[1], rotate: 0, opacity: 0.3 };
  }
  return { x: 0, ...stack[1], rotate: 0, opacity: 0 };
}

const SWIPE_THRESHOLD = 80;

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const isDesktop = useIsDesktop();

  const total = testimonials.length;

  // Wrap around: after the last card go back to the first (and vice versa)
  const goNext = () => setActiveIndex((i) => (i + 1) % total);
  const goPrev = () => setActiveIndex((i) => (i - 1 + total) % total);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) goNext();
    else if (info.offset.x > SWIPE_THRESHOLD) goPrev();
  };

  return (
    <section
      id="testimonials"
      className="overflow-hidden bg-white py-10 lg:pt-20 lg:pb-20"
    >
      <div className="container-custom">
        {/* Heading */}
        <h2 className="text-center text-display-sm font-bold text-neutral-950 md:text-display-md lg:text-display-xl">
          What They Say About Working With Me
        </h2>
        <p className="mt-2 text-center text-md text-neutral-950 lg:text-sm">
          Real words from clients, teammates, and mentors I&apos;ve collaborated
          with on various projects.
        </p>

        {/* Card stack: every card sits in the same grid cell, so the
            container height always equals the tallest card (no layout jump).
            Bottom padding leaves room for the back cards peeking out. */}
        <div
          className="mt-6 grid pb-5 lg:mt-12 lg:pb-11"
          role="region"
          aria-roledescription="carousel"
          aria-label="Testimonials"
        >
          {testimonials.map((item, index) => {
            // Circular position relative to the active card (0 = front)
            let position = (index - activeIndex + total) % total;
            // The card right before the active one counts as "flown out"
            if (position === total - 1) position = -1;

            const isFront = position === 0;

            return (
              <motion.figure
                key={item.name}
                initial={false}
                animate={getCardState(position, isDesktop)}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 260, damping: 30 }
                }
                // Scale from the bottom so back cards peek out below the front card
                style={{
                  transformOrigin: "bottom center",
                  zIndex: position < 0 ? 50 : total - position,
                }}
                // Only the front card can be swiped
                drag={isFront ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={handleDragEnd}
                aria-hidden={!isFront}
                className={`col-start-1 row-start-1 flex flex-col items-center rounded-2xl bg-primary-300 p-6 text-center lg:px-12 lg:py-8 ${
                  isFront
                    ? "cursor-grab active:cursor-grabbing"
                    : "pointer-events-none"
                }`}
              >
                {/* 5-star rating */}
                <div className="flex gap-2.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-5 fill-secondary-100 text-secondary-100"
                    />
                  ))}
                </div>

                <blockquote className="mt-4 text-lg font-medium text-white select-none lg:mt-5 lg:text-xl">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                {/* mt-auto pushes the author to the bottom so all cards align */}
                <figcaption className="mt-auto flex flex-col items-center pt-16 lg:pt-8">
                  {item.avatar ? (
                    <div className="relative size-16 overflow-hidden rounded-full">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        sizes="64px"
                        draggable={false}
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex size-16 items-center justify-center rounded-full bg-neutral-300">
                      <User className="size-8 fill-white text-white" />
                    </div>
                  )}

                  <p className="mt-2 text-lg font-semibold text-white lg:text-md">
                    {item.name}
                  </p>
                  <p className="text-md text-white lg:text-sm">{item.role}</p>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>

        {/* Navigation buttons (never disabled because the carousel loops) */}
        <div className="mt-8 flex justify-center gap-3 lg:mt-10">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="flex size-12 items-center justify-center rounded-full border border-neutral-300 text-neutral-950"
          >
            <ArrowLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next testimonial"
            className="flex size-12 items-center justify-center rounded-full border border-neutral-300 text-neutral-950"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
