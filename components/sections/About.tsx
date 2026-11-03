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
    <section id="about" className="bg-white py-10">
      <div className="container-custom">
        {/* Intro statement */}
        <h2 className="text-center text-display-sm font-medium text-neutral-950">
          As frontend developers, we bring designs to life with{" "}
          <span className="text-primary-300">clean</span>,{" "}
          <span className="text-primary-300">responsive code</span> that blends
          creativity{" "}
          <Image
            src="/icons/paint.svg"
            alt=""
            width={28}
            height={28}
            className="inline-block size-7 align-[-0.15em]"
          />{" "}
          with usability{" "}
          <Image
            src="/icons/star-glow.svg"
            alt=""
            width={28}
            height={28}
            className="inline-block size-7 align-[-0.15em]"
          />
          .
        </h2>

        {/* Feature list */}
        <ul className="mt-15 divide-y divide-neutral-200">
          {features.map((feature) => (
            <li key={feature.title} className="py-5 first:pt-0">
              {/* Icon inside a circle */}
              <div className="flex size-12 items-center justify-center rounded-full border border-neutral-300">
                <Image src={feature.icon} alt="" width={24} height={24} />
              </div>

              <h3 className="mt-4 text-lg font-bold text-neutral-950 uppercase">
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
