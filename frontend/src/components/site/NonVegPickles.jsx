import React from "react";
import { SectionHeader } from "./SectionHeader";
import { nonVegPickles, WHATSAPP_LINK } from "../../data/menu";

const ACCENT = "#7A1E1E";

export const NonVegPickles = () => {
  return (
    <section id="non-veg" className="relative py-24 md:py-32 px-6 md:px-12" data-testid="nonveg-section">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Non-Veg Pickles"
          title="Slow-cooked. Deep-flavored. Bottled at home."
          description="Rich masalas, sun-dried chilies, and aromatic oils — the way grandmother made them for festivals and long train journeys."
          accentColor={ACCENT}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
          {nonVegPickles.map((item, idx) => (
            <article
              key={item.name}
              data-testid={`nonveg-card-${idx}`}
              className={`card-glow group relative bg-nirmala-surface border border-nirmala-divider rounded-md overflow-hidden ${
                idx % 3 === 1 ? "md:mt-10" : idx % 3 === 2 ? "lg:mt-20" : ""
              }`}
            >
              {/* Image with dark overlay */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(30,14,5,0.55) 60%, #2C1507 100%)",
                  }}
                />
                <div
                  className="absolute top-4 left-4 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] rounded-sm backdrop-blur-sm"
                  style={{
                    color: "#F2E4C4",
                    background: "rgba(122, 30, 30, 0.85)",
                    border: `1px solid ${ACCENT}`,
                  }}
                >
                  Non-Veg
                </div>
              </div>

              {/* Body */}
              <div className="p-7 md:p-8 pt-6">
                <h3 className="text-2xl md:text-[28px] text-nirmala-text leading-tight mb-6 font-serif">
                  {item.name}
                </h3>
                <div className="flex items-end justify-between pt-5 border-t border-nirmala-divider">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.24em] text-nirmala-muted/70 mb-1">
                      Per kilo
                    </div>
                    <div className="text-3xl text-nirmala-gold font-serif">
                      ₹{item.price.toLocaleString("en-IN")}
                    </div>
                  </div>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`nonveg-order-${idx}`}
                    className="text-xs uppercase tracking-[0.24em] text-nirmala-muted hover:text-nirmala-gold transition-colors"
                  >
                    Order →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
