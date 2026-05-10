import { Link } from "wouter";
import { businessInfo } from "@/data/businessInfo";
import { areas, priorityAreas } from "@/data/areas";
import {
  PremiumStandard,
  FinalCta,
  Section,
} from "@/components/SharedSections";
import { usePageMeta } from "@/lib/seo";

export function AreasIndexPage() {
  usePageMeta({
    title: "Areas We Cover | Car Body Repair Bristol & Nearby | Maddisons",
    description:
      "Browse Bristol and nearby area landing pages for Bath, Brislington, Clifton, Filton, Keynsham, Kingswood, Southville, Stockwood, Whitchurch and more.",
    path: "/areas/",
  });
  const secondary = areas.filter((a) => !a.hasOwnPage);
  return (
    <>
      <section>
        <div className="container-prose py-14 sm:py-20">
          <p className="eyebrow mb-3">Areas covered</p>
          <h1 className="h-display text-4xl sm:text-5xl mb-5 max-w-prose2">
            Local body repair pages for Bristol and nearby areas.
          </h1>
          <p className="text-steel-400 max-w-prose2 mb-8">
            These local landing pages help drivers searching by area find the
            nearest relevant path quickly, while keeping the workshop phone
            number, service links, and reassurance visible from the start.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/contact/" className="btn-primary">Request a quote</Link>
            <a href={`tel:${businessInfo.phoneE164}`} className="btn-ghost">
              {businessInfo.phone}
            </a>
          </div>
        </div>
      </section>

      <PremiumStandard />

      <Section eyebrow="All areas" tone="dark">
        <h2 className="h-display text-3xl sm:text-4xl mb-4 max-w-prose2">
          Find the Bristol-area page that matches where you live, work, or
          need help after damage.
        </h2>
        <p className="text-steel-400 max-w-prose2 mb-10">
          Location pages are grouped here so visitors coming from navigation or
          referrals can jump directly to the nearest page with local context
          and service pathways.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {priorityAreas.map((a) => (
            <Link
              key={a.slug}
              href={`/areas/car-body-repair-${a.slug}/`}
              className="card hover:border-accent-500/40 transition-colors"
            >
              <h3 className="font-display uppercase tracking-wider2 text-base mb-2">
                Body Repair {a.name}
              </h3>
              <p className="text-steel-400">{a.cardCopy}</p>
              <p className="text-accent-500 eyebrow mt-4">Explore page →</p>
            </Link>
          ))}
        </div>

        {secondary.length > 0 && (
          <div className="mt-14">
            <p className="eyebrow mb-3">Other areas served</p>
            <h3 className="font-display uppercase tracking-wider2 text-xl mb-6">
              Nearby Bristol locations covered
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {secondary.map((a) => (
                <div key={a.slug} className="card">
                  <h4 className="font-display uppercase tracking-wider2 text-base mb-2">
                    Body Repair {a.name}
                  </h4>
                  <p className="text-steel-400 text-sm">{a.cardCopy}</p>
                  <p className="text-steel-500 eyebrow mt-3">
                    Call {businessInfo.phone} to discuss
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Section>

      <FinalCta />
    </>
  );
}
