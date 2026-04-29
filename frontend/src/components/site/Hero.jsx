import React from "react";
import { WHATSAPP_LINK } from "../../data/menu";

export const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById("non-veg")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center hero-bg"
      data-testid="hero-section"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 py-24">
        <div className="max-w-3xl animate-fade-up">
          <div className="label-eyebrow mb-6" data-testid="hero-eyebrow">
            Hyderabad • Since the hearth
          </div>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-nirmala-text mb-6"
            style={{ textShadow: "0 4px 24px rgba(0,0,0,0.6)" }}
            data-testid="hero-title"
          >
            Nirmala
            <span className="block italic font-medium text-nirmala-gold">Home Foods</span>
          </h1>
          <p
            className="text-xl md:text-2xl font-serif italic text-nirmala-muted mb-5"
            data-testid="hero-subtitle"
          >
            Handcrafted Pickles &amp; Snacks from Hyderabad
          </p>
          <p
            className="text-base md:text-lg text-nirmala-text/80 max-w-xl leading-relaxed mb-10"
            data-testid="hero-tagline"
          >
            Made fresh. Packed with tradition. Delivered to your door.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-whatsapp-btn"
              className="inline-flex items-center justify-center px-8 py-4 rounded-sm bg-nirmala-amber text-nirmala-bg font-semibold tracking-wide hover:bg-nirmala-gold transition-colors"
            >
              Order on WhatsApp
              <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <button
              onClick={scrollToMenu}
              data-testid="hero-view-menu-btn"
              className="inline-flex items-center justify-center px-8 py-4 rounded-sm border border-nirmala-text/40 text-nirmala-text hover:border-nirmala-amber hover:text-nirmala-gold transition-colors"
            >
              View Menu
            </button>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-nirmala-muted/70 text-xs tracking-[0.3em] uppercase flex flex-col items-center gap-2">
        <span>Scroll</span>
        <span className="w-px h-10 bg-nirmala-muted/40" />
      </div>
    </section>
  );
};
