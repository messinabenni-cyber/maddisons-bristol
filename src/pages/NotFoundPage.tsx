import { Link } from "wouter";
import { businessInfo } from "@/data/businessInfo";
import { usePageMeta } from "@/lib/seo";

export function NotFoundPage() {
  usePageMeta({
    title: "Page not found | Maddisons Vehicle Body Repair",
    description:
      "The page you were looking for could not be found. Find the right service or area page below.",
    path: "/404/",
  });
  return (
    <section>
      <div className="container-prose py-20 sm:py-28 text-center">
        <p className="eyebrow mb-3">404</p>
        <h1 className="h-display text-4xl sm:text-5xl mb-5">
          That page has moved or was never built.
        </h1>
        <p className="text-steel-400 max-w-prose2 mx-auto mb-8">
          You can find the right service or area page from the homepage, or
          call the workshop directly for the fastest answer.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn-primary">Return home</Link>
          <a href={`tel:${businessInfo.phoneE164}`} className="btn-ghost">
            Call {businessInfo.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
