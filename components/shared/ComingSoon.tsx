import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type ComingSoonProps = {
  label?: string;
};

export default function ComingSoon({ label = "Project" }: ComingSoonProps) {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-linear-to-b from-white to-primary-100 px-4 text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-primary-300 bg-primary-400 px-4 py-0.5 text-sm font-medium text-white">
        <span className="size-2 rounded-full bg-primary-200" />
        {label}
      </span>

      <h1 className="mt-4 text-display-lg font-bold text-neutral-950">
        Coming <span className="text-primary-300">Soon</span>
      </h1>
      <p className="mt-2 max-w-sm text-md text-neutral-600">
        This page is still under construction. Check back soon for the full case
        study.
      </p>

      {/* Back to the project section on the home page */}
      <Link
        href="/#project"
        className="mt-8 inline-flex h-12 items-center gap-3 rounded-full bg-secondary-100 pr-5 pl-1 text-md font-semibold text-neutral-950"
      >
        <span className="flex size-10 items-center justify-center rounded-full bg-neutral-950">
          <ArrowLeft className="size-5 text-white" />
        </span>
        Back to Home
      </Link>
    </main>
  );
}
