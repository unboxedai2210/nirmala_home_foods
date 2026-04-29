import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { SectionHeader } from "./SectionHeader";
import {
  WHATSAPP_LINK,
  CUSTOMER_CONFIRM_LINK,
  buildOwnerOrderLink,
} from "../../data/menu";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const ContactForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", items: "", notes: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.items.trim()) {
      toast.error("Please fill in your name, phone and order items.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/orders`, form);

      // 1) Auto-open owner WhatsApp window with order summary
      const ownerLink = buildOwnerOrderLink(form);
      window.open(ownerLink, "_blank", "noopener,noreferrer");

      // 2) Show success toast with confirm action for the customer
      toast.success("Order received! Tap below to confirm on WhatsApp and we'll get started.", {
        duration: 12000,
        action: {
          label: "Open WhatsApp to Confirm",
          onClick: () =>
            window.open(CUSTOMER_CONFIRM_LINK, "_blank", "noopener,noreferrer"),
        },
      });

      setForm({ name: "", phone: "", items: "", notes: "" });
    } catch (err) {
      toast.error("Something went wrong. Please try WhatsApp instead.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full bg-nirmala-bg border border-nirmala-divider focus:border-nirmala-amber text-nirmala-text placeholder:text-nirmala-muted/50 px-4 py-3 rounded-sm transition-colors";

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-12" data-testid="contact-section">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <SectionHeader
            eyebrow="Place an order"
            title="Tell us what you'd love to taste."
            description="Drop your order here, or message us on WhatsApp. We'll confirm, prepare it fresh and deliver."
            accentColor="#D4860B"
          />
          <div className="space-y-3 text-nirmala-text/90 text-sm">
            <div>
              <span className="text-nirmala-muted uppercase tracking-[0.2em] text-xs mr-3">WhatsApp</span>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-whatsapp-link"
                className="text-nirmala-gold hover:underline"
              >
                +91 77022 20369
              </a>
            </div>
            <div>
              <span className="text-nirmala-muted uppercase tracking-[0.2em] text-xs mr-3">Based in</span>
              <span>Hyderabad, Telangana</span>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="lg:col-span-3 bg-nirmala-surface border border-nirmala-divider rounded-md p-6 md:p-10 space-y-5"
          data-testid="contact-form"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-[11px] uppercase tracking-[0.24em] text-nirmala-muted mb-2">
                Your name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={onChange("name")}
                className={inputCls}
                placeholder="e.g. Lakshmi Rao"
                data-testid="contact-name-input"
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-[0.24em] text-nirmala-muted mb-2">
                Phone
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={onChange("phone")}
                className={inputCls}
                placeholder="+91 ..."
                data-testid="contact-phone-input"
              />
            </div>
          </div>
          <div>
            <label className="block text-[11px] uppercase tracking-[0.24em] text-nirmala-muted mb-2">
              What would you like?
            </label>
            <textarea
              rows={3}
              value={form.items}
              onChange={onChange("items")}
              className={inputCls + " resize-none"}
              placeholder="e.g. 500g Mutton Gongura pickle, 1kg Bundi Laddu"
              data-testid="contact-items-input"
            />
          </div>
          <div>
            <label className="block text-[11px] uppercase tracking-[0.24em] text-nirmala-muted mb-2">
              Notes (optional)
            </label>
            <textarea
              rows={2}
              value={form.notes}
              onChange={onChange("notes")}
              className={inputCls + " resize-none"}
              placeholder="Less spicy, delivery address, etc."
              data-testid="contact-notes-input"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
            <button
              type="submit"
              disabled={loading}
              data-testid="contact-submit-btn"
              className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-nirmala-amber text-nirmala-bg font-semibold tracking-wide hover:bg-nirmala-gold transition-colors disabled:opacity-60"
            >
              {loading ? "Sending…" : "Send Order Request"}
            </button>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-whatsapp-btn"
              className="text-sm text-nirmala-muted hover:text-nirmala-gold transition-colors"
            >
              or message on WhatsApp →
            </a>
          </div>
          <p className="text-[11px] text-nirmala-muted/70 italic pt-1">
            After submitting, a WhatsApp window will open so you can confirm your order with us instantly.
          </p>
        </form>
      </div>
    </section>
  );
};
