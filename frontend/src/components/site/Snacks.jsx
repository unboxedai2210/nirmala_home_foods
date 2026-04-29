import React from "react";
import { SectionHeader } from "./SectionHeader";
import { snackGroups } from "../../data/menu";

const ACCENT = "#D4860B";

const SnackGroup = ({ group, gIdx }) => (
  <div className="mb-16 last:mb-0" data-testid={`snack-group-${group.id}`}>
    {/* Banner */}
    <div className="relative h-44 md:h-56 lg:h-64 rounded-md overflow-hidden mb-8 border border-nirmala-divider">
      <img
        src={group.banner}
        alt={group.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(30,14,5,0.55) 50%, rgba(30,14,5,0.85) 100%)",
        }}
      />
      <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-10">
        <div
          className="text-[11px] uppercase font-semibold mb-3"
          style={{ color: "#D4860B", letterSpacing: "0.28em" }}
        >
          Group {gIdx + 1}
        </div>
        <h3 className="text-3xl md:text-4xl font-serif text-nirmala-text leading-tight mb-2">
          {group.title}
        </h3>
        <p className="text-nirmala-muted/95 text-sm md:text-base max-w-xl italic">
          {group.description}
        </p>
      </div>
    </div>

    {/* Desktop table */}
    <div className="hidden md:block bg-nirmala-surface border border-nirmala-divider rounded-md overflow-hidden">
      <table className="w-full text-left border-collapse" data-testid={`snacks-table-${group.id}`}>
        <thead>
          <tr className="bg-nirmala-bg/60">
            <th className="px-8 py-4 text-[11px] uppercase tracking-[0.24em] text-nirmala-amber font-semibold">
              Item
            </th>
            <th className="px-6 py-4 text-[11px] uppercase tracking-[0.24em] text-nirmala-amber font-semibold text-right">
              250 g
            </th>
            <th className="px-6 py-4 text-[11px] uppercase tracking-[0.24em] text-nirmala-amber font-semibold text-right">
              500 g
            </th>
            <th className="px-8 py-4 text-[11px] uppercase tracking-[0.24em] text-nirmala-amber font-semibold text-right">
              1 kg
            </th>
          </tr>
        </thead>
        <tbody>
          {group.items.map((s, idx) => (
            <tr
              key={s.name}
              data-testid={`snack-row-${group.id}-${idx}`}
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
      {group.items.map((s, idx) => (
        <div
          key={s.name}
          data-testid={`snack-mobile-${group.id}-${idx}`}
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
  </div>
);

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

        {snackGroups.map((g, i) => (
          <SnackGroup key={g.id} group={g} gIdx={i} />
        ))}

        <p className="mt-8 text-sm text-nirmala-muted/80 italic">
          All items freshly prepared. Prices exclude delivery charges.
        </p>
      </div>
    </section>
  );
};
