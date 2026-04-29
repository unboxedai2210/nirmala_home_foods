import React from "react";

export const SectionHeader = ({ eyebrow, title, description, accentColor = "#D4860B", align = "left" }) => (
  <div className={`mb-16 ${align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}>
    <div
      className="text-xs font-semibold uppercase mb-5"
      style={{ color: accentColor, letterSpacing: "0.28em" }}
      data-testid="section-eyebrow"
    >
      {eyebrow}
    </div>
    <h2 className="text-4xl md:text-5xl lg:text-6xl text-nirmala-text leading-[1.05] mb-5">
      {title}
    </h2>
    {description && (
      <p className="text-nirmala-text/70 text-base md:text-lg leading-relaxed">
        {description}
      </p>
    )}
    <div className="mt-8 h-[2px] w-20" style={{ background: accentColor }} />
  </div>
);
