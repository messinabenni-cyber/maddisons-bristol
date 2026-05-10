import { useState, type FormEvent, type ReactNode } from "react";
import { businessInfo } from "@/data/businessInfo";

type Step = 1 | 2 | 3;

interface FormState {
  name: string;
  phone: string;
  email: string;
  registration: string;
  insurer: "yes" | "no" | "unsure";
  damageType: "cosmetic" | "impact" | "insurer-linked" | "";
  area: string;
  preference: "phone" | "written" | "";
  summary: string;
  consent: boolean;
}

const empty: FormState = {
  name: "",
  phone: "",
  email: "",
  registration: "",
  insurer: "no",
  damageType: "",
  area: "",
  preference: "",
  summary: "",
  consent: false,
};

const inputClass =
  "w-full bg-ink-800 border border-cream-50/10 focus:border-accent-500 outline-none text-cream-50 px-3 py-2 rounded-sm placeholder:text-steel-500";

export function QuoteForm() {
  const [step, setStep] = useState<Step>(1);
  const [data, setData] = useState<FormState>(empty);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!data.consent) return;
    const subject = encodeURIComponent(
      `Quote request — ${data.name || "New enquiry"}${
        data.registration ? ` (${data.registration})` : ""
      }`
    );
    const lines = [
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Vehicle registration: ${data.registration}`,
      `Insurer involved: ${data.insurer}`,
      `Damage type: ${data.damageType}`,
      `Area: ${data.area}`,
      `Preferred response: ${data.preference}`,
      ``,
      `Summary:`,
      data.summary,
    ];
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${businessInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card text-center">
        <h3 className="h-display text-2xl mb-3">Email opened</h3>
        <p className="text-steel-400 mb-5">
          Your email client should now be open with your enquiry pre-filled. Send
          it through to {businessInfo.email}, or call {businessInfo.phone} for the
          fastest answer.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setStep(1);
            setData(empty);
          }}
          className="btn-ghost"
        >
          Start a new enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-6" noValidate>
      <Stepper step={step} />

      {step === 1 && (
        <fieldset className="space-y-4">
          <legend className="eyebrow mb-2">Step 1 — Damage</legend>
          <Field label="What kind of damage?">
            <SegmentedControl
              value={data.damageType}
              onChange={(v) => update("damageType", v as FormState["damageType"])}
              options={[
                { value: "cosmetic", label: "Cosmetic" },
                { value: "impact", label: "Impact" },
                { value: "insurer-linked", label: "Insurer-linked" },
              ]}
            />
          </Field>
          <Field label="Insurer involved?">
            <SegmentedControl
              value={data.insurer}
              onChange={(v) => update("insurer", v as FormState["insurer"])}
              options={[
                { value: "no", label: "No" },
                { value: "yes", label: "Yes" },
                { value: "unsure", label: "Unsure" },
              ]}
            />
          </Field>
          <Field label="Damage summary">
            <textarea
              required
              rows={4}
              value={data.summary}
              onChange={(e) => update("summary", e.target.value)}
              placeholder="Briefly describe the damaged area and what happened."
              className={inputClass}
            />
          </Field>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="btn-primary"
              disabled={!data.summary || !data.damageType}
            >
              Next
            </button>
          </div>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className="space-y-4">
          <legend className="eyebrow mb-2">Step 2 — Vehicle &amp; location</legend>
          <Field label="Vehicle registration">
            <input
              type="text"
              required
              value={data.registration}
              onChange={(e) => update("registration", e.target.value.toUpperCase())}
              placeholder="e.g. AB12 CDE"
              className={`${inputClass} uppercase`}
            />
          </Field>
          <Field label="Your area">
            <input
              type="text"
              required
              value={data.area}
              onChange={(e) => update("area", e.target.value)}
              placeholder="e.g. Brislington, Bath, Filton"
              className={inputClass}
            />
          </Field>
          <Field label="Preferred response">
            <SegmentedControl
              value={data.preference}
              onChange={(v) => update("preference", v as FormState["preference"])}
              options={[
                { value: "phone", label: "Fast phone answer" },
                { value: "written", label: "Written estimate route" },
              ]}
            />
          </Field>
          <div className="flex justify-between">
            <button type="button" onClick={() => setStep(1)} className="btn-ghost">
              Back
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              className="btn-primary"
              disabled={!data.registration || !data.area || !data.preference}
            >
              Next
            </button>
          </div>
        </fieldset>
      )}

      {step === 3 && (
        <fieldset className="space-y-4">
          <legend className="eyebrow mb-2">Step 3 — Contact details</legend>
          <Field label="Name">
            <input
              type="text"
              required
              value={data.name}
              onChange={(e) => update("name", e.target.value)}
              className={inputClass}
            />
          </Field>
          <Field label="Phone">
            <input
              type="tel"
              required
              value={data.phone}
              onChange={(e) => update("phone", e.target.value)}
              className={inputClass}
            />
          </Field>
          <Field label="Email">
            <input
              type="email"
              required
              value={data.email}
              onChange={(e) => update("email", e.target.value)}
              className={inputClass}
            />
          </Field>
          <label className="flex gap-3 items-start text-xs text-steel-400">
            <input
              type="checkbox"
              checked={data.consent}
              onChange={(e) => update("consent", e.target.checked)}
              required
              className="mt-1 accent-accent-500"
            />
            <span>
              I understand my enquiry details will be used to respond to this
              repair request and I have read the{" "}
              <a href="/privacy-policy/" className="underline hover:text-cream-50">
                privacy policy
              </a>{" "}
              and{" "}
              <a href="/terms-and-conditions/" className="underline hover:text-cream-50">
                terms and conditions
              </a>
              .
            </span>
          </label>
          <div className="flex justify-between">
            <button type="button" onClick={() => setStep(2)} className="btn-ghost">
              Back
            </button>
            <button
              type="submit"
              className="btn-primary"
              disabled={!data.name || !data.phone || !data.email || !data.consent}
            >
              Send by email
            </button>
          </div>
        </fieldset>
      )}

      <p className="text-xs text-steel-500 border-t border-cream-50/10 pt-4">
        Prefer to send photos straight away? Email them to{" "}
        <a href={`mailto:${businessInfo.email}`} className="underline">
          {businessInfo.email}
        </a>{" "}
        or call{" "}
        <a href={`tel:${businessInfo.phoneE164}`} className="underline">
          {businessInfo.phone}
        </a>{" "}
        for the quickest route.
      </p>
    </form>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-wider2 text-steel-400 mb-1.5">
        {label}
      </span>
      {children}
    </label>
  );
}

function SegmentedControl({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => onChange(o.value)}
          className={`text-xs uppercase tracking-wider2 font-semibold px-3 py-2.5 border rounded-sm transition-colors ${
            value === o.value
              ? "border-accent-500 bg-accent-500/10 text-cream-50"
              : "border-cream-50/10 text-steel-400 hover:border-cream-50/30"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function Stepper({ step }: { step: Step }) {
  return (
    <ol className="flex gap-2">
      {[1, 2, 3].map((n) => (
        <li
          key={n}
          className={`flex-1 h-1 rounded-full ${
            n <= step ? "bg-accent-500" : "bg-cream-50/10"
          }`}
        />
      ))}
    </ol>
  );
}
