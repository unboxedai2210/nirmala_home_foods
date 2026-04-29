import React from "react";
import { SectionHeader } from "./SectionHeader";
import { vegPickles, WHATSAPP_LINK } from "../../data/menu";

const ACCENT = "#4E7A3B";

export const VegPickles = () => {
  return (
    <section id="veg" className="relative py-24 md:py-32 px-6 md:px-12 kitchen-bg" data-testid="veg-section">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Veg Pickles"
          title="Gongura, Avakaya &amp; more — sunlit in Hyderabad."
          description="From tart Andhra avakaya to the beloved gongura — every jar is hand-mixed in small batches using cold-pressed oils and stone-ground spices."
          accentColor={ACCENT}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {vegPickles.map((item, idx) => (
            <article
              key={item.name}
              data-testid={`veg-card-${idx}`}
              className={`card-glow bg-nirmala-surface border border-nirmala-divider rounded-md p-7 md:p-8 ${
                idx === 1 ? "md:mt-12" : idx === 2 ? "md:mt-6" : ""
              }`}
            >
              <div
                className="inline-block px-2.5 py-1 mb-6 text-[10px] font-semibold uppercase tracking-[0.22em] rounded-sm"
                style={{
                  color: ACCENT,
                  background: "rgba(78, 122, 59, 0.15)",
                  border: `1px solid ${ACCENT}55`,
                }}
              >
                Veg
              </div>
              <h3 className="text-2xl md:text-[28px] text-nirmala-text leading-tight mb-4 font-serif">
                {item.name}
              </h3>
              {item.note && (
                <p className="text-nirmala-muted/90 text-sm leading-relaxed mb-6 italic">
                  {item.note}
                </p>
              )}
              <div className="flex items-end justify-between pt-5 border-t border-nirmala-divider">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.24em] text-nirmala-muted/70 mb-1">
                    Per kilo
                  </div>
                  <div className="text-3xl text-nirmala-gold font-serif">₹{item.price.toLocaleString("en-IN")}</div>
                </div>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`veg-order-${idx}`}
                  className="text-xs uppercase tracking-[0.24em] text-nirmala-muted hover:text-nirmala-gold transition-colors"
                >
                  Order →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
