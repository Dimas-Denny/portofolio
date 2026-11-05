import Image from "next/image";

const experiences = [
  {
    period: "2025 - Present",
    role: "Frontend Developer",
    company: "Airbnb",
    logo: "/icons/airbnb.svg",
    description:
      "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
  },
  {
    period: "2025 - Present",
    role: "Frontend Developer",
    company: "Airtasker",
    logo: "/icons/airtasker.svg",
    description:
      "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
  },
  {
    period: "2025 - Present",
    role: "Frontend Developer",
    company: "Slack",
    logo: "/icons/slack.svg",
    description:
      "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-neutral-950 pt-10 pb-12 lg:pt-20 lg:pb-10"
    >
      <div className="container-custom">
        {/* Header: title on the left, intro on the right (desktop) */}
        <div className="lg:flex lg:items-start lg:justify-between lg:gap-10">
          <h2 className="text-display-sm font-bold text-white md:text-display-md lg:text-display-2xl">
            Experiences That{" "}
            {/* lg:block forces "Shaped Me!" onto its own line on desktop */}
            <span className="lg:block">
              <span className="text-secondary-100">Shaped Me</span>!
            </span>
          </h2>
          <p className="mt-2 text-sm font-medium text-white lg:mt-0 lg:max-w-91.5 lg:text-md">
            From startups to side projects, every step has been a chance to
            learn, build, and level up.
          </p>
        </div>

        {/* Experience list (divider above the list + between items) */}
        <ul className="mt-6 divide-y divide-neutral-800 border-t border-neutral-800 lg:mt-12">
          {experiences.map((exp) => (
            <li
              key={exp.company}
              // Desktop: 3 columns -> period/role | logo | description
              className="py-6 lg:grid lg:grid-cols-[28fr_29fr_43fr] lg:items-start lg:py-10"
            >
              {/* Column 1: period + role */}
              <div>
                <p className="text-sm text-neutral-400">{exp.period}</p>
                <h3 className="mt-1 text-md font-bold text-white lg:max-w-37.5 lg:text-xl">
                  {exp.role}
                </h3>
              </div>

              {/* Column 2: logo box with double border */}
              <div className="mt-4 inline-block rounded-2xl border border-neutral-800 p-1 lg:mt-0 lg:justify-self-start">
                <div className="flex h-16 w-28 items-center justify-center rounded-xl border border-neutral-800 lg:h-26 lg:w-46.25">
                  <div className="relative h-8 w-20 lg:h-11 lg:w-32">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      fill
                      sizes="(min-width: 1024px) 128px, 80px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Column 3: description */}
              <p className="mt-4 text-sm text-neutral-500 lg:mt-0 lg:text-md">
                {exp.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
