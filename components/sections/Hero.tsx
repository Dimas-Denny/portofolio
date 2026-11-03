import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mic, Mouse } from "lucide-react";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "3", label: "Project Delivered" },
  { value: "50", label: "Clients Worldwide" },
];

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      {/* ===== Background (pink + accents), also covers the Navbar area ===== */}
      <Image
        src="/images/frame-mobile.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-top"
      />

      {/* ===== Text content ===== */}
      {/* pt-24 = space for the fixed Navbar (16px top + 56px height + gap) */}
      <div className="container-custom pt-24">
        {/* Mic icon */}
        <div className="flex size-12 items-center justify-center rounded-full border border-white/20">
          <Mic className="size-6 text-white" />
        </div>

        <h1 className="mt-4 text-md font-bold text-white">
          Hi, I&apos;m Dimas Denny Wibowo
        </h1>
        <p className="mt-2 text-sm font-medium text-white">
          a frontend developer passionate about creating seamless digital
          experiences that are fast, responsive, and user-friendly.
        </p>

        {/* Stats (2x2 grid) */}
        <div className="mt-10 grid grid-cols-2 gap-y-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              // right column gets a divider line on its left
              className={
                index % 2 === 1 ? "border-l border-white/20 pl-15" : ""
              }
            >
              <p className="text-display-md font-bold text-white">
                {stat.value}
              </p>
              <p className="text-xs font-semibold text-white">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Contact Me button */}
        <Link
          href="#contact"
          className="mt-8 flex h-12 items-center justify-between rounded-full bg-secondary-100 pr-1 pl-4 text-sm font-semibold text-neutral-950"
        >
          Contact Me
          <span className="flex size-10 items-center justify-center rounded-full bg-neutral-950">
            <ArrowRight className="size-5 text-white" />
          </span>
        </Link>

        {/* Available for Hire badge */}
        <div className="mt-10 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-300 bg-primary-400 px-4 py-0.5 text-xs font-semibold text-white">
            <span className="size-2 rounded-full bg-primary-200" />
            Available for Hire
          </span>
        </div>
      </div>

      {/* ===== Visual area: stars, big title, portrait ===== */}
      {/* DOM order = stacking order (later elements render on top) */}
      <div className="relative mt-4 h-113">
        {/* 1. Stars (back-most layer) */}
        <Image
          src="/icons/star.svg"
          alt=""
          width={60}
          height={72}
          className="absolute top-32.5 left-2 h-auto w-15 -translate-x-1/4"
        />
        <Image
          src="/icons/star.svg"
          alt=""
          width={80}
          height={64}
          className="absolute top-67.5 right-6 h-auto w-20 translate-x-1/4"
        />

        {/* 2. Solid title (behind the portrait) */}
        <h2 className="absolute inset-x-0 top-10 text-center font-condensed tracking-[-0.02em] text-secondary-100 uppercase">
          <span className="block text-[102px] leading-[125.2px]">Frontend</span>
          <span className="block text-[92px] leading-[112.5px]">Developer</span>
        </h2>

        {/* 3. Portrait */}
        <Image
          src="/images/potrait.png"
          alt="Edwin Anderson"
          width={375}
          height={452}
          className="absolute bottom-0 left-[calc(50%+10px)] h-113 w-93.75 max-w-none -translate-x-1/2"
        />

        {/* 4. Outline title (in front of the portrait) -> stroke effect over the face */}
        {/* Must use the exact same size/position as the solid title */}
        <p
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-10 text-center font-condensed tracking-[-0.02em] uppercase text-outline"
        >
          <span className="invisible block text-[102px] leading-[125.2px]">
            Frontend
          </span>
          <span className="block text-[92px] leading-[112.5px]">Developer</span>
        </p>

        {/* 5. "Junior" script text */}
        <span className="absolute top-6 left-9.5 -rotate-12 font-script text-[64.59px] leading-[80.7px] tracking-[-0.02em] text-white">
          Junior
        </span>

        {/* 6. Scroll Down */}
        <a
          href="#about"
          className="absolute inset-x-0 bottom-6 flex items-center justify-center gap-2 text-sm font-medium text-white"
        >
          Scroll Down
          <Mouse className="size-5" />
        </a>
      </div>
    </section>
  );
}
