import Image from "next/image";

const features = [
  {
    icon: "/icons/gear.svg",
    title: "Component-Based Development",
    description:
      "Reusable, scalable code built with modern frameworks like React or Vue.",
  },
  {
    icon: "/icons/paint.svg",
    title: "Pixel-Perfect UI Implementation",
    description:
      "Translating design into high-fidelity user interfaces with attention to detail.",
  },
  {
    icon: "/icons/phone.svg",
    title: "Responsive & Accessible Design",
    description:
      "Optimized layouts that work seamlessly across all screen sizes and devices.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-10 lg:py-20">
      <div className="container-custom">
        {/* Intro statement */}
        <h2 className="text-center text-display-sm font-medium text-neutral-950 md:text-display-md lg:mx-auto lg:max-w-215 lg:text-display-lg">
          As frontend developers, we bring designs to life with{" "}
          <span className="text-primary-300">clean</span>,{" "}
          <span className="text-primary-300">responsive code</span> that blends
          creativity{" "}
          <Image
            src="/icons/paint.svg"
            alt=""
            width={28}
            height={28}
            className="inline-block size-7 align-[-0.15em] lg:size-9"
          />{" "}
          with usability{" "}
          <Image
            src="/icons/star-glow.svg"
            alt=""
            width={28}
            height={28}
            className="inline-block size-7 align-[-0.15em] lg:size-9"
          />
          .
        </h2>

        {/* Feature list */}
        <ul className="mt-15 lg:mt-40 lg:grid lg:grid-cols-3">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="border-b border-neutral-200 py-5 first:pt-0 lg:relative lg:border-b-0 lg:px-10 lg:py-0 lg:first:pl-0 lg:last:pr-0 lg:not-first:before:absolute lg:not-first:before:top-5.5 lg:not-first:before:bottom-4.5 lg:not-first:before:left-0 lg:not-first:before:w-px lg:not-first:before:bg-neutral-200 lg:not-first:before:content-['']"
            >
              {/* Icon inside a circle */}
              <div className="flex size-12 items-center justify-center rounded-full border border-neutral-300 lg:size-16">
                <Image
                  src={feature.icon}
                  alt=""
                  width={32}
                  height={32}
                  className="size-6 object-contain lg:size-8"
                />
              </div>

              <h3 className="mt-4 text-lg font-bold text-neutral-950 uppercase lg:text-xl">
                {feature.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-950">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
