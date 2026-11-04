import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const skills = [
  {
    icon: "/icons/html.svg",
    name: "HTML",
    description: "Crafting semantic, accessible HTML structures.",
  },
  {
    icon: "/icons/css.svg",
    name: "CSS",
    description: "Crafting semantic, accessible HTML structures.",
  },
  {
    icon: "/icons/javascript.svg",
    name: "Javascript",
    description: "Crafting semantic, accessible HTML structures.",
  },
  {
    icon: "/icons/react.svg",
    name: "React",
    description: "Crafting semantic, accessible HTML structures.",
  },
];

export default function Skill() {
  return (
    <section
      id="skill"
      className="bg-linear-to-b from-white to-primary-100/60 pt-16 pb-10"
    >
      <div className="container-custom">
        {/* Heading */}
        <h2 className="text-center text-display-sm font-bold text-neutral-950">
          Code, Design, and Everything in Between
        </h2>
        <p className="mt-3 text-center text-md text-neutral-950">
          These are the technologies that power my workflow and bring ideas to
          life.
        </p>

        {/* Carousel: 2 cards per view on mobile */}
        <Carousel opts={{ align: "start" }} className="mt-6">
          {/* Negative margin + item padding = gap between cards */}
          <CarouselContent className="-ml-4">
            {skills.map((skill, index) => {
              // Odd cards (1st, 3rd) are yellow, even cards are white
              const isFilled = index % 2 === 0;

              return (
                <CarouselItem key={skill.name} className="basis-1/2 pl-4">
                  <div
                    className={cn(
                      "flex h-70 flex-col items-center justify-center rounded-full px-4 text-center",
                      isFilled
                        ? "bg-secondary-100"
                        : "border border-neutral-300 bg-white",
                    )}
                  >
                    {/* Icon circle */}
                    <div
                      className={cn(
                        "flex size-14 items-center justify-center rounded-full",
                        isFilled ? "bg-white" : "bg-neutral-100",
                      )}
                    >
                      <Image
                        src={skill.icon}
                        alt=""
                        width={28}
                        height={28}
                        className="size-7 object-contain"
                      />
                    </div>

                    <h3 className="mt-6 text-md font-bold text-neutral-950">
                      {skill.name}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-950">
                      {skill.description}
                    </p>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          {/* Navigation buttons */}
          <div className="mt-8 flex justify-center gap-3">
            <CarouselPrevious className="static size-12 translate-y-0 border-neutral-300 bg-transparent" />
            <CarouselNext className="static size-12 translate-y-0 border-neutral-300 bg-transparent" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
