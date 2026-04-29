// ---- Pickle data (per-card photos, dark-tinted via CSS overlay) ----
export const nonVegPickles = [
  {
    name: "Chicken Pickle",
    price: 1400,
    image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
  },
  {
    name: "Chicken Gongura Pickle",
    price: 1500,
    image: "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg",
  },
  {
    name: "Mutton Pickle",
    price: 2300,
    image: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg",
  },
  {
    name: "Mutton Gongura Pickle",
    price: 2400,
    image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg",
  },
  {
    name: "Prawns Pickle",
    price: 1700,
    image: "https://images.pexels.com/photos/725992/pexels-photo-725992.jpeg",
  },
  {
    name: "Prawns Gongura Pickle",
    price: 1800,
    image: "https://images.pexels.com/photos/3296434/pexels-photo-3296434.jpeg",
  },
  {
    name: "Fish Pickle (Korramenu)",
    price: 1700,
    image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg",
  },
];

export const vegPickles = [
  {
    name: "Any Veg Pickle",
    price: 1000,
    note: "Gongura, Tomato, Allam, Kakarkaya, Cauliflower, Cabbage, Vusirikaya, Nimmakaya, Pandu Mirchi, Pudina",
    image: "https://images.pexels.com/photos/7812134/pexels-photo-7812134.jpeg",
  },
  {
    name: "Andhra Avakaya",
    price: 1300,
    image: "https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg",
  },
  {
    name: "Telangana Avakaya",
    price: 1500,
    image: "https://images.pexels.com/photos/6210927/pexels-photo-6210927.jpeg",
  },
];

// ---- Snacks grouped into 3 categories with a banner each ----
export const snackGroups = [
  {
    id: "savoury",
    title: "Savoury Snacks",
    description: "Crisp, fried & roasted — perfect with evening chai.",
    banner: "https://images.pexels.com/photos/8629098/pexels-photo-8629098.jpeg",
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
    banner: "https://images.pexels.com/photos/15012971/pexels-photo-15012971.jpeg",
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
    banner: "https://images.pexels.com/photos/8500348/pexels-photo-8500348.jpeg",
    items: [
      { name: "Millet Atukulu / Murmuralu", p250: 89,  p500: 179, p1kg: 299 },
      { name: "Makka Atukulu",              p250: 119, p500: 219, p1kg: 399 },
      { name: "Ragi Atukulu",               p250: 89,  p500: 169, p1kg: 299 },
      { name: "Jonna Atukulu",              p250: 89,  p500: 169, p1kg: 299 },
    ],
  },
];

// Flat list (kept for compatibility / tests)
export const snacks = snackGroups.flatMap((g) => g.items);

// ---- WhatsApp links ----
export const WHATSAPP_NUMBER = "917702220369";
export const WHATSAPP_MESSAGE = "Hi Nirmala Home Foods! I would like to place an order.";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

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

export const INSTAGRAM_LINK = "https://www.instagram.com/nirmala_home_foods";
export const INSTAGRAM_HANDLE = "@nirmala_home_foods";
export const PHONE_DISPLAY = "+91 77022 20369";
