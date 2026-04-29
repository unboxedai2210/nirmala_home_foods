import React from "react";
import { SectionHeader } from "./SectionHeader";
import { snacks } from "../../data/menu";

const ACCENT = "#D4860B";

export const Snacks = () => {
  return (
    <section id="snacks" className="relative py-24 md:py-32 px-6 md:px-12" data-testid="snacks-section">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Telugu Snacks"
          title="Crunch, sweet &amp; savoury — bundled for the tin box."
          description="Fresh-fried and dry-roasted snacks, priced simply across 250g, 500g and 1 kg. No preservatives, ever."
          accentColor={ACCENT}
        />

        {/* Desktop table */}
        <div className="hidden md:block bg-nirmala-surface border border-nirmala-divider rounded-md overflow-hidden">
          <table className="w-full text-left border-collapse" data-testid="snacks-table">
            <thead>
              <tr className="bg-nirmala-bg/60">
                <th className="px-8 py-5 text-[11px] uppercase tracking-[0.24em] text-nirmala-amber font-semibold">
                  Item
                </th>
                <th className="px-6 py-5 text-[11px] uppercase tracking-[0.24em] text-nirmala-amber font-semibold text-right">
                  250 g
                </th>
                <th className="px-6 py-5 text-[11px] uppercase tracking-[0.24em] text-nirmala-amber font-semibold text-right">
                  500 g
                </th>
                <th className="px-8 py-5 text-[11px] uppercase tracking-[0.24em] text-nirmala-amber font-semibold text-right">
                  1 kg
                </th>
              </tr>
            </thead>
            <tbody>
              {snacks.map((s, idx) => (
                <tr
                  key={s.name}
                  data-testid={`snack-row-${idx}`}
                  className="border-t border-nirmala-divider hover:bg-nirmala-bg/40 transition-colors"
                >
                  <td className="px-8 py-5 text-nirmala-text font-serif text-lg">{s.name}</td>
                  <td className="px-6 py-5 text-nirmala-muted text-right tabular-nums">₹{s.p250}</td>
                  <td className="px-6 py-5 text-nirmala-muted text-right tabular-nums">₹{s.p500}</td>
                  <td className="px-8 py-5 text-nirmala-gold text-right tabular-nums font-semibold">
                    ₹{s.p1kg}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile list */}
        <div className="md:hidden space-y-4">
          {snacks.map((s, idx) => (
            <div
              key={s.name}
              data-testid={`snack-mobile-${idx}`}
              className="bg-nirmala-surface border border-nirmala-divider rounded-md p-5"
            >
              <h4 className="text-lg font-serif text-nirmala-text mb-4">{s.name}</h4>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  { l: "250g", v: s.p250 },
                  { l: "500g", v: s.p500 },
                  { l: "1kg", v: s.p1kg },
                ].map((c) => (
                  <div key={c.l} className="py-2 border border-nirmala-divider rounded-sm">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-nirmala-muted/70">{c.l}</div>
                    <div className="text-nirmala-gold font-serif text-lg">₹{c.v}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-nirmala-muted/80 italic">
          All items freshly prepared. Prices exclude delivery charges.
        </p>
      </div>
    </section>
  );
};
