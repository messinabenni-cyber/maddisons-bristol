import { Link } from "wouter";
import { businessInfo } from "@/data/businessInfo";
import { services } from "@/data/services";
import {
  PremiumStandard,
  FinalCta,
  Section,
} from "@/components/SharedSections";
import { usePageMeta } from "@/lib/seo";

export function ServicesIndexPage() {
  usePageMeta({
    title: "Services | Maddisons Vehicle Body Repair Bristol",
    description:
      "Explore accident repair, bumper repair, dent removal, paintwork, wheel refurbishment, insurance repairs, and specialist bodywork services from Maddisons in Bristol.",
    path: "/services/",
  });
  return (
    <>
      <section>
        <div className="container-prose py-14 sm:py-20">
          <p className="eyebrow mb-3">Repair services</p>
          <h1 className="h-display text-4xl sm:text-5xl mb-5 max-w-prose2">
            Vehicle body repair services built for high-intent Bristol searches.
          </h1>
          <p className="text-steel-400 max-w-prose2 mb-8">
            This hub groups Maddisons' core service landing pages so drivers can
            move straight into the repair type that matches their damage,
            insurer question, or cosmetic issue.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/contact/" className="btn-primary">Get a free quote</Link>
            <a href={`tel:${businessInfo.phoneE164}`} className="btn-ghost">
              {businessInfo.phone}
            </a>
          </div>
        </div>
      </section>

      <PremiumStandard />

      <Section eyebrow="All services" tone="dark">
        <h2 className="h-display text-3xl sm:text-4xl mb-4 max-w-prose2">
          Choose the page that matches the damage, finish issue, or repair
          route you need.
        </h2>
        <p className="text-steel-400 max-w-prose2 mb-10">
          Each service page is designed as a standalone landing page with a
          clear repair explanation, direct contact actions, and local trust
          signals visible early in the page flow.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}/`}
              className="card hover:border-accent-500/40 transition-colors"
            >
              <h3 className="font-display uppercase tracking-wider2 text-base mb-2">
                {s.h1}
              </h3>
              <p className="text-steel-400">{s.cardCopy}</p>
              <p className="text-accent-500 eyebrow mt-4">Explore page →</p>
            </Link>
          ))}
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
