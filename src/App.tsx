import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import { SiteShell } from "./components/SiteShell";
import { HomePage } from "./pages/HomePage";
import { ServicesIndexPage } from "./pages/ServicesIndexPage";
import { AreasIndexPage } from "./pages/AreasIndexPage";
import { ServicePage } from "./pages/ServicePage";
import { AreaPage } from "./pages/AreaPage";
import { ContactPage } from "./pages/ContactPage";
import { AboutPage } from "./pages/AboutPage";
import { BeforeAfterPage } from "./pages/BeforeAfterPage";
import { FaqPage } from "./pages/FaqPage";
import { BlogPage } from "./pages/BlogPage";
import { LegalPage } from "./pages/LegalPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);
  return null;
}

export default function App() {
  return (
    <SiteShell>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/services/" component={ServicesIndexPage} />
        <Route path="/services">
          {() => <ServicesIndexPage />}
        </Route>
        <Route path="/services/:slug/">
          {(params) => <ServicePage slug={params.slug} />}
        </Route>
        <Route path="/services/:slug">
          {(params) => <ServicePage slug={params.slug} />}
        </Route>
        <Route path="/areas/" component={AreasIndexPage} />
        <Route path="/areas">
          {() => <AreasIndexPage />}
        </Route>
        <Route path="/areas/car-body-repair-:slug/">
          {(params) => <AreaPage slug={params.slug} />}
        </Route>
        <Route path="/areas/car-body-repair-:slug">
          {(params) => <AreaPage slug={params.slug} />}
        </Route>
        <Route path="/about/" component={AboutPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact/" component={ContactPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/before-after/" component={BeforeAfterPage} />
        <Route path="/before-after" component={BeforeAfterPage} />
        <Route path="/faq/" component={FaqPage} />
        <Route path="/faq" component={FaqPage} />
        <Route path="/blog/" component={BlogPage} />
        <Route path="/blog" component={BlogPage} />

        <Route path="/privacy-policy/">
          {() => <LegalPage slug="privacy-policy" />}
        </Route>
        <Route path="/privacy/">
          {() => <LegalPage slug="privacy" />}
        </Route>
        <Route path="/terms-and-conditions/">
          {() => <LegalPage slug="terms-and-conditions" />}
        </Route>
        <Route path="/terms/">
          {() => <LegalPage slug="terms" />}
        </Route>
        <Route path="/cookie-policy/">
          {() => <LegalPage slug="cookie-policy" />}
        </Route>
        <Route path="/cookies/">
          {() => <LegalPage slug="cookies" />}
        </Route>
        <Route path="/acceptable-use/">
          {() => <LegalPage slug="acceptable-use" />}
        </Route>
        <Route path="/complaints/">
          {() => <LegalPage slug="complaints" />}
        </Route>
        <Route path="/accessibility/">
          {() => <LegalPage slug="accessibility" />}
        </Route>

        <Route component={NotFoundPage} />
      </Switch>
    </SiteShell>
  );
}
