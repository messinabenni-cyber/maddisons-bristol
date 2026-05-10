import { Link } from "wouter";
import { businessInfo } from "@/data/businessInfo";
import { type Service, services } from "@/data/services";
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

export function ServicePage({ slug }: { slug: string }) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return <NotFoundPage />;
  return <ServicePageInner service={service} />;
}

function ServicePageInner({ service }: { service: Service }) {
  usePageMeta({
    title: service.title,
    description: service.metaDescription,
    path: `/services/${service.slug}/`,
  });

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 6);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${businessInfo.domain}/` },
          { name: "Services", url: `${businessInfo.domain}/services/` },
          {
            name: service.h1,
            url: `${businessInfo.domain}/services/${service.slug}/`,
          },
        ])}
      />
      <JsonLd data={faqJsonLd(faqs)} />

      {/* Hero */}
      <section>
        <div className="container-prose py-14 sm:py-20 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-3">Service page</p>
            <h1 className="h-display text-4xl sm:text-5xl mb-5">{service.h1}</h1>
            <p className="text-steel-400 max-w-prose2 text-lg mb-8">
              {service.hero}
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
              src={service.image}
              alt={service.h1}
              className="w-full rounded-sm border border-cream-50/10"
            />
          </div>
        </div>
      </section>

      {/* Trust pillars */}
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

      {/* What this service page covers */}
      <Section eyebrow="What this service page covers">
        <h2 className="h-display text-3xl sm:text-4xl mb-4 max-w-prose2">
          Key information for {service.h1.toLowerCase()} enquiries.
        </h2>
        <p className="text-steel-400 max-w-prose2 mb-6">
          This section keeps the first useful details close to the hero so a
          driver can confirm fit, trust the workshop, and choose the next action
          without hunting through the page.
        </p>
        <div className="space-y-4 max-w-prose2 text-steel-400">
          <p>{service.metaDescription}</p>
          <p>
            The {service.h1} page is structured as a standalone landing page so
            Bristol visitors can identify the service quickly, see trust signals
            early, and move straight to phone or quote action.
          </p>
        </div>
      </Section>

      {/* Related */}
      <Section eyebrow="Related pages" tone="dark">
        <h2 className="h-display text-3xl sm:text-4xl mb-4 max-w-prose2">
          Explore the next page that best matches your repair need or location.
        </h2>
        <p className="text-steel-400 max-w-prose2 mb-10">
          Use the links below to compare the nearest matching repair, location,
          or guidance page without losing your place in the enquiry journey.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {related.map((s) => (
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

      <SharedFaq />
      <FinalCta />
    </>
  );
}
