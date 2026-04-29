# Nirmala Home Foods — PRD

## Original Problem Statement
Build a marketing website for "Nirmala Home Foods", a Hyderabad-based home food
business selling handmade non-veg pickles, veg pickles, and traditional Telugu
snacks. Strict dark tamarind/spice color palette, traditional serif headings,
single-page layout with hero, sections per category, snacks pricing table,
how-to-order, contact form, footer, and a floating WhatsApp CTA.

## User Choices
- Static site **plus simple contact/order form stored in DB** (MongoDB)
- Curated food photography for hero & sections
- WhatsApp pre-filled message: "Hi Nirmala Home Foods! I would like to place an order."
- Sticky amber min-order banner ("2 days preparation · Prices exclude delivery")
- Centered italic "Our Story" section between Hero and Non-Veg Pickles
- No testimonials section (skipped)

## Architecture
- **Frontend**: React 19 + Tailwind + Sonner toaster (single page).
- **Backend**: FastAPI + Motor (MongoDB), `/api/orders` POST + GET, `/api/` health.
- **DB**: MongoDB collection `orders` (id, name, phone, items, notes, created_at).
- **Fonts**: Playfair Display (headings), Work Sans (body) — via Google Fonts.
- **Palette**: tamarind brown bg, roasted spice surfaces, parchment text, mustard amber, raw turmeric gold, gongura green (veg), chili maroon (non-veg).

## What's Implemented (Feb 2026)
- NavBar w/ smooth scroll to sections, sticky on scroll.
- MinOrderBanner (amber, fixed beneath nav).
- Hero — full viewport, dark moody food bg, Playfair title, two CTAs (WhatsApp / View Menu).
- Our Story — centered italic serif paragraph on dark surface.
- **Non-Veg Pickles — text-only clickable cards. Subtitle "All chicken & mutton pickles are 100% boneless". Names updated: Chicken / Chicken Gongura / Mutton / Mutton Gongura now end in "(Boneless)".**
- **Veg Pickles — text-only clickable cards.**
- **Snacks — text-only group headers (no banner images), 3 groups (Savoury / Sweets & Festival / Healthy Atukulu), each row is clickable.**
- **ItemModal (shared shadcn-style Radix Dialog) — opens on any item click. Shows name, price (₹/kg or 3 weight chips for snacks), "Photo coming soon" placeholder, item-specific WhatsApp button(s) with pre-filled order text.**
- How to Order — 4-step horizontal flow.
- **Contact form — added a "Quick pick" grouped <select> dropdown listing every item (with boneless naming); selecting an option appends it (comma-separated) to the items textarea. On submit: POST /api/orders → owner WhatsApp auto-opens with summary → toast w/ "Open WhatsApp to Confirm" action.**
- Footer — WhatsApp + Instagram links.
- Floating WhatsApp button (amber, pulse animation, pre-filled message).
- All interactive elements have `data-testid`.
- **Tested 100% across iterations 1–3.**

## Backlog
### P1
- Admin login + dashboard to view/manage `/api/orders` submissions
- Order confirmation email/SMS via Twilio or SendGrid
- Image gallery / per-item photos (currently text cards only)

### P2
- SEO meta + OG images
- Multi-language (Telugu / English toggle)
- Google Reviews / testimonials carousel
- Festival packages (Sankranti / Diwali / Bonalu specials)
- Delivery fee calculator by pincode

## Next Tasks
- Decide whether to integrate WhatsApp Business API for automated confirmations
- Add admin auth + orders dashboard once volume grows
