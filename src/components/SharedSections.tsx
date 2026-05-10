import { Link } from "wouter";
import { businessInfo } from "@/data/businessInfo";
import { faqs } from "@/data/faqs";

export function PremiumStandard() {
  const items = [
    {
      title: "Damage triage before sales language",
      body: "The strongest local service sites behave like an experienced front desk. They orient the visitor quickly, reduce uncertainty, and only then ask for action.",
    },
    {
      title: "Proof carried by context, not hype",
      body: "Repair examples, named local areas, and operational detail do more trust work than inflated badges or generic claims ever could.",
    },
    {
      title: "Designed for phone-first urgency",
      body: "A large share of users arrive stressed, mobile, and standing beside the vehicle. The journey has to work cleanly from that state, not from a desktop browsing mindset.",
    },
    {
      title: "Visual language with more authority",
      body: "The page should feel engineered, tactile, and expensive at first glance, using contrast, spacing, material texture, and restraint rather than decorative fluff.",
    },
  ];
  return (
    <Section eyebrow="Premium rebuild standard">
      <h2 className="h-display text-3xl sm:text-4xl mb-4 max-w-prose2">
        The site now needs to feel less like a layout system and more like a
        serious repair business.
      </h2>
      <p className="text-steel-400 max-w-prose2 mb-10">
        These principles are driving the next pass: more proof density, stronger
        operational clarity, and a visual system with more authority at first
        glance.
      </p>
      <div className="grid md:grid-cols-2 gap-5">
        {items.map((it) => (
          <div key={it.title} className="card">
            <h3 className="font-display uppercase tracking-wider2 text-base mb-2">
              {it.title}
            </h3>
            <p className="text-steel-400">{it.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function WorkshopStandards() {
  return (
    <Section eyebrow="Workshop standards" tone="dark">
      <h2 className="h-display text-3xl sm:text-4xl mb-4 max-w-prose2">
        More of the real operating detail is surfaced before visitors have to
        trust the brand.
      </h2>
      <p className="text-steel-400 max-w-prose2 mb-10">
        The strongest competitor sites push hard on approvals, workshop
        substance, and process certainty. Maddisons can strengthen that same
        layer honestly by making its operating facts, estimate method, and
        support pathways more explicit near the top of the journey.
      </p>
      <div className="grid sm:grid-cols-3 gap-5 mb-10">
        {[
          {
            t: "Repair routing",
            b: "Accident, dent, bumper, paint, and insurance enquiries handled through clear service pathways.",
          },
          {
            t: "Workshop certainty",
            b: "Known Bristol premises, published hours, and direct contact details visible across the site.",
          },
          {
            t: "Estimate approach",
            b: "Photo-led guidance and practical next-step advice instead of vague callback funnels.",
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
      <div className="grid sm:grid-cols-3 gap-5">
        {[
          {
            t: "Workshop facts shown early",
            b: "Brislington workshop location, weekday opening hours, and direct phone access stay visible so visitors can confirm who they are dealing with before they enquire.",
          },
          {
            t: "Photo-first quote guidance",
            b: "Drivers can call immediately or send a short description with photos so the workshop can explain the likely repair route before a visit is arranged.",
          },
          {
            t: "Insurance and handover support",
            b: "Where accident damage or insurer involvement is part of the job, Maddisons frames the next practical step clearly rather than leaving customers to decode the process alone.",
          },
        ].map((it) => (
          <div key={it.t}>
            <p className="eyebrow mb-1.5">Standard</p>
            <h4 className="font-display uppercase tracking-wider2 text-base mb-2">
              {it.t}
            </h4>
            <p className="text-steel-400 text-sm">{it.b}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function SharedFaq({ items = faqs }: { items?: typeof faqs }) {
  return (
    <Section eyebrow="Frequently asked questions">
      <h2 className="h-display text-3xl sm:text-4xl mb-4 max-w-prose2">
        Questions that often stop action answered in plain language.
      </h2>
      <p className="text-steel-400 max-w-prose2 mb-8">
        These quick answers cover the points Bristol drivers commonly want
        before they call, request a quote, or book the next repair step.
      </p>
      <div className="divide-y divide-cream-50/10 border border-cream-50/10 rounded-sm">
        {items.map((q) => (
          <details key={q.question} className="group p-5 sm:p-6">
            <summary className="cursor-pointer list-none flex items-start justify-between gap-4 font-display uppercase tracking-wider2 text-base">
              <span>{q.question}</span>
              <span className="text-accent-500 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-steel-400">{q.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

export function FinalCta() {
  return (
    <Section eyebrow="Ready to move forward?" tone="dark">
      <h2 className="h-display text-3xl sm:text-4xl mb-4 max-w-prose2">
        Get a quote, call the workshop, or plan the next repair step today.
      </h2>
      <p className="text-steel-400 max-w-prose2 mb-8">
        Call for the fastest answer, send an enquiry if you want written
        guidance, or move straight into the service or area page that best
        matches the damage on your vehicle.
      </p>
      <div className="grid sm:grid-cols-2 gap-5 max-w-3xl">
        <a href={`tel:${businessInfo.phoneE164}`} className="card hover:border-accent-500/40 transition-colors">
          <p className="eyebrow mb-1">Call the workshop</p>
          <p className="h-display text-2xl">{businessInfo.phone}</p>
        </a>
        <Link href="/contact/" className="card hover:border-accent-500/40 transition-colors">
          <p className="eyebrow mb-1">Online enquiry</p>
          <p className="h-display text-2xl">Free quote request</p>
        </Link>
      </div>
    </Section>
  );
}

export function Section({
  children,
  eyebrow,
  tone = "default",
  id,
}: {
  children: React.ReactNode;
  eyebrow?: string;
  tone?: "default" | "dark";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={tone === "dark" ? "bg-ink-900 border-y border-cream-50/5" : ""}
    >
      <div className="container-prose py-14 sm:py-20">
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        {children}
      </div>
    </section>
  );
}
