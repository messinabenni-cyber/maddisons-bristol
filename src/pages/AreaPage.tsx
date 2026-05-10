import { Link } from "wouter";
import { businessInfo } from "@/data/businessInfo";
import { type Area, priorityAreas, getArea } from "@/data/areas";
import {
  PremiumStandard,
  WorkshopStandards,
  SharedFaq,
  FinalCta,
  Section,
} from "@/components/SharedSections";
import {
  usePageMeta,
  breadcrumbJsonLd,
  faqJsonLd,
  JsonLd,
} from "@/lib/seo";
import { faqs } from "@/data/faqs";
import { NotFoundPage } from "./NotFoundPage";

export function AreaPage({ slug }: { slug: string }) {
  const area = getArea(slug);
  if (!area || !area.hasOwnPage) return <NotFoundPage />;
  return <AreaPageInner area={area} />;
}

function AreaPageInner({ area }: { area: Area }) {
  usePageMeta({
    title: area.title,
    description: area.metaDescription,
    path: `/areas/car-body-repair-${area.slug}/`,
  });

  const related = priorityAreas
    .filter((a) => a.slug !== area.slug)
    .slice(0, 6);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${businessInfo.domain}/` },
          { name: "Areas", url: `${businessInfo.domain}/areas/` },
          {
            name: area.h1,
            url: `${businessInfo.domain}/areas/car-body-repair-${area.slug}/`,
          },
        ])}
      />
      <JsonLd data={faqJsonLd(faqs)} />

      {/* Hero */}
      <section>
        <div className="container-prose py-14 sm:py-20 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-3">Area page</p>
            <h1 className="h-display text-4xl sm:text-5xl mb-5">{area.h1}</h1>
            <p className="text-steel-400 max-w-prose2 text-lg mb-8">
              {area.metaDescription}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact/" className="btn-primary">Get a free quote</Link>
              <a href={`tel:${businessInfo.phoneE164}`} className="btn-ghost">
                {businessInfo.phone}
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src="/images/maddisons-contact-vehicle-dropoff.png"
              alt={`Body Repair ${area.name}`}
              className="w-full rounded-sm border border-cream-50/10"
            />
          </div>
        </div>
      </section>

      <Section tone="dark">
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { t: "Fast action", b: "Direct phone number visible above the fold for urgent callers." },
            { t: "Known workshop", b: "Brislington workshop location and weekday opening hours shown early." },
            { t: "Estimate clarity", b: "Photo-led estimate route explained before the visitor reaches the footer." },
          ].map((it) => (
            <div key={it.t}>
              <p className="eyebrow mb-1.5">Standard</p>
              <h3 className="font-display uppercase tracking-wider2 text-base mb-2">{it.t}</h3>
              <p className="text-steel-400 text-sm">{it.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <PremiumStandard />
      <WorkshopStandards />

      {/* Local guidance */}
      <Section eyebrow="What local drivers need to know">
        <h2 className="h-display text-3xl sm:text-4xl mb-4 max-w-prose2">
          Repair guidance for drivers in {area.name}.
        </h2>
        <p className="text-steel-400 max-w-prose2 mb-6">
          If you are searching from {area.name}, the goal is simple: confirm
          Maddisons covers your area, understand the kind of repair work
          handled, and see a quick route to a quote or phone call.
        </p>
        <div className="space-y-4 max-w-prose2 text-steel-400">
          <p>{area.cardCopy}</p>
          <p>
            This location page exists to match local search intent for {area.name}{" "}
            while keeping the actual workshop identity, phone number, and service
            links visible without forcing users back to the homepage.
          </p>
          <p>
            From dents and bumper damage to paintwork and accident repair
            support, Maddisons routes local drivers toward the right next step
            with minimal friction.
          </p>
        </div>
      </Section>

      <Section eyebrow="Related pages" tone="dark">
        <h2 className="h-display text-3xl sm:text-4xl mb-4 max-w-prose2">
          Explore the next page that best matches your repair need or location.
        </h2>
        <p className="text-steel-400 max-w-prose2 mb-10">
          If you need a more specific repair route than this {area.name} page
          provides, use the links below to move into the right service or
          nearby area page.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {related.map((a) => (
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
      </Section>

      <SharedFaq />
      <FinalCta />
    </>
  );
}
