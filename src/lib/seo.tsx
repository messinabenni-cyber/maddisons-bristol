import { useEffect } from "react";
import { businessInfo } from "@/data/businessInfo";

interface PageMeta {
  title: string;
  description: string;
  path: string;
}

/**
 * Sets the document title, description meta, canonical link and OG tags.
 * Called from each page component.
 */
export function usePageMeta({ title, description, path }: PageMeta) {
  useEffect(() => {
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", `${businessInfo.domain}${path}`);
    setLink("canonical", `${businessInfo.domain}${path}`);
  }, [title, description, path]);
}

function setMeta(attr: "name" | "property", key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function autoBodyShopJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": businessInfo.businessType,
    name: businessInfo.name,
    image: `${businessInfo.domain}/images/maddisons-hero-workshop.png`,
    url: businessInfo.domain,
    telephone: businessInfo.phone,
    email: businessInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address.street,
      addressLocality: businessInfo.address.locality,
      postalCode: businessInfo.address.postcode,
      addressCountry: businessInfo.address.country,
    },
    openingHours: businessInfo.hoursStructured,
    areaServed: [
      "Bristol",
      "Bath",
      "Brislington",
      "Filton",
      "Keynsham",
      "Kingswood",
      "Clifton",
      "Bedminster",
      "Southville",
      "Whitchurch",
    ],
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(crumbs: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
