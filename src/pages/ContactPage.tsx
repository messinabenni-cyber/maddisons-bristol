import { businessInfo } from "@/data/businessInfo";
import { QuoteForm } from "@/components/QuoteForm";
import { Section } from "@/components/SharedSections";
import { usePageMeta } from "@/lib/seo";

export function ContactPage() {
  usePageMeta({
    title: "Contact Maddisons | Free Quote | Vehicle Body Repair Bristol",
    description:
      "Contact Maddisons for a free estimate, call-back request, or repair enquiry for accident damage, dent removal, paintwork, and body repairs in Bristol.",
    path: "/contact/",
  });
  return (
    <>
      <section>
        <div className="container-prose py-14 sm:py-20">
          <p className="eyebrow mb-3">Contact Maddisons</p>
          <h1 className="h-display text-4xl sm:text-5xl mb-5 max-w-prose2">
            Speak to the workshop and get a clear next step.
          </h1>
          <p className="text-steel-400 max-w-prose2 mb-8">
            If your vehicle has been damaged and you want a practical answer
            quickly, contact Maddisons by phone or send an enquiry with a short
            description of the issue.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl">
            <a href={`tel:${businessInfo.phoneE164}`} className="card hover:border-accent-500/40 transition-colors">
              <p className="eyebrow mb-1">Phone</p>
              <p className="h-display text-2xl">{businessInfo.phone}</p>
            </a>
            <a href={`mailto:${businessInfo.email}`} className="card hover:border-accent-500/40 transition-colors">
              <p className="eyebrow mb-1">Email</p>
              <p className="h-display text-base sm:text-xl break-all">{businessInfo.email}</p>
            </a>
          </div>
        </div>
      </section>

      <Section eyebrow="What the contact page should signal" tone="dark">
        <h2 className="h-display text-3xl sm:text-4xl mb-4 max-w-prose2">
          A real workshop, a direct answer, and a quote path that does not
          waste time.
        </h2>
        <div className="grid sm:grid-cols-3 gap-5 mt-10">
          {[
            { t: "Direct route", b: "Urgent callers can reach the workshop without going through a long quote funnel first." },
            { t: "Estimate clarity", b: "The page explains what to send so the enquiry starts with useful information rather than vague back-and-forth." },
            { t: "Known workshop", b: "Visible location, hours, and policy links help the page feel trustworthy before the form is even touched." },
          ].map((it) => (
            <div key={it.t} className="card">
              <h3 className="font-display uppercase tracking-wider2 text-base mb-2">{it.t}</h3>
              <p className="text-steel-400">{it.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Free quote request">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <h2 className="h-display text-3xl sm:text-4xl mb-4">
              For a better first estimate
            </h2>
            <ol className="space-y-3 text-steel-400">
              <li><span className="text-accent-500 font-bold mr-2">01.</span>Send 3–5 clear photos from different angles where possible.</li>
              <li><span className="text-accent-500 font-bold mr-2">02.</span>Mention whether the damage is cosmetic, impact-related, or insurer-linked.</li>
              <li><span className="text-accent-500 font-bold mr-2">03.</span>Include your area so collection, access, or travel expectations can be discussed early.</li>
              <li><span className="text-accent-500 font-bold mr-2">04.</span>Say whether you want a fast phone answer or a written estimate route first.</li>
            </ol>
            <div className="mt-8 space-y-1 text-sm text-steel-400">
              <p className="eyebrow text-accent-500">Workshop details</p>
              <p>{businessInfo.address.street}</p>
              <p>{businessInfo.address.locality} {businessInfo.address.postcode}</p>
              <p className="mt-3 eyebrow">Opening hours</p>
              <p>{businessInfo.hours}</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>
        </div>
      </Section>
    </>
  );
}
