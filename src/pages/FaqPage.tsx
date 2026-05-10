import { businessInfo } from "@/data/businessInfo";
import { faqs } from "@/data/faqs";
import {
  WorkshopStandards,
  PremiumStandard,
  FinalCta,
  SharedFaq,
  Section,
} from "@/components/SharedSections";
import { usePageMeta, faqJsonLd, JsonLd } from "@/lib/seo";

export function FaqPage() {
  usePageMeta({
    title: "Car Body Repair FAQ Bristol | Maddisons",
    description:
      "Find answers to common car body repair FAQ Bristol questions. Maddisons covers costs, timescales, insurance claims and repair processes.",
    path: "/faq/",
  });
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <section>
        <div className="container-prose py-14 sm:py-20">
          <p className="eyebrow mb-3">FAQ resource</p>
          <h1 className="h-display text-4xl sm:text-5xl mb-5 max-w-prose2">
            Car body repair FAQ Bristol
          </h1>
          <p className="text-steel-400 max-w-prose2 mb-8">
            Find answers to common car body repair FAQ Bristol questions.
            Maddisons covers costs, timescales, insurance claims and repair
            processes.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:${businessInfo.phoneE164}`} className="btn-ghost">
              {businessInfo.phone}
            </a>
            <a href="/contact/" className="btn-primary">Get a free quote</a>
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
            <div key={it.t} className="card">
              <h3 className="font-display uppercase tracking-wider2 text-base mb-2">{it.t}</h3>
              <p className="text-steel-400">{it.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <PremiumStandard />
      <WorkshopStandards />

      <SharedFaq />
      <FinalCta />
    </>
  );
}
