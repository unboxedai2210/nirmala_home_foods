import React from "react";
import { WHATSAPP_LINK, INSTAGRAM_LINK, INSTAGRAM_HANDLE, PHONE_DISPLAY } from "../../data/menu";

export const Footer = () => (
  <footer
    className="bg-nirmala-footer border-t border-nirmala-divider px-6 md:px-12 py-16"
    data-testid="site-footer"
  >
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <h3 className="text-3xl font-serif text-nirmala-text mb-3">Nirmala Home Foods</h3>
        <p className="text-nirmala-muted/80 text-sm leading-relaxed max-w-sm">
          Handcrafted pickles and Telugu snacks from our Hyderabad kitchen — made the way they've been made
          for generations.
        </p>
      </div>

      <div>
        <div className="label-eyebrow mb-4">Reach us</div>
        <ul className="space-y-3 text-sm">
          <li>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-whatsapp-link"
              className="text-nirmala-text hover:text-nirmala-gold transition-colors"
            >
              WhatsApp — {PHONE_DISPLAY}
            </a>
          </li>
          <li>
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-instagram-link"
              className="text-nirmala-text hover:text-nirmala-gold transition-colors"
            >
              Instagram — {INSTAGRAM_HANDLE}
            </a>
          </li>
        </ul>
      </div>

      <div>
        <div className="label-eyebrow mb-4">Kitchen</div>
        <p className="text-nirmala-muted/80 text-sm leading-relaxed">
          Hyderabad, Telangana, India.<br />
          Every jar hand-packed. Every snack fresh-fried.
        </p>
      </div>
    </div>

    <div className="max-w-6xl mx-auto mt-14 pt-6 border-t border-nirmala-divider flex flex-col md:flex-row justify-between gap-3 text-xs text-nirmala-muted/60">
      <span>© {new Date().getFullYear()} Nirmala Home Foods. Made with ghee &amp; patience.</span>
      <span className="italic">Made fresh. Packed with tradition.</span>
    </div>
  </footer>
);
