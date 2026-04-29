import React, { useEffect, useState } from "react";
import { WHATSAPP_LINK } from "../../data/menu";

const links = [
  { id: "non-veg", label: "Non-Veg" },
  { id: "veg", label: "Veg" },
  { id: "snacks", label: "Snacks" },
  { id: "how", label: "How to Order" },
  { id: "contact", label: "Contact" },
];

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-nirmala-bg/90 backdrop-blur border-b border-nirmala-divider" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          data-testid="nav-logo"
          className="font-serif text-lg md:text-xl text-nirmala-text hover:text-nirmala-gold transition-colors"
        >
          Nirmala <span className="italic text-nirmala-gold">Home Foods</span>
        </button>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              data-testid={`nav-${l.id}`}
              className="text-xs uppercase tracking-[0.22em] text-nirmala-muted hover:text-nirmala-gold transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="nav-whatsapp-btn"
          className="hidden sm:inline-flex px-4 py-2 text-xs uppercase tracking-[0.22em] border border-nirmala-amber/60 text-nirmala-gold rounded-sm hover:bg-nirmala-amber hover:text-nirmala-bg transition-colors"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
};
