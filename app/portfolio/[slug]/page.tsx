import ComingSoon from "@/components/shared/ComingSoon";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const label = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return <ComingSoon label={label} />;
}
