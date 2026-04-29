import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { buildItemOrderLink } from "../../data/menu";

/**
 * Shared modal for both pickle and snack items.
 * - Pickles pass `pricePerKg`.
 * - Snacks pass `weights = [{label:"250g", price}, ...]` for the 3-button order.
 */
export const ItemModal = ({
  open,
  onOpenChange,
  item,
  accent = "#D4860B",
  pricePerKg,
  weights,
  category,
}) => {
  if (!item) return null;

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        />
        <DialogPrimitive.Content
          data-testid="item-modal"
          className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-md border border-nirmala-divider bg-nirmala-surface text-nirmala-text shadow-2xl shadow-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
        >
          {/* Photo placeholder */}
          <div
            className="relative h-48 md:h-56 overflow-hidden rounded-t-md flex items-center justify-center border-b border-nirmala-divider"
            style={{
              background:
                "repeating-linear-gradient(135deg, #1E0E05 0 14px, #251208 14px 28px)",
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-nirmala-muted/60 text-center px-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-10 h-10 mb-3 opacity-70">
                <rect x="3" y="5" width="18" height="14" rx="1.5" />
                <circle cx="9" cy="11" r="1.6" />
                <path d="M3 17l5-5 4 4 3-3 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[11px] uppercase tracking-[0.28em]">Photo coming soon</span>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div
              className="text-[10px] font-semibold uppercase tracking-[0.28em] mb-3"
              style={{ color: accent }}
              data-testid="modal-eyebrow"
            >
              {category}
            </div>
            <DialogPrimitive.Title asChild>
              <h3 className="text-2xl md:text-3xl font-serif text-nirmala-text leading-tight mb-2" data-testid="modal-item-name">
                {item.name}
              </h3>
            </DialogPrimitive.Title>
            {item.note && (
              <p className="text-nirmala-muted/90 text-sm leading-relaxed italic mb-3">
                {item.note}
              </p>
            )}

            {/* Price row */}
            {pricePerKg != null && (
              <div className="flex items-baseline gap-2 mt-4 mb-6 pb-5 border-b border-nirmala-divider">
                <span className="text-[11px] uppercase tracking-[0.24em] text-nirmala-muted/70">Per kilo</span>
                <span className="text-3xl text-nirmala-gold font-serif" data-testid="modal-price">
                  ₹{pricePerKg.toLocaleString("en-IN")}
                </span>
              </div>
            )}

            {weights && (
              <div className="grid grid-cols-3 gap-3 mt-4 mb-6 pb-5 border-b border-nirmala-divider">
                {weights.map((w) => (
                  <div key={w.label} className="text-center py-2 border border-nirmala-divider rounded-sm">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-nirmala-muted/70">{w.label}</div>
                    <div className="text-nirmala-gold font-serif text-lg">₹{w.price}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Order buttons */}
            {pricePerKg != null && (
              <a
                href={buildItemOrderLink(item.name)}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="modal-order-btn"
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-sm bg-nirmala-amber text-nirmala-bg font-semibold tracking-wide hover:bg-nirmala-gold transition-colors"
              >
                Order on WhatsApp
              </a>
            )}

            {weights && (
              <div className="grid grid-cols-3 gap-2">
                {weights.map((w) => (
                  <a
                    key={w.label}
                    href={buildItemOrderLink(item.name, w.label)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`modal-order-${w.label}`}
                    className="inline-flex items-center justify-center px-3 py-3 rounded-sm bg-nirmala-amber text-nirmala-bg text-xs font-semibold tracking-wide hover:bg-nirmala-gold transition-colors"
                  >
                    Order {w.label}
                  </a>
                ))}
              </div>
            )}

            <p className="text-[11px] text-nirmala-muted/70 mt-4 italic text-center">
              Prepared fresh — minimum 2 days lead time. Delivery extra.
            </p>
          </div>

          <DialogPrimitive.Close
            data-testid="modal-close"
            className="absolute right-4 top-4 rounded-sm bg-black/40 text-nirmala-text hover:bg-nirmala-amber hover:text-nirmala-bg p-1.5 transition-colors"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
