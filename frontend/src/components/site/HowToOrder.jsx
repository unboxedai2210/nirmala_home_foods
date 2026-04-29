import React from "react";
import { SectionHeader } from "./SectionHeader";

const steps = [
  { n: "01", title: "Browse the menu", desc: "Pick your pickles and snacks from our hand-written list." },
  { n: "02", title: "Message on WhatsApp", desc: "Send us your order and delivery address on WhatsApp." },
  { n: "03", title: "We prepare fresh", desc: "Each batch is made to order — minimum 2 days for freshness." },
  { n: "04", title: "Delivered to your door", desc: "Sealed, labelled and delivered across Hyderabad & beyond." },
];

export const HowToOrder = () => (
  <section id="how" className="relative py-24 md:py-32 px-6 md:px-12" data-testid="how-section">
    <div className="max-w-6xl mx-auto">
      <SectionHeader
        eyebrow="How to order"
        title="Four simple steps, zero fuss."
        accentColor="#D4860B"
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative">
        {steps.map((s, idx) => (
          <div
            key={s.n}
            data-testid={`how-step-${idx}`}
            className="relative"
          >
            <div className="text-6xl font-serif text-nirmala-amber/25 mb-3 leading-none">{s.n}</div>
            <h3 className="text-xl md:text-2xl text-nirmala-text font-serif mb-3">{s.title}</h3>
            <p className="text-nirmala-muted/90 text-sm leading-relaxed">{s.desc}</p>
            {idx < steps.length - 1 && (
              <div className="hidden md:block absolute top-6 -right-3 w-6 h-px bg-nirmala-divider" />
            )}
          </div>
        ))}
      </div>
      <p className="mt-12 text-sm text-nirmala-muted italic">
        All items freshly prepared. Prices exclude delivery charges.
      </p>
    </div>
  </section>
);
