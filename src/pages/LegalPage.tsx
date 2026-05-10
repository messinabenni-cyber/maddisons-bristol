import { Link } from "wouter";
import { type ReactNode } from "react";
import { Section } from "@/components/SharedSections";
import { usePageMeta } from "@/lib/seo";

interface LegalContent {
  slug: string;
  title: string;
  pageTitle: string;
  metaDescription: string;
  lead: string;
  glance: string;
  sections: { heading: string; body: string }[];
}

const legalPages: Record<string, LegalContent> = {
  "privacy-policy": {
    slug: "privacy-policy",
    title: "Privacy Policy",
    pageTitle: "Privacy Policy | Maddisons",
    metaDescription:
      "Privacy information covering quote enquiries, phone calls, customer communication, and basic website usage.",
    lead:
      "This policy explains what information Maddisons may collect when you contact the workshop, why that information is needed, how it is handled, and how you can ask questions about it.",
    glance:
      "Used mainly to respond to quote enquiries, confirm bookings, and explain repair next steps.",
    sections: [
      {
        heading: "Information Maddisons may collect",
        body:
          "When you contact the workshop by phone, email, or via the online quote form, Maddisons may receive your name, contact details, vehicle registration, area, and details of the damage you are asking about. Photos of the damage may also be received if you choose to send them. Basic technical information such as browser type and approximate location is logged by the website host for security and reliability.",
      },
      {
        heading: "How the information is used",
        body:
          "The information is used to respond to your enquiry, prepare an estimate, schedule a repair if you go ahead, and communicate during the repair process. It is not used for unrelated marketing or shared with third parties for advertising.",
      },
      {
        heading: "Sharing and retention",
        body:
          "Information may be shared with insurers or third-party suppliers only where strictly necessary to complete a repair you have asked us to handle. Enquiry records are kept for a reasonable period so we can refer back to your case if you contact us again, after which they are deleted or anonymised.",
      },
      {
        heading: "Your choices",
        body:
          "You can ask Maddisons what information we hold, request a copy, or ask for it to be removed. Email quotes@maddisonsbristol.co.uk or call 0117 287 2485 and we will explain the next step.",
      },
    ],
  },
  "terms-and-conditions": {
    slug: "terms-and-conditions",
    title: "Terms and Conditions",
    pageTitle: "Terms & Conditions | Maddisons",
    metaDescription:
      "Terms covering estimates, bookings, repair handling, collection arrangements, and customer communication.",
    lead:
      "These terms explain the practical basis on which website enquiries, estimates, bookings, and related workshop communications are handled by Maddisons.",
    glance:
      "Estimates are guidance until the vehicle is inspected. Final cost depends on workshop assessment.",
    sections: [
      {
        heading: "Estimates and quotations",
        body:
          "Quotes provided over the phone or by email based on photos are guidance figures. The workshop may need to confirm the price after a physical inspection. If the cost is likely to change materially, we will explain why before any work begins.",
      },
      {
        heading: "Bookings and repair timescales",
        body:
          "Bookings are reserved on a first-come, first-served basis once the workshop confirms a slot. Timescales depend on parts availability, paint preparation cycles, and overall workshop load. We will keep you updated if anything affects the agreed timeline.",
      },
      {
        heading: "Customer responsibilities",
        body:
          "You are responsible for removing valuables before drop-off, providing accurate vehicle and damage information, and confirming insurer details where relevant. Vehicles must be road-legal at drop-off unless transport has been pre-arranged.",
      },
      {
        heading: "Workmanship and liability",
        body:
          "Maddisons stands behind the workmanship on completed repairs. If something is not right after collection, contact the workshop directly so it can be inspected and resolved. Liability is limited to the work we have actually performed and does not extend to unrelated pre-existing vehicle issues.",
      },
    ],
  },
  "cookie-policy": {
    slug: "cookie-policy",
    title: "Cookie Policy",
    pageTitle: "Cookie Policy | Maddisons",
    metaDescription:
      "Cookie and browser-storage information for visitors using the Maddisons website.",
    lead:
      "This page explains the limited browser storage and cookie-related technologies that may be used to keep the site working properly and to understand website performance.",
    glance:
      "The site is designed to stay lightweight and avoids unnecessary tracking-heavy tools.",
    sections: [
      {
        heading: "Essential website storage",
        body:
          "Some browser storage is required for the site to render layouts and remember non-personal preferences (for example whether a section has been expanded). These do not identify you and cannot be disabled without breaking site functionality.",
      },
      {
        heading: "Performance and measurement",
        body:
          "Anonymous, aggregated measurement may be used to understand which pages help drivers find the right next step. No identifying information is sold or used for cross-site advertising.",
      },
      {
        heading: "Managing cookies",
        body:
          "You can clear or block cookies via your browser's privacy settings. Doing so will not affect your ability to call the workshop or send an enquiry by email.",
      },
    ],
  },
  "acceptable-use": {
    slug: "acceptable-use",
    title: "Acceptable Use Policy",
    pageTitle: "Acceptable Use Policy | Maddisons",
    metaDescription:
      "Acceptable use terms for visitors using the Maddisons website, contact routes, and workshop enquiry channels.",
    lead:
      "This website is provided so customers can learn about Maddisons, review repair information, and make legitimate service enquiries. It must not be used in a way that disrupts access, abuses contact channels, or misuses the published content.",
    glance:
      "Use the site to learn about repairs, request a quote, or contact the workshop. Don't abuse it.",
    sections: [
      {
        heading: "Permitted use",
        body:
          "Browsing pages, sharing links with friends or family, and contacting Maddisons about a genuine repair enquiry are all welcome.",
      },
      {
        heading: "Prohibited conduct",
        body:
          "Automated scraping for resale, bulk-spam contact, attempting to overload the site, or impersonating Maddisons are all prohibited.",
      },
      {
        heading: "Content and enforcement",
        body:
          "Content on the site is provided for informational purposes. Maddisons may restrict access or refuse service in cases of misuse, in line with normal commercial practice.",
      },
    ],
  },
  "complaints": {
    slug: "complaints",
    title: "Complaints Procedure",
    pageTitle: "Complaints Procedure | Maddisons",
    metaDescription:
      "How to raise a concern about communication, estimates, or repair service with Maddisons.",
    lead:
      "Maddisons aims to resolve concerns quickly, fairly, and without unnecessary friction. If something has gone wrong, the best route is to raise it directly with clear details so the workshop can investigate properly.",
    glance:
      "Contact us first by phone or email. We aim to respond within five working days.",
    sections: [
      {
        heading: "How to make a complaint",
        body:
          "Email quotes@maddisonsbristol.co.uk or call 0117 287 2485 with your name, vehicle registration, the dates involved, and a clear description of the concern. Photos help where the issue is visual.",
      },
      {
        heading: "What happens next",
        body:
          "We will acknowledge receipt and aim to investigate the matter within five working days. Where a longer review is needed (for example involving an insurer), we will explain the timeline.",
      },
      {
        heading: "Resolution approach",
        body:
          "We aim to put things right where the workshop has fallen short. If we are unable to reach an agreement, you remain free to escalate the matter through the appropriate channels.",
      },
    ],
  },
  "accessibility": {
    slug: "accessibility",
    title: "Accessibility Statement",
    pageTitle: "Accessibility Statement | Maddisons",
    metaDescription:
      "Accessibility information for visitors using the Maddisons website on mobile, desktop, and assistive technologies.",
    lead:
      "Maddisons wants the website to be straightforward to use for as many people as possible, particularly mobile visitors who may be dealing with vehicle damage in stressful circumstances.",
    glance:
      "Built mobile-first with high contrast, sensible heading structure, and visible contact details.",
    sections: [
      {
        heading: "Accessibility approach",
        body:
          "The site is built mobile-first with high-contrast text, sensible heading structure, semantic landmarks, and visible focus styles. Phone and email contact details are visible from every page so the contact route does not depend on form usability alone.",
      },
      {
        heading: "Known limitations and improvement",
        body:
          "If you find a section of the site that is hard to use with a screen reader, keyboard, or zoom, please let us know so it can be reviewed and improved.",
      },
      {
        heading: "Contact for accessibility help",
        body:
          "Email quotes@maddisonsbristol.co.uk or call 0117 287 2485. We are happy to take an enquiry by phone if the form is not working well for you.",
      },
    ],
  },
};

const aliasRedirects: Record<string, string> = {
  privacy: "privacy-policy",
  terms: "terms-and-conditions",
  cookies: "cookie-policy",
};

export function LegalPage({ slug }: { slug: string }) {
  const canonical = aliasRedirects[slug] ?? slug;
  const content = legalPages[canonical];
  if (!content) {
    return (
      <Section>
        <h1 className="h-display text-3xl">Page not found</h1>
        <p className="text-steel-400 mt-3">
          <Link href="/" className="underline">Return home</Link>
        </p>
      </Section>
    );
  }
  return <LegalPageInner content={content} />;
}

function LegalPageInner({ content }: { content: LegalContent }) {
  usePageMeta({
    title: content.pageTitle,
    description: content.metaDescription,
    path: `/${content.slug}/`,
  });

  return (
    <>
      <section>
        <div className="container-prose py-14 sm:py-20">
          <p className="eyebrow mb-3">Legal information</p>
          <h1 className="h-display text-4xl sm:text-5xl mb-5">
            {content.title}
          </h1>
          <p className="text-steel-400 max-w-prose2 text-lg">{content.lead}</p>
        </div>
      </section>

      <Section tone="dark">
        <div className="grid lg:grid-cols-12 gap-10">
          <aside className="lg:col-span-4">
            <p className="eyebrow mb-2">Legal support links</p>
            <ul className="space-y-1.5 text-steel-400 text-sm">
              {Object.values(legalPages).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/${p.slug}/`}
                    className={
                      p.slug === content.slug
                        ? "text-cream-50 font-semibold"
                        : "hover:text-cream-50"
                    }
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 card">
              <p className="eyebrow mb-1">At a glance</p>
              <p className="text-steel-400 text-sm">{content.glance}</p>
            </div>
          </aside>
          <article className="lg:col-span-8 space-y-8">
            {content.sections.map((s) => (
              <Block key={s.heading} heading={s.heading}>{s.body}</Block>
            ))}
          </article>
        </div>
      </Section>
    </>
  );
}

function Block({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="font-display uppercase tracking-wider2 text-lg mb-2">
        {heading}
      </h2>
      <p className="text-steel-400 leading-relaxed">{children}</p>
    </div>
  );
}
