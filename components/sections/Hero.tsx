import Image, { getImageProps } from "next/image";
import Link from "next/link";
import { ArrowRight, Mic, Mouse } from "lucide-react";

import { cn } from "@/lib/utils";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "3", label: "Project Delivered" },
  { value: "50", label: "Clients Worldwide" },
];

// Desktop-only vertical pill (order follows the design)
const techIcons = [
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "CSS", icon: "/icons/css.svg" },
  { name: "HTML", icon: "/icons/html.svg" },
  { name: "React", icon: "/icons/react.svg" },
];

/**
 * Art-directed background: the browser downloads ONLY the image that matches
 * the screen (desktop from 1280px, mobile below), never both.
 */
function HeroBackground() {
  const common = {
    alt: "",
    fill: true,
    sizes: "100vw",
    loading: "eager",
    fetchPriority: "high",
  } as const;

  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...common, src: "/images/frame-desktop.png" });
  const {
    props: { srcSet: mobileSrcSet, ...rest },
  } = getImageProps({ ...common, src: "/images/frame-mobile.png" });

  return (
    <picture>
      <source media="(min-width: 1280px)" srcSet={desktopSrcSet} />
      <source media="(max-width: 1279px)" srcSet={mobileSrcSet} />
      {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
      <img {...rest} className="-z-10 object-cover object-top" />
    </picture>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden xl:h-255.75">
      {/* ===== Background (pink + accents), also covers the Navbar area ===== */}
      <HeroBackground />

      <div className="container-custom relative pt-24 md:max-w-xl xl:h-full xl:max-w-316 xl:pt-0 xl:pointer-events-none xl:*:pointer-events-auto">
        {/* Tech stack pill (desktop only) */}
        <ul
          aria-label="Tech stack"
          className="absolute top-26.25 left-8 hidden flex-col gap-6 rounded-full border border-white/20 px-5 py-10 xl:flex"
        >
          {techIcons.map((tech) => (
            <li
              key={tech.name}
              className="flex size-16 items-center justify-center rounded-full border border-white/20 bg-white/10"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={32}
                height={32}
                className="size-8 object-contain"
              />
            </li>
          ))}
        </ul>

        {/* Intro: top on mobile, bottom-left on desktop */}
        <div className="xl:absolute xl:top-153.75 xl:left-8 xl:max-w-112.5">
          {/* Mic icon */}
          <div className="flex size-12 items-center justify-center rounded-full border border-white/20 xl:size-14">
            <Mic className="size-6 text-white xl:size-7" />
          </div>

          <h1 className="mt-4 text-md font-bold text-white xl:text-xl">
            Hi, I&apos;m Dimas Denny Wibowo
          </h1>
          <p className="mt-2 text-sm font-medium text-white xl:mt-3 xl:text-lg">
            a frontend developer passionate about creating seamless digital
            experiences that are fast, responsive, and user-friendly.
          </p>
        </div>

        {/* Stats + button: below the intro on mobile, right column on desktop */}
        <div className="xl:absolute xl:top-58.75 xl:right-8 xl:w-56.25">
          <div className="mt-10 grid grid-cols-2 gap-y-6 xl:mt-0 xl:grid-cols-1 xl:gap-y-0">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={cn(
                  // Mobile: right column gets a divider line on its left
                  index % 2 === 1 && "border-l border-white/20 pl-15",
                  // Desktop: one column, divider line below each item
                  "xl:border-b xl:border-l-0 xl:border-white/20 xl:py-5.5 xl:pl-0 xl:first:pt-0 xl:last:border-b-0 xl:last:pb-0",
                )}
              >
                <p className="text-display-md font-bold text-white xl:text-display-2xl">
                  {stat.value}
                </p>
                <p className="text-xs font-semibold text-white xl:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Me button */}
          <Link
            href="#contact"
            className="mt-8 flex h-12 items-center justify-between rounded-full bg-secondary-100 pr-1 pl-4 text-sm font-semibold text-neutral-950 xl:mt-6 xl:h-13"
          >
            Contact Me
            <span className="flex size-10 items-center justify-center rounded-full bg-neutral-950">
              <ArrowRight className="size-5 text-white" />
            </span>
          </Link>
        </div>

        {/* Available for Hire badge: centered above the title on desktop */}
        <div className="mt-10 flex justify-center xl:absolute xl:inset-x-0 xl:top-43.75 xl:mt-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-300 bg-primary-400 px-4 py-0.5 text-xs font-semibold text-white xl:py-1 xl:text-sm">
            <span className="size-2 rounded-full bg-primary-200" />
            Available for Hire
          </span>
        </div>
      </div>

      {/* ===== Visual area: stars, big title, portrait =====
          Mobile: 452px block under the text.
          Tablet: the same 393px composition scaled up 130% from the bottom.
          Desktop: fills the whole hero, behind the text layer (-z-5). */}
      <div className="relative mt-4 h-113 md:h-147 xl:absolute xl:inset-0 xl:-z-5 xl:mt-0 xl:h-auto">
        <div className="absolute bottom-0 left-1/2 h-113 w-98.25 origin-bottom -translate-x-1/2 md:scale-130 xl:inset-0 xl:h-auto xl:w-auto xl:translate-x-0 xl:scale-100">
          {/* DOM order = stacking order (later elements render on top) */}

          {/* 1. Stars (back-most layer) */}
          <Image
            src="/icons/star.svg"
            alt=""
            width={60}
            height={72}
            className="absolute top-32.5 left-2 h-auto w-15 -translate-x-1/4 xl:top-100 xl:left-[calc(50%-413px)] xl:w-41 xl:translate-x-0"
          />
          <Image
            src="/icons/star.svg"
            alt=""
            width={80}
            height={64}
            className="absolute top-67.5 right-6 h-auto w-20 translate-x-1/4 xl:top-192.5 xl:right-auto xl:left-[calc(50%+211px)] xl:w-30 xl:translate-x-0"
          />

          {/* 2. Solid title (behind the portrait) */}
          <h2 className="absolute inset-x-0 top-10 text-center font-condensed tracking-[-0.02em] text-secondary-100 uppercase xl:top-59.25">
            <span className="block text-[102px] leading-[125.2px] xl:text-[187.76px] xl:leading-57">
              Frontend
            </span>
            <span className="block text-[92px] leading-[112.5px] xl:text-[168.82px] xl:leading-51.25">
              Developer
            </span>
          </h2>

          {/* 3. Portrait */}
          <Image
            src="/images/potrait.png"
            alt="Dimas Denny Wibowo"
            width={610}
            height={735}
            priority
            sizes="(min-width: 1280px) 610px, 375px"
            className="absolute bottom-0 left-[calc(50%+10px)] h-113 w-93.75 max-w-none -translate-x-1/2 xl:left-1/2 xl:h-183.75 xl:w-152.5"
          />

          {/* 4. Outline title (in front of the portrait) -> stroke effect over the face */}
          {/* Must use the exact same size/position as the solid title */}
          <p
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-10 text-center font-condensed tracking-[-0.02em] uppercase text-outline xl:top-59.25"
          >
            <span className="invisible block text-[102px] leading-[125.2px] xl:text-[187.76px] xl:leading-57">
              Frontend
            </span>
            <span className="block text-[92px] leading-[112.5px] xl:text-[168.82px] xl:leading-51.25">
              Developer
            </span>
          </p>

          {/* 5. "Junior" script text */}
          <span className="absolute top-6 left-9.5 -rotate-12 font-script text-[64.59px] leading-[80.7px] tracking-[-0.02em] text-white xl:top-50 xl:left-[calc(50%-402px)] xl:rotate-[-12.34deg] xl:text-[113.23px] xl:leading-[141.5px]">
            Junior
          </span>

          {/* 6. Scroll Down */}
          <a
            href="#about"
            className="absolute inset-x-0 bottom-6 flex items-center justify-center gap-2 text-sm font-medium text-white xl:bottom-12"
          >
            Scroll Down
            <Mouse className="size-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
