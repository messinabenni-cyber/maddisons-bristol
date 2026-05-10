import { Link } from "wouter";
import { businessInfo } from "@/data/businessInfo";
import { services } from "@/data/services";
import { priorityAreas } from "@/data/areas";
import { caseStudies } from "@/data/caseStudies";
import { testimonials } from "@/data/testimonials";
import {
  PremiumStandard,
  WorkshopStandards,
  SharedFaq,
  FinalCta,
  Section,
} from "@/components/SharedSections";
import {
  usePageMeta,
  autoBodyShopJsonLd,
  faqJsonLd,
  JsonLd,
} from "@/lib/seo";
import { faqs } from "@/data/faqs";

export function HomePage() {
  usePageMeta({
    title: "Maddisons Vehicle Body Repair | Car Body Repair Bristol",
    description:
      "Mobile-first, conversion-focused vehicle body repair website for Bristol drivers needing accident repair, dent removal, paintwork, and clear next steps.",
    path: "/",
  });

  return (
    <>
      <JsonLd data={autoBodyShopJsonLd()} />
      <JsonLd data={faqJsonLd(faqs)} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-prose py-16 sm:py-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4">Bristol vehicle body repair specialists</p>
            <h1 className="h-display text-4xl sm:text-5xl lg:text-6xl mb-6">
              Car body repair in Bristol with a clearer estimate path, stronger
              proof, and a more serious workshop presence.
            </h1>
            <p className="text-steel-400 max-w-prose2 text-lg mb-8">
              Maddisons is being rebuilt around the standards that matter when a
              driver is stressed and needs confidence quickly: visible workshop
              facts, practical estimate guidance, repair-specific landing pages,
              and a contact route that feels like real service rather than a
              generic website funnel.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact/" className="btn-primary">
                Get a free quote
              </Link>
              <a href={`tel:${businessInfo.phoneE164}`} className="btn-ghost">
                Call the workshop
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src="/images/maddisons-hero-workshop.png"
              alt="Premium vehicle positioned inside a modern Bristol body repair workshop"
              className="w-full rounded-sm border border-cream-50/10"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* CORE PROPS */}
      <Section eyebrow="What premium buyers notice">
        <h2 className="h-display text-3xl sm:text-4xl mb-3 max-w-prose2">
          The first screen should feel like a serious Bristol repair business
          with an obvious next step.
        </h2>
        <div className="grid sm:grid-cols-3 gap-5 mt-10">
          {[
            {
              t: "Known Bristol base",
              b: "Brislington workshop address, weekday hours, and direct phone route visible before the visitor scrolls too far.",
            },
            {
              t: "Photo-first estimate flow",
              b: "The quote journey is framed around sending clear photos, a short damage summary, and the right next step rather than a vague form funnel.",
            },
            {
              t: "Insurance-aware guidance",
              b: "Where a claim or third-party process is involved, Maddisons explains the practical route early so the customer is not left decoding the process alone.",
            },
          ].map((it) => (
            <div key={it.t} className="card">
              <h3 className="font-display uppercase tracking-wider2 text-base mb-2">
                {it.t}
              </h3>
              <p className="text-steel-400">{it.b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* STATS */}
      <Section tone="dark">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10">
          <Stat value={`${businessInfo.yearsExperience}+`} label="Years of repair experience" />
          <Stat value={`${businessInfo.servicesCount}`} label="Core repair services" />
          <Stat value={`${businessInfo.areasCount}`} label="Priority local landing pages" />
          <Stat value={`${businessInfo.fastTriageSeconds} sec`} label="To find the right next step" />
        </div>
      </Section>

      <PremiumStandard />

      {/* QUOTE PATH */}
      <Section eyebrow="How the better quote path works">
        <h2 className="h-display text-3xl sm:text-4xl mb-4 max-w-prose2">
          Fast paths for drivers who need clarity, not a maze of choices.
        </h2>
        <p className="text-steel-400 max-w-prose2 mb-10">
          The stronger version of the site behaves like a knowledgeable workshop
          reception: identify the issue, explain what happens next, and keep
          direct contact visible from every major decision point.
        </p>
        <ol className="grid md:grid-cols-3 gap-5">
          {[
            {
              n: "01",
              t: "Send photos or call the workshop",
              b: "Tell Maddisons what happened, share a few vehicle photos, and get routed quickly to the right service path.",
            },
            {
              n: "02",
              t: "Receive a clear repair plan",
              b: "You get a straightforward explanation of the damage, likely repair route, and the practical next step.",
            },
            {
              n: "03",
              t: "Approve the work and get back on the road",
              b: "Repairs are completed with quality control, handover guidance, and ongoing reassurance after collection.",
            },
          ].map((s) => (
            <li key={s.n} className="card">
              <p className="eyebrow mb-2">{s.n}</p>
              <h3 className="font-display uppercase tracking-wider2 text-base mb-2">
                {s.t}
              </h3>
              <p className="text-steel-400">{s.b}</p>
            </li>
          ))}
        </ol>
      </Section>

      <WorkshopStandards />

      {/* CASE STUDIES */}
      <Section eyebrow="Before and after proof">
        <h2 className="h-display text-3xl sm:text-4xl mb-4 max-w-prose2">
          Repair examples that give visitors something firmer than generic
          promises.
        </h2>
        <div className="grid lg:grid-cols-3 gap-5 mt-10">
          {caseStudies.map((c) => (
            <div key={c.number} className="card flex flex-col">
              <p className="eyebrow mb-2">Case {c.number}</p>
              <h3 className="font-display uppercase tracking-wider2 text-lg mb-3">
                {c.headline}
              </h3>
              <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                <div className="bg-ink-800 p-3">
                  <p className="eyebrow mb-1">Before</p>
                  <p className="text-steel-400 text-xs">{c.beforeText}</p>
                </div>
                <div className="bg-ink-800 p-3">
                  <p className="eyebrow mb-1">After</p>
                  <p className="text-steel-400 text-xs">{c.afterText}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 mt-8">
          <Link href="/before-after/" className="btn-ghost">Explore proof pages</Link>
          <Link href="/contact/" className="btn-primary">Request a repair estimate</Link>
        </div>
      </Section>

      {/* SERVICES */}
      <Section eyebrow="Services" tone="dark">
        <h2 className="h-display text-3xl sm:text-4xl mb-4 max-w-prose2">
          Core repair pages built as standalone landing pages.
        </h2>
        <p className="text-steel-400 max-w-prose2 mb-10">
          Service pages are designed for visitors arriving directly from search
          results, so each one explains the offer, shows trust signals, and
          exposes a direct action path within the first screen.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}/`}
              className="card hover:border-accent-500/40 transition-colors flex flex-col"
            >
              <h3 className="font-display uppercase tracking-wider2 text-base mb-2">
                {s.h1}
              </h3>
              <p className="text-steel-400 flex-1">{s.cardCopy}</p>
              <p className="text-accent-500 eyebrow mt-4">Explore page →</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* AREAS */}
      <Section eyebrow="Areas">
        <h2 className="h-display text-3xl sm:text-4xl mb-4 max-w-prose2">
          Location pages that turn local search intent into clear pathways.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {priorityAreas.map((a) => (
            <Link
              key={a.slug}
              href={`/areas/car-body-repair-${a.slug}/`}
              className="card hover:border-accent-500/40 transition-colors flex flex-col"
            >
              <h3 className="font-display uppercase tracking-wider2 text-base mb-2">
                Body Repair {a.name}
              </h3>
              <p className="text-steel-400 flex-1">{a.cardCopy}</p>
              <p className="text-accent-500 eyebrow mt-4">Explore page →</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section eyebrow="Customer confidence" tone="dark">
        <h2 className="h-display text-3xl sm:text-4xl mb-4 max-w-prose2">
          Trust built on named pathways, real service context, and visible
          proof.
        </h2>
        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {testimonials.map((t) => (
            <figure key={t.author} className="card">
              <blockquote className="text-steel-400 mb-4">"{t.quote}"</blockquote>
              <figcaption>
                <p className="font-display uppercase tracking-wider2 text-sm">
                  {t.author} · {t.area}
                </p>
                <p className="text-xs text-steel-500 mt-1">{t.context}</p>
                <p className="text-[11px] text-steel-500 mt-2 italic">{t.framing}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <SharedFaq />
      <FinalCta />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-4xl sm:text-5xl font-extrabold text-accent-500 mb-1">
        {value}
      </p>
      <p className="text-xs sm:text-sm uppercase tracking-wider2 text-steel-400">
        {label}
      </p>
    </div>
  );
}
