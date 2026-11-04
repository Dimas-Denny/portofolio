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
    <section id="experience" className="bg-neutral-950 pt-10 pb-12">
      <div className="container-custom">
        {/* Heading */}
        <h2 className="text-display-sm font-bold text-white">
          Experiences That <span className="text-secondary-100">Shaped Me</span>
          !
        </h2>
        <p className="mt-2 text-sm font-semibold text-white">
          From startups to side projects, every step has been a chance to learn,
          build, and level up.
        </p>

        {/* Experience list */}
        <ul className="mt-6 divide-y divide-neutral-800 border-t border-neutral-800">
          {experiences.map((exp) => (
            <li key={exp.company} className="py-6">
              <p className="text-sm font-medium text-neutral-400">
                {exp.period}
              </p>
              <h3 className="mt-1 text-md font-bold text-white">{exp.role}</h3>

              {/* Logo box with double border */}
              <div className="mt-4 inline-block rounded-2xl border border-neutral-800 p-1">
                <div className="flex h-18 w-30 items-center justify-center rounded-xl border border-neutral-800">
                  <div className="relative h-8 w-20">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      fill
                      sizes="80px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm text-neutral-500">{exp.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
