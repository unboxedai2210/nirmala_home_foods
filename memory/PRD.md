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
- Non-Veg Pickles — staggered cards, maroon accent, all 7 items + ₹/kg prices.
- Veg Pickles — staggered cards, gongura green accent, all 3 items.
- Snacks — full pricing table (250g/500g/1kg) on desktop, mobile card layout, all 19 items with correct prices.
- How to Order — 4-step horizontal flow.
- Contact form — name/phone/items/notes → POST /api/orders, success/error toasts.
- Footer — WhatsApp + Instagram links.
- Floating WhatsApp button (amber, pulse animation, pre-filled message).
- All interactive elements have `data-testid`.
- **Backend + Frontend tested 100% by testing agent (iteration_1).**

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
