import { FinalCta, Section } from "@/components/SharedSections";
import { usePageMeta } from "@/lib/seo";

const articles = [
  {
    slug: "best-body-shop-bristol",
    title: "Best Body Shop Bristol",
    summary:
      "Looking for the best body shop Bristol has to offer? Maddisons provides top-rated car body repairs, paintwork and dent removal services.",
  },
  {
    slug: "car-body-repair-guide",
    title: "Car Body Repair Guide",
    summary:
      "Your complete car body repair guide from Maddisons Bristol. Learn about common damage types, repair methods, costs and choosing the right body shop.",
  },
  {
    slug: "car-spraying-cost-uk-guide",
    title: "Car Spraying Cost UK Guide",
    summary:
      "How much does car spraying cost UK wide? Maddisons Bristol breaks down full respray prices, panel painting costs and factors affecting your quote.",
  },
  {
    slug: "diy-car-body-repair-guide",
    title: "DIY Car Body Repair Guide",
    summary:
      "Should you attempt DIY car body repair or hire a professional? Maddisons Bristol compares costs, quality and risks to help you decide.",
  },
  {
    slug: "car-body-repair-faq-bristol",
    title: "Car Body Repair FAQ Bristol",
    summary:
      "Find answers to common car body repair FAQ Bristol questions. Maddisons covers costs, timescales, insurance claims and repair processes.",
  },
];

export function BlogPage() {
  usePageMeta({
    title: "Blog | Maddisons Vehicle Body Repair",
    description:
      "Repair guides, cost explainers, and local advice for Bristol vehicle body repair customers.",
    path: "/blog/",
  });
  return (
    <>
      <section>
        <div className="container-prose py-14 sm:py-20">
          <p className="eyebrow mb-3">Knowledge centre</p>
          <h1 className="h-display text-4xl sm:text-5xl mb-5 max-w-prose2">
            Repair guides that answer search intent before it turns into a
            quote.
          </h1>
          <p className="text-steel-400 max-w-prose2">
            Informational pages attract users earlier in the decision cycle.
            The structure here answers common questions, explains repair
            routes, and then guides readers toward the relevant service or
            contact page once trust has been built.
          </p>
        </div>
      </section>

      <Section eyebrow="Articles" tone="dark">
        <h2 className="h-display text-3xl sm:text-4xl mb-4 max-w-prose2">
          Structured around the questions Bristol drivers already ask online.
        </h2>
        <p className="text-steel-400 max-w-prose2 mb-10">
          The blog content layer supports featured-snippet style answers,
          deeper explanatory paragraphs, and direct pathways back into
          high-intent service pages.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((a) => (
            <article key={a.slug} className="card">
              <h3 className="font-display uppercase tracking-wider2 text-base mb-2">
                {a.title}
              </h3>
              <p className="text-steel-400">{a.summary}</p>
              <p className="text-steel-500 eyebrow mt-4">Coming soon</p>
            </article>
          ))}
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
