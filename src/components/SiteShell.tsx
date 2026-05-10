import { type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { businessInfo } from "@/data/businessInfo";

interface Props {
  children: ReactNode;
}

const navItems = [
  { href: "/services/", label: "Services" },
  { href: "/areas/", label: "Areas" },
  { href: "/before-after/", label: "Proof" },
  { href: "/about/", label: "About" },
  { href: "/blog/", label: "Blog" },
  { href: "/contact/", label: "Contact" },
];

export function SiteShell({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-accent-500 focus:text-ink-950 focus:px-4 focus:py-2"
      >
        Skip to main content
      </a>
      <TrustRibbon />
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function TrustRibbon() {
  return (
    <div className="bg-ink-900 border-b border-cream-50/5">
      <div className="container-prose flex flex-col sm:flex-row gap-2 sm:gap-6 items-start sm:items-center justify-between py-2 text-[11px] sm:text-xs uppercase tracking-wider2 text-steel-400">
        <div>{businessInfo.ribbon}</div>
        <a
          href={`tel:${businessInfo.phoneE164}`}
          className="text-cream-50 font-semibold hover:text-accent-500 transition-colors"
        >
          {businessInfo.phone}
        </a>
      </div>
    </div>
  );
}

function Header() {
  const [location] = useLocation();
  return (
    <header className="border-b border-cream-50/10 bg-ink-950 sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-ink-950/90">
      <div className="container-prose flex items-center justify-between py-4 sm:py-5">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight">
            {businessInfo.shortName.toUpperCase()}
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-wider2 text-steel-400">
            {businessInfo.tagline}
          </span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm uppercase tracking-wider2 font-semibold">
          {navItems.map((item) => {
            const active = location.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "text-accent-500"
                    : "text-cream-50 hover:text-accent-500 transition-colors"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${businessInfo.phoneE164}`}
            className="hidden sm:inline-flex btn-ghost text-xs px-3 py-2"
          >
            Call now
          </a>
          <Link href="/contact/" className="btn-primary text-xs px-3 py-2">
            Free quote
          </Link>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-ink-900 border-t border-cream-50/5 mt-16">
      <div className="container-prose grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12 text-sm">
        <div>
          <h3 className="font-display text-base uppercase tracking-wider2 mb-3">
            {businessInfo.name}
          </h3>
          <p className="text-steel-400 leading-relaxed">
            Bristol-focused body repair, accident damage repair, dent removal,
            paint refinement, and insurance support designed to give drivers a
            clear next step quickly.
          </p>
        </div>
        <div>
          <h4 className="font-display uppercase tracking-wider2 text-sm mb-3">
            Contact
          </h4>
          <address className="not-italic text-steel-400 leading-relaxed">
            {businessInfo.address.street}
            <br />
            {businessInfo.address.locality} {businessInfo.address.postcode}
            <br />
            <a href={`tel:${businessInfo.phoneE164}`} className="block hover:text-cream-50 mt-2">
              {businessInfo.phone}
            </a>
            <a href={`mailto:${businessInfo.email}`} className="block hover:text-cream-50">
              {businessInfo.email}
            </a>
          </address>
          <h4 className="font-display uppercase tracking-wider2 text-sm mt-5 mb-2">
            Opening hours
          </h4>
          <p className="text-steel-400">{businessInfo.hours}</p>
        </div>
        <div>
          <h4 className="font-display uppercase tracking-wider2 text-sm mb-3">Explore</h4>
          <ul className="space-y-1.5 text-steel-400">
            <li><Link href="/services/" className="hover:text-cream-50">Service hub</Link></li>
            <li><Link href="/areas/" className="hover:text-cream-50">Areas covered</Link></li>
            <li><Link href="/blog/" className="hover:text-cream-50">Repair advice blog</Link></li>
            <li><Link href="/before-after/" className="hover:text-cream-50">Before and after repairs</Link></li>
            <li><Link href="/faq/" className="hover:text-cream-50">Frequently asked questions</Link></li>
            <li><Link href="/about/" className="hover:text-cream-50">About Maddisons</Link></li>
            <li><Link href="/contact/" className="hover:text-cream-50">Contact and quote</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display uppercase tracking-wider2 text-sm mb-3">Legal</h4>
          <ul className="space-y-1.5 text-steel-400">
            <li><Link href="/privacy-policy/" className="hover:text-cream-50">Privacy policy</Link></li>
            <li><Link href="/terms-and-conditions/" className="hover:text-cream-50">Terms and conditions</Link></li>
            <li><Link href="/cookie-policy/" className="hover:text-cream-50">Cookie policy</Link></li>
          </ul>
          <h4 className="font-display uppercase tracking-wider2 text-sm mt-5 mb-3">Support</h4>
          <ul className="space-y-1.5 text-steel-400">
            <li><Link href="/acceptable-use/" className="hover:text-cream-50">Acceptable use</Link></li>
            <li><Link href="/complaints/" className="hover:text-cream-50">Complaints procedure</Link></li>
            <li><Link href="/accessibility/" className="hover:text-cream-50">Accessibility</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream-50/5">
        <p className="container-prose py-5 text-[11px] uppercase tracking-wider2 text-steel-500 text-center">
          © {new Date().getFullYear()} {businessInfo.name.toUpperCase()} · BRISTOL, UNITED KINGDOM · FREE ESTIMATES · CLEAR REPAIR GUIDANCE
        </p>
      </div>
    </footer>
  );
}
