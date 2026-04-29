import React from "react";

export const OurStory = () => (
  <section
    id="story"
    data-testid="story-section"
    className="relative py-24 md:py-32 px-6 md:px-12 bg-nirmala-surface border-y border-nirmala-divider"
  >
    <div className="max-w-3xl mx-auto text-center">
      <div className="label-eyebrow mb-6" data-testid="story-eyebrow">Our Story</div>
      <p
        className="font-serif italic text-xl md:text-2xl lg:text-[28px] leading-relaxed text-nirmala-text"
        data-testid="story-paragraph"
      >
        Nirmala Home Foods started as a passion for preserving traditional Telugu recipes
        passed down through generations. Every jar is hand-prepared by us in Hyderabad —
        <span className="text-nirmala-gold"> no preservatives, no shortcuts</span>,
        just authentic homemade taste.
      </p>
      <div className="mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-nirmala-muted/80">
        <span className="w-10 h-px bg-nirmala-divider" />
        Made in Hyderabad
        <span className="w-10 h-px bg-nirmala-divider" />
      </div>
    </div>
  </section>
);
