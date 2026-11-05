import { Suspense } from "react";

import ComingSoon from "@/components/shared/ComingSoon";

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Known project pages are generated at build time
export function generateStaticParams() {
  return [{ slug: "project-1" }, { slug: "project-2" }, { slug: "project-3" }];
}

// Reads the slug (runtime data), so it must render inside <Suspense>
async function ProjectComingSoon({ params }: PageProps) {
  const { slug } = await params;

  const label = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return <ComingSoon label={label} />;
}

export default function ProjectDetailPage({ params }: PageProps) {
  return (
    // Fallback shows the page with the default label while the slug is read
    <Suspense fallback={<ComingSoon />}>
      <ProjectComingSoon params={params} />
    </Suspense>
  );
}
