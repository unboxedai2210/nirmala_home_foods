import React from "react";

export const MinOrderBanner = () => (
  <div
    data-testid="min-order-banner"
    className="fixed top-[60px] md:top-[68px] inset-x-0 z-30 bg-nirmala-amber text-nirmala-bg"
  >
    <div className="max-w-6xl mx-auto px-6 md:px-12 py-2 flex items-center justify-center gap-2 text-[11px] md:text-xs font-semibold tracking-wide text-center">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-3.5 h-3.5 shrink-0">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>
        All orders require minimum 2 days preparation
        <span className="mx-2 opacity-60">·</span>
        Prices exclude delivery charges
      </span>
    </div>
  </div>
);
