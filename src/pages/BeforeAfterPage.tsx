import { Link } from "wouter";
import { caseStudies } from "@/data/caseStudies";
import { testimonials } from "@/data/testimonials";
import { FinalCta, Section } from "@/components/SharedSections";
import { usePageMeta } from "@/lib/seo";

export function BeforeAfterPage() {
  usePageMeta({
    title: "Before and After Car Body Repairs Bristol | Maddisons",
    description:
      "Inspect before-and-after repair examples from Maddisons, including bumper, dent, and paintwork scenarios that help Bristol drivers understand likely repair pathways.",
    path: "/before-after/",
  });

  return (
    <>
      <section>
        <div className="container-prose py-14 sm:py-20">
          <p className="eyebrow mb-3">Before and after repairs</p>
          <h1 className="h-display text-4xl sm:text-5xl mb-5 max-w-prose2">
            Visible repair proof with more context, more seriousness, and less
            generic website language.
          </h1>
          <p className="text-steel-400 max-w-prose2 mb-8">
            This page should do more than show tidy finishes. It should explain
            the customer situation, the workshop judgement required, and why
            the repair route feels trustworthy enough to move someone from
            hesitation to enquiry.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact/" className="btn-primary">Request a repair estimate</Link>
            <a href="tel:+441172872485" className="btn-ghost">Call the workshop</a>
          </div>
        </div>
      </section>

      <Section tone="dark">
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="card">
            <h3 className="font-display uppercase tracking-wider2 text-base mb-2">
              What premium proof looks like
            </h3>
            <p className="text-steel-400">
              Repair scenarios, panel context, likely assessment logic, and
              enough detail that the page feels useful even before the visitor
              phones.
            </p>
          </div>
          <div className="card">
            <h3 className="font-display uppercase tracking-wider2 text-base mb-2">
              What it refuses to do
            </h3>
            <p className="text-steel-400">
              No invented review totals, no unsupported insurer badges, and no
              fantasy promises that every job follows the same timeline or
              outcome pattern.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Case studies">
        <h2 className="h-display text-3xl sm:text-4xl mb-4 max-w-prose2">
          Three repair journeys that add depth to the trust story.
        </h2>
        <p className="text-steel-400 max-w-prose2 mb-12">
          These examples are written as realistic repair pathways rather than
          cinematic marketing copy. They help visitors picture the assessment
          process, the likely repair logic, and the outcome standard Maddisons
          is aiming to deliver.
        </p>
        <div className="space-y-12">
          {caseStudies.map((c) => (
            <article key={c.number} className="grid lg:grid-cols-12 gap-8 border-t border-cream-50/10 pt-8">
              <div className="lg:col-span-4">
                <p className="eyebrow mb-2">Before and after case {c.number}</p>
                <h3 className="font-display uppercase tracking-wider2 text-xl mb-4">
                  {c.headline}
                </h3>
                <ul className="text-sm text-steel-400 space-y-1">
                  <li><strong className="text-cream-50">Vehicle:</strong> {c.vehicle}</li>
                  <li><strong className="text-cream-50">Location:</strong> {c.location}</li>
                  <li><strong className="text-cream-50">Service:</strong> {c.service}</li>
                  <li><strong className="text-cream-50">Timing:</strong> {c.timing}</li>
                </ul>
              </div>
              <div className="lg:col-span-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="bg-ink-800 p-4">
                    <p className="eyebrow mb-1">Before</p>
                    <p className="text-steel-400 text-sm">{c.beforeText}</p>
                  </div>
                  <div className="bg-ink-800 p-4">
                    <p className="eyebrow mb-1">After</p>
                    <p className="text-steel-400 text-sm">{c.afterText}</p>
                  </div>
                </div>
                <div>
                  <p className="eyebrow mb-1">Challenge</p>
                  <p className="text-steel-400">{c.challenge}</p>
                </div>
                <div>
                  <p className="eyebrow mb-1">Repair approach</p>
                  <p className="text-steel-400">{c.approach}</p>
                </div>
                <div>
                  <p className="eyebrow mb-1">Outcome</p>
                  <p className="text-steel-400">{c.outcome}</p>
                </div>
                <ul className="text-sm text-steel-400 list-disc pl-5 space-y-1">
                  {c.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Feedback framing" tone="dark">
        <h2 className="h-display text-3xl sm:text-4xl mb-4 max-w-prose2">
          Customer comments supported by context, not by made-up platform
          numbers.
        </h2>
        <p className="text-steel-400 max-w-prose2 mb-10">
          Until Maddisons has a clearly surfaced public review source ready to
          cite, the safest high-trust approach is to show attributed workshop
          feedback with service context and pair it with visible repair-proof
          content.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
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

      <FinalCta />
    </>
  );
}
