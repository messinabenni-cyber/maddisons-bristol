import { Link } from "wouter";
import { businessInfo } from "@/data/businessInfo";
import { FinalCta, Section } from "@/components/SharedSections";
import { usePageMeta } from "@/lib/seo";

export function AboutPage() {
  usePageMeta({
    title: "About Maddisons | Car Body Repair Bristol | 20+ Years",
    description:
      "Learn how Maddisons approaches vehicle body repair in Bristol with practical advice, straight communication, and careful workshop standards.",
    path: "/about/",
  });

  const principles = [
    {
      t: "Straight communication",
      b: "Advice is meant to calm uncertainty, not bury it under jargon or vague workshop language.",
    },
    {
      t: "Careful repair standards",
      b: "Preparation, finishing quality, and handover discipline matter because trust is won in the details.",
    },
    {
      t: "Local visibility",
      b: "The site is structured so Bristol-area customers can find a relevant page even if they never touch the homepage.",
    },
    {
      t: "Action without friction",
      b: "Every page keeps phone and quote routes visible so interested visitors do not have to dig for basic contact details.",
    },
  ];

  return (
    <>
      <section>
        <div className="container-prose py-14 sm:py-20 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-3">About Maddisons</p>
            <h1 className="h-display text-4xl sm:text-5xl mb-5">
              The Maddisons story
            </h1>
            <p className="text-steel-400 max-w-prose2 text-lg mb-8">
              What began as a small family operation has grown into a trusted
              name in car body repair — but we've never lost sight of the
              values that made us successful.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={`tel:${businessInfo.phoneE164}`} className="btn-ghost">
                Call the workshop
              </a>
              <Link href="/contact/" className="btn-primary">
                Get a free quote
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src="/images/maddisons-about-workshop.png"
              alt="Technician assessing a vehicle panel inside the Maddisons workshop"
              className="w-full rounded-sm border border-cream-50/10"
            />
          </div>
        </div>
      </section>

      <Section eyebrow="Workshop history" tone="dark">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="h-display text-3xl mb-4">Our history</h2>
            <p className="text-steel-400 mb-3">
              Maddisons has been serving Bristol and the surrounding areas for
              over {businessInfo.yearsExperience} years, building a reputation
              for honest work and exceptional results.
            </p>
            <p className="text-steel-400">
              We treat every vehicle with careful attention, practical
              communication, and a focus on the most suitable repair outcome
              for the customer and the car.
            </p>
          </div>
          <div>
            <h2 className="h-display text-3xl mb-4">Workshop &amp; team</h2>
            <p className="text-steel-400 mb-3">
              Our Unit 12 workshop at Brislington Trading Estate is set up for
              disciplined repair preparation, paintwork control, and practical
              handovers. With professional spray equipment and bodywork tooling
              in place, the workshop environment supports careful standards
              without theatrical overclaiming.
            </p>
            <p className="text-steel-400">
              However, our greatest asset is our team. Our experienced
              technicians bring a wealth of knowledge and a commitment to
              meticulous craftsmanship, ensuring every vehicle receives the
              expert care and attention to detail it deserves.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Values & approach">
        <h2 className="h-display text-3xl sm:text-4xl mb-4 max-w-prose2">
          We believe in transparency, quality, and putting the customer first.
        </h2>
        <p className="text-steel-400 max-w-prose2 mb-10">
          There are no hidden charges at Maddisons — what we quote is what you
          pay. We take time to understand exactly what you need, assess the
          damage properly, and explain your options clearly.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {principles.map((p) => (
            <div key={p.t} className="card">
              <h3 className="font-display uppercase tracking-wider2 text-base mb-2">
                {p.t}
              </h3>
              <p className="text-steel-400">{p.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
