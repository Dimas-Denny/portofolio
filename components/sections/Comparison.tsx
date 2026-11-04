import Image from "next/image";
import { Check, User, X } from "lucide-react";

const withMe = [
  "React Expert",
  "Precise Website Implementation",
  "TypeScript Proficiency",
  "Clean, Maintainable Code",
  "Responsive Website Development",
  "Performance Optimization",
  "UI Design Proficiency (Figma)",
];

const anotherTalent = [
  "Basic React Knowledge",
  "Inconsistent Design Translation",
  "Little to No TypeScript Knowledge",
  "Unstructured Code",
  "Inconsistent Responsiveness",
  "Slow and Heavy Websites",
  "No Design Skills",
];

export default function Comparison() {
  return (
    <section id="why-me" className="bg-white pt-12 pb-10 lg:pt-20 lg:pb-20">
      <div className="container-custom">
        {/* Heading */}
        <h2 className="text-center text-display-sm font-bold text-neutral-950 md:text-display-md lg:text-display-xl">
          More Than Just Code
        </h2>
        <p className="mt-2 text-center text-sm text-neutral-950">
          We care about design, performance, and user experience all in one.
        </p>

        <div className="mt-6 grid gap-6 lg:mt-12 lg:grid-cols-2">
          {/* ===== Card: With Me ===== */}
          <div className="rounded-2xl bg-secondary-100 px-4 py-8 text-center">
            <h3 className="text-lg font-bold text-neutral-950">With Me</h3>

            <div className="relative mx-auto mt-4 size-20 overflow-hidden rounded-full bg-primary-300 lg:mt-6 lg:size-25">
              <Image
                src="/images/potrait.png"
                alt="Dimas Denny Wibowo"
                width={375}
                height={452}
                sizes="(min-width: 1024px) 100px, 80px"
                className="..." /* keep your current position classes */
              />
            </div>

            <ul className="mt-6 flex flex-col gap-3">
              {withMe.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-center gap-3 text-md font-semibold text-neutral-950"
                >
                  <Check className="size-5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ===== Card: Another Talent ===== */}
          <div className="rounded-2xl border border-neutral-300 bg-white px-4 py-8 text-center">
            <h3 className="text-lg font-semibold text-neutral-950">
              Another Talent
            </h3>

            {/* Placeholder avatar */}
            <div className="mx-auto mt-4 flex size-20 items-center justify-center rounded-full bg-neutral-300 lg:mt-6 lg:size-25">
              <User className="size-10 fill-white text-white lg:size-12" />
            </div>

            <ul className="mt-6 flex flex-col gap-3 lg:mt-8 lg:gap-6">
              {anotherTalent.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-center gap-3 text-md font-medium text-neutral-950"
                >
                  <X className="size-5 shrink-0 text-red-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
