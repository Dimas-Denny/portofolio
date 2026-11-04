import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const portfolios = [
  {
    slug: "portfolio-1",
    title: "Portfolio 1",
    category: "Web Development",
    image: "/images/porto1.png",
    isBest: true,
  },
  {
    slug: "portfolio-2",
    title: "Portfolio 2",
    category: "Web Development",
    image: "/images/porto2.png",
    isBest: true,
  },
  {
    slug: "portfolio-3",
    title: "Portfolio 3",
    category: "Web Development",
    image: "/images/porto3.png",
    isBest: true,
  },
];

function BestBadge() {
  return (
    <span
      className="absolute top-7 -left-2 z-10 rounded-r-md bg-secondary-100 px-2 text-xs leading-5 font-bold text-neutral-950
        before:absolute before:top-full before:left-0 before:border-t-8 before:border-l-8 before:border-t-[#b98424] before:border-l-transparent before:content-['']"
    >
      Best Portfolio
    </span>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-10">
      <div className="container-custom">
        {/* Heading */}
        <h2 className="text-display-sm font-bold text-neutral-950">
          Design to <span className="text-primary-300">Code Accuracy</span>
        </h2>
        <p className="mt-2 text-md text-neutral-950">
          We translated design mockups into pixel-perfect, responsive
          components, ensuring a smooth user experience across all devices.
        </p>

        {/* See All button */}
        <Link
          href="/portfolio"
          className="mt-6 flex h-12 items-center justify-between rounded-full border border-neutral-300 bg-white pr-1 pl-4 text-md font-semibold text-neutral-950"
        >
          See All
          <span className="flex size-10 items-center justify-center rounded-full bg-neutral-950">
            <ArrowRight className="size-5 text-white" />
          </span>
        </Link>

        {/* Portfolio cards */}
        <div className="mt-8 flex flex-col gap-6">
          {portfolios.map((item) => (
            <Link
              key={item.slug}
              href={`/portfolio/${item.slug}`}
              className="group relative block rounded-3xl bg-neutral-100 outline-none focus-visible:ring-2 focus-visible:ring-primary-200"
            >
              {item.isBest && <BestBadge />}

              {/* Preview image: padded on top/left, bleeds off the right edge */}
              <div className="relative mt-4 ml-4 h-70 overflow-hidden rounded-tl-xl">
                <Image
                  src={item.image}
                  alt={`${item.title} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top-left transition-transform duration-500 ease-out group-hover:scale-105 group-focus-visible:scale-105"
                />
              </div>

              {/* Info box */}
              <div className="mt-4 rounded-2xl border border-neutral-200 bg-white p-4">
                <h3 className="text-lg font-bold text-neutral-950 transition-colors duration-300 group-hover:text-primary-300">
                  {item.title}
                </h3>

                {/* Divider line + arrow button */}
                <div className="flex items-center gap-2">
                  <span className="h-px flex-1 bg-neutral-300" />
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary-300 transition-transform duration-300 group-hover:-rotate-45 group-focus-visible:-rotate-45">
                    <ArrowRight className="size-5 text-white" />
                  </span>
                </div>

                <p className="-mt-1 text-sm text-neutral-500">
                  {item.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
