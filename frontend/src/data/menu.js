// ---- Pickle data (text-only cards; modal opens on click) ----
export const nonVegPickles = [
  { name: "Chicken Pickle (Boneless)",          price: 1400 },
  { name: "Chicken Gongura Pickle (Boneless)",  price: 1500 },
  { name: "Mutton Pickle (Boneless)",           price: 2300 },
  { name: "Mutton Gongura Pickle (Boneless)",   price: 2400 },
  { name: "Prawns Pickle",                      price: 1700 },
  { name: "Prawns Gongura Pickle",              price: 1800 },
  { name: "Fish Pickle (Korramenu)",            price: 1700 },
];

export const vegPickles = [
  {
    name: "Any Veg Pickle",
    price: 1000,
    note: "Gongura, Tomato, Allam, Kakarkaya, Cauliflower, Cabbage, Vusirikaya, Nimmakaya, Pandu Mirchi, Pudina",
  },
  { name: "Andhra Avakaya",    price: 1300 },
  { name: "Telangana Avakaya", price: 1500 },
];

// ---- Snacks grouped into 3 categories (text only, no banners) ----
export const snackGroups = [
  {
    id: "savoury",
    title: "Savoury Snacks",
    description: "Crisp, fried & roasted — perfect with evening chai.",
    items: [
      { name: "Chekkalu / Appalu",       p250: 119, p500: 219, p1kg: 399 },
      { name: "Janthikalu / Murukulu",   p250: 119, p500: 219, p1kg: 399 },
      { name: "Kaara Bundi",             p250: 119, p500: 219, p1kg: 399 },
      { name: "Mixture",                 p250: 119, p500: 219, p1kg: 399 },
      { name: "Karampusa",               p250: 119, p500: 219, p1kg: 399 },
      { name: "Sanna Murukulu",          p250: 119, p500: 219, p1kg: 399 },
      { name: "Corn Flakes",             p250: 119, p500: 219, p1kg: 399 },
      { name: "Chudava Mixture",         p250: 119, p500: 219, p1kg: 399 },
      { name: "Chekodilu",               p250: 119, p500: 219, p1kg: 399 },
    ],
  },
  {
    id: "sweets",
    title: "Sweets & Festival Specials",
    description: "Slow-stirred, ghee-rich classics for celebrations and gifting.",
    items: [
      { name: "Sunnudalu (Sugar/Belam)", p250: 179, p500: 329, p1kg: 599 },
      { name: "Ravva Laddu",             p250: 119, p500: 219, p1kg: 399 },
      { name: "Bundi Laddu",             p250: 149, p500: 275, p1kg: 499 },
      { name: "Gavvalu",                 p250: 119, p500: 219, p1kg: 399 },
      { name: "Kajjikayalu / Garjalu",   p250: 119, p500: 219, p1kg: 399 },
      { name: "Bobbatlu / Bhakshalu",    p250: 149, p500: 275, p1kg: 499 },
    ],
  },
  {
    id: "atukulu",
    title: "Healthy Atukulu",
    description: "Roasted millet, ragi, jowar & corn flakes — wholesome by the spoonful.",
    items: [
      { name: "Millet Atukulu / Murmuralu", p250: 89,  p500: 179, p1kg: 299 },
      { name: "Makka Atukulu",              p250: 119, p500: 219, p1kg: 399 },
      { name: "Ragi Atukulu",               p250: 89,  p500: 169, p1kg: 299 },
      { name: "Jonna Atukulu",              p250: 89,  p500: 169, p1kg: 299 },
    ],
  },
];

// Flat list of snacks (kept for compatibility / dropdown)
export const snacks = snackGroups.flatMap((g) => g.items);

// ---- WhatsApp links ----
export const WHATSAPP_NUMBER = "917702220369";
export const WHATSAPP_MESSAGE = "Hi Nirmala Home Foods! I would like to place an order.";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// Item-specific pre-fill — used inside the modal "Order on WhatsApp" button.
// `qty` is optional ("250g", "500g", "1kg" or omitted for per-kg pickles).
export const buildItemOrderLink = (itemName, qty) => {
  const detail = qty ? `${qty} of ${itemName}` : itemName;
  const text = `Hi Nirmala Home Foods! I would like to order: ${detail}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

// Customer confirmation message after they submit the on-site form
export const CUSTOMER_CONFIRM_MESSAGE =
  "Hi Nirmala! I just placed an order on your website. Please confirm.";
export const CUSTOMER_CONFIRM_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(CUSTOMER_CONFIRM_MESSAGE)}`;

// Owner notification — opened automatically with order summary pre-filled
export const buildOwnerOrderLink = ({ name, phone, items, notes }) => {
  const summary =
    `New Order from ${name} - ${phone}: ${items}` +
    (notes && notes.trim() ? ` | Notes: ${notes}` : "");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(summary)}`;
};

// Flat list for the Contact form "Quick pick" dropdown
export const allOrderableItems = [
  ...nonVegPickles.map((i) => ({ label: `${i.name} — ₹${i.price}/kg`, value: i.name, group: "Non-Veg Pickles" })),
  ...vegPickles.map((i)    => ({ label: `${i.name} — ₹${i.price}/kg`, value: i.name, group: "Veg Pickles" })),
  ...snackGroups.flatMap((g) =>
    g.items.map((s) => ({
      label: `${s.name} — ₹${s.p250}/250g · ₹${s.p500}/500g · ₹${s.p1kg}/1kg`,
      value: s.name,
      group: g.title,
    }))
  ),
];

export const INSTAGRAM_LINK = "https://www.instagram.com/nirmala_home_foods";
export const INSTAGRAM_HANDLE = "@nirmala_home_foods";
export const PHONE_DISPLAY = "+91 77022 20369";
