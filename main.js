const phoneBrands = ['Apple', 'Samsung', 'OnePlus', 'Vivo', 'Oppo', 'Xiaomi', 'Realme', 'Nothing'];
const phoneModels = ['iPhone 16', 'iPhone 15', 'iPhone 14', 'Samsung S24', 'Samsung A55', 'OnePlus 12', 'Vivo V30', 'Oppo Reno 11', 'Xiaomi 14', 'Realme 12 Pro', 'Nothing Phone 2a'];
const categories = ['Mobile Covers', 'Tempered Glass', 'Privacy Glass', 'Camera Lens Protectors', 'iPad/Tablet Covers', 'Smartwatch Straps', 'Laptop Accessories', 'Chargers', 'Cables', 'Power Banks'];
const categoryDisplay = {
  'Mobile Covers': 'Premium Covers',
  'Tempered Glass': 'Screen Guards',
  'Privacy Glass': 'Privacy Shield',
  'Camera Lens Protectors': 'Lens Shield',
  'iPad/Tablet Covers': 'iPad Covers',
  'Smartwatch Straps': 'Watch Straps',
  'Laptop Accessories': 'Laptop Accessories',
  Chargers: 'Fast Charge Essentials',
  Cables: 'Fast Sync Cables',
  'Power Banks': 'Travel Power',
  'Lifestyle Tech': 'Lifestyle Tech'
};
const timeSlots = ['10 AM - 12 PM', '12 PM - 2 PM', '2 PM - 4 PM', '4 PM - 6 PM', '6 PM - 8 PM'];

const rawProducts = [
  ['FK001', 'AeroShield MagSafe Clear Case', 'Mobile Covers', 899, 1299, 4.8, 'Best Seller', 'iPhone 16, iPhone 15', 'iphone-clear', 'Crystal clear anti-yellowing case with raised camera lip and MagSafe ring.', ['Clear', 'Frost'], 'In stock', 'Apple'],
  ['FK002', 'Noida Matte Armor Case', 'Mobile Covers', 699, 999, 4.7, 'Trending', 'Samsung S24, OnePlus 12', 'samsung-matte', 'Soft-touch matte protection for daily NCR commutes and cafe desks.', ['Charcoal', 'Navy', 'Olive'], 'In stock', 'Samsung'],
  ['FK003', 'Candy Pop Silicone Cover', 'Mobile Covers', 599, 899, 4.6, 'New Drop', 'iPhone 15, Vivo V30, Oppo Reno 11', 'silicone-case', 'Soft silicone cover with microfiber lining and bold Gen Z colors.', ['Pink', 'Lavender', 'Mint'], 'In stock', 'Apple'],
  ['FK004', 'Urban Grip Vegan Leather Case', 'Mobile Covers', 1199, 1699, 4.9, 'Premium', 'iPhone Pro, Samsung Ultra', 'leather-case', 'Slim vegan leather finish with metallic buttons and clean texture.', ['Tan', 'Black'], 'In stock', 'Apple'],
  ['FK005', 'AirFlex Transparent Android Cover', 'Mobile Covers', 499, 699, 4.5, 'Launch Offer', 'Xiaomi, Realme, Vivo, Oppo', 'clear-case', 'Flexible transparent case for everyday drop and scratch protection.', ['Clear'], 'In stock', 'Android'],
  ['FK006', 'GripLoop Strap Case', 'Mobile Covers', 799, 1099, 4.6, 'New Drop', 'Nothing Phone 2a, OnePlus 12', 'strap-case', 'Clear case with wrist strap loop for metro, college and travel.', ['Clear', 'Blue'], 'In stock', 'OnePlus'],
  ['FK007', 'Carbon Edge Slim Case', 'Mobile Covers', 999, 1399, 4.7, 'Premium', 'Samsung S24, iPhone 16', 'carbon-case', 'Minimal carbon texture with strong corner protection.', ['Graphite'], 'In stock', 'Samsung'],
  ['FK008', 'CrystalShield Screen Guard', 'Tempered Glass', 399, 599, 4.8, 'Best Seller', 'All major models', 'tempered-glass', 'Bubble-free 9H screen protection fitted by a trained FoneKart expert.', ['Clear'], 'In stock', 'Universal'],
  ['FK009', 'ShieldPro Ceramic Screen Guard', 'Tempered Glass', 649, 899, 4.7, 'Premium', 'iPhone, Samsung, OnePlus', 'ceramic-glass', 'Smooth-touch screen protector with high clarity and oleophobic coating.', ['Clear'], 'In stock', 'Universal'],
  ['FK010', 'Clear Guard Screen Pack of 2', 'Tempered Glass', 499, 799, 4.5, 'Combo Deal', 'Redmi, Realme, Vivo', 'glass-pack', 'Two reliable screen guards for family phones and spares.', ['Clear'], 'In stock', 'Android'],
  ['FK011', 'EdgeGuard Curved Screen Protector', 'Tempered Glass', 799, 1199, 4.6, 'Premium', 'Samsung Ultra, OnePlus curved displays', 'uv-glass', 'Curved edge screen protector with professional UV fitting support.', ['Clear'], 'Limited stock', 'Samsung'],
  ['FK012', 'Stealth Privacy Shield', 'Privacy Glass', 799, 1099, 4.8, 'Trending', 'iPhone, Samsung, Pixel', 'privacy-glass', 'Side-angle privacy layer for metro, office and travel use.', ['Black'], 'In stock', 'Universal'],
  ['FK013', 'Privacy Shield Pro', 'Privacy Glass', 999, 1499, 4.9, 'Premium', 'iPhone Pro series', 'privacy-pro', 'Premium privacy screen guard with edge-to-edge coverage and smooth scrolling.', ['Black'], 'In stock', 'Apple'],
  ['FK014', 'Office Privacy Screen Guard', 'Privacy Glass', 749, 999, 4.6, 'Best Seller', 'Samsung A55, OnePlus, Vivo', 'privacy-android', 'Clean privacy shield for work calls, metro travel and public spaces.', ['Black'], 'In stock', 'Android'],
  ['FK015', 'Lens Shield Pro Camera Guard', 'Camera Lens Protectors', 349, 499, 4.7, 'Launch Offer', 'iPhone 14/15/16', 'lens-guard', 'Metal ring lens shield that keeps camera bump looking premium.', ['Silver', 'Black', 'Gold'], 'In stock', 'Apple'],
  ['FK016', 'Lens Shield Ultra', 'Camera Lens Protectors', 449, 699, 4.8, 'Best Seller', 'Samsung Ultra, iPhone Pro', 'lens-crystal', 'High-transparency camera shield with scratch-resistant coating.', ['Clear', 'Black'], 'In stock', 'Samsung'],
  ['FK017', 'iPad Folio Slim Cover', 'iPad/Tablet Covers', 1499, 2199, 4.8, 'Premium', 'iPad Air/Pro', 'ipad-folio', 'Minimal folio with stand modes for study, OTT and work calls.', ['Navy', 'Black', 'Sage'], 'In stock', 'Apple'],
  ['FK018', 'Tablet Kids Shield Case', 'iPad/Tablet Covers', 999, 1499, 4.5, 'New Drop', 'Samsung Tab, iPad', 'tablet-kids', 'Shock absorbing tablet cover with hand grip and kickstand.', ['Orange', 'Blue'], 'In stock', 'Samsung'],
  ['FK019', 'Magnetic Pencil iPad Cover', 'iPad/Tablet Covers', 1799, 2499, 4.7, 'Trending', 'iPad 10th Gen, iPad Air', 'ipad-pencil', 'Folio case with pencil holder and magnetic sleep-wake support.', ['Gray', 'Lilac'], 'In stock', 'Apple'],
  ['FK020', 'Apple Watch Loop Strap', 'Smartwatch Straps', 699, 999, 4.8, 'Trending', 'Apple Watch 41-49mm', 'watch-loop', 'Soft loop strap in fresh weekly colors with secure closure.', ['Mint', 'Blue', 'Black'], 'In stock', 'Apple'],
  ['FK021', 'SportFlex Silicone Strap', 'Smartwatch Straps', 499, 799, 4.7, 'Best Seller', 'Apple, Samsung, Noise', 'sport-strap', 'Sweat-ready silicone strap for gym, office and daily wear.', ['Blue', 'Black', 'Orange'], 'In stock', 'Universal'],
  ['FK022', 'Milanese Metal Watch Strap', 'Smartwatch Straps', 999, 1499, 4.9, 'Premium', 'Apple Watch', 'metal-strap', 'Premium mesh strap with magnetic fit and dressy finish.', ['Graphite', 'Silver'], 'In stock', 'Apple'],
  ['FK023', 'Trail Nylon Smartwatch Strap', 'Smartwatch Straps', 799, 1199, 4.6, 'New Drop', 'Apple, Galaxy Watch', 'nylon-strap', 'Breathable nylon strap for travel, workouts and daily use.', ['Olive', 'Black'], 'In stock', 'Universal'],
  ['FK024', 'FoldMate Laptop Stand', 'Laptop Accessories', 1299, 1899, 4.8, 'Best Seller', 'MacBook, Windows laptops', 'laptop-stand', 'Foldable aluminum stand for cleaner desks and better posture.', ['Silver'], 'In stock', 'Universal'],
  ['FK025', 'DeskFlow Cable Organizer Kit', 'Laptop Accessories', 399, 599, 4.6, 'New Drop', 'All laptops', 'desk-kit', 'Minimal clips and sleeves to make your desk instantly calmer.', ['White', 'Black'], 'In stock', 'Universal'],
  ['FK026', 'USB-C Hub 6-in-1', 'Laptop Accessories', 1799, 2499, 4.7, 'Premium', 'MacBook, Type-C laptops', 'usb-hub', 'Slim hub with HDMI, USB, card reader and Type-C pass-through.', ['Space Gray'], 'In stock', 'Universal'],
  ['FK027', 'Nano 33W Fast Charger', 'Chargers', 999, 1499, 4.7, 'Launch Offer', 'Android, iPhone USB-C', 'charger-33w', 'Compact fast charge essential with stable output for everyday use.', ['White', 'Black'], 'In stock', 'Universal'],
  ['FK028', 'GaN 65W Pocket Charger', 'Chargers', 1999, 2999, 4.9, 'Premium', 'Phones, tablets, laptops', 'gan-charger', 'Travel-friendly GaN charger for phone, iPad and laptop charging.', ['Black', 'White'], 'In stock', 'Universal'],
  ['FK029', 'DriveCharge Dual Port Charger', 'Chargers', 799, 1199, 4.5, 'Trending', 'Cars and cabs', 'car-charger', 'Fast dual-port charger for office drives and weekend trips.', ['Black'], 'In stock', 'Universal'],
  ['FK030', 'Fast Sync Braided Type-C Cable', 'Cables', 349, 499, 4.8, 'Best Seller', 'USB-C devices', 'braided-cable', 'Tangle-free braided cable tested for daily fast charging.', ['Orange', 'Black', 'White'], 'In stock', 'Universal'],
  ['FK031', 'Everyday Power Lightning Cable', 'Cables', 449, 699, 4.6, 'Trending', 'iPhone Lightning models', 'lightning-cable', 'Reinforced cable with clean white finish and strong connectors.', ['White'], 'In stock', 'Apple'],
  ['FK032', 'MagLink 3-in-1 Power Cable', 'Cables', 599, 899, 4.5, 'Combo Deal', 'USB-C, Lightning, Micro USB', 'multi-cable', 'One travel cable for family devices, bags and office drawers.', ['Black'], 'In stock', 'Universal'],
  ['FK033', 'Fast Sync 100W Type-C Cable', 'Cables', 699, 999, 4.7, 'Premium', 'Laptops, tablets, phones', 'c-cable', 'High-speed 100W cable for laptop and phone charging.', ['Black', 'White'], 'In stock', 'Universal'],
  ['FK034', 'MagFlow 10000 Slim Power Bank', 'Power Banks', 1499, 2199, 4.8, 'Best Seller', 'Phones and earbuds', 'powerpod', 'Slim portable power bank with dual output and premium texture.', ['Blue', 'Black'], 'In stock', 'Universal'],
  ['FK035', 'Travel Power 20000 Bank', 'Power Banks', 2499, 3499, 4.7, 'Premium', 'Phones, tablets', 'travelmax', 'High-capacity travel power with LED battery status and fast output.', ['Beige', 'Black'], 'In stock', 'Universal'],
  ['FK036', 'MagSnap Wireless Travel Power', 'Power Banks', 2299, 3299, 4.6, 'New Drop', 'MagSafe iPhones', 'magsnap-bank', 'Wireless magnetic power bank for iPhone commute and travel.', ['White', 'Purple'], 'In stock', 'Apple'],
  ['FK037', 'MagSafe Wallet Stand', 'Lifestyle Tech', 899, 1299, 4.7, 'Trending', 'MagSafe phones and cases', 'wallet-stand', 'Snap-on wallet that doubles as a stand for reels and calls.', ['Purple', 'Black'], 'In stock', 'Apple'],
  ['FK038', 'Mini Bluetooth Tracker Tag', 'Lifestyle Tech', 1199, 1699, 4.6, 'New Drop', 'Bags, keys, luggage', 'tracker-tag', 'Compact tracker tag for daily carry and travel essentials.', ['Sky', 'White'], 'In stock', 'Universal'],
  ['FK039', 'Phone Cleaning Care Kit', 'Lifestyle Tech', 299, 449, 4.5, 'Launch Offer', 'All devices', 'cleaning-kit', 'Pocket cleaning kit for glass, ports, earbuds and camera lenses.', ['White'], 'In stock', 'Universal'],
  ['FK040', 'Premium Device Combo Box', 'Lifestyle Tech', 1799, 2499, 4.8, 'Combo Deal', 'iPhone and Android', 'combo-box', 'Cover, glass, cable and cleaning kit packed as a gifting-ready box.', ['Mixed'], 'In stock', 'Universal']
];

const products = rawProducts.map((p) => ({
  id: p[0],
  name: p[1],
  category: p[2],
  price: p[3],
  mrp: p[4],
  rating: p[5],
  badge: p[6],
  device: p[7],
  visual: p[8],
  description: p[9],
  colors: p[10],
  stock: p[11],
  brand: p[12],
  discount: Math.round((1 - p[3] / p[4]) * 100)
}));

const kits = [
  { id: 'KIT1', name: 'Starter Protection Kit', price: 649, mrp: 999, badge: 'Starter', visual: 'kit-basic', desc: 'CrystalShield screen guard + Lens Shield', benefits: ['Bubble-free fitting', 'Camera scratch protection', 'Great for new phones'] },
  { id: 'KIT2', name: 'CrystalShield Combo', price: 999, mrp: 1499, badge: 'Most picked', visual: 'kit-style', desc: 'Premium cover + CrystalShield screen guard', benefits: ['Try cover options at home', '9H screen guard included', 'Pay after service'] },
  { id: 'KIT3', name: 'Privacy Pro Kit', price: 1149, mrp: 1699, badge: 'Office friendly', visual: 'kit-privacy', desc: 'Privacy Shield + Lens Shield', benefits: ['Side-angle privacy', 'Lens protection', 'Professional fitting'] },
  { id: 'KIT4', name: 'MagSafe Essential Kit', price: 1999, mrp: 2999, badge: 'Premium', visual: 'kit-iphone', desc: 'MagSafe clear case + Privacy Shield + Lens Shield', benefits: ['MagSafe-ready cover', 'Privacy Shield', 'Metal lens rings'] },
  { id: 'KIT5', name: 'Workday Tech Kit', price: 2999, mrp: 4199, badge: 'Desk setup', visual: 'kit-work', desc: 'Laptop stand + fast sync cable + charger', benefits: ['Better desk posture', 'Fast charging', 'Clean cable setup'] }
];

const state = {
  page: 'home',
  category: 'All',
  query: '',
  price: 'All',
  brand: 'All',
  color: 'All',
  trendingFilter: 'Best Sellers',
  selected: products[0],
  detailColor: products[0].colors[0],
  detailQty: 1,
  gallery: 0,
  selectorBrand: 'Apple',
  selectorModel: 'iPhone 16',
  coupon: '',
  couponApplied: false,
  cart: []
};

const app = document.getElementById('root');
const rupees = (value) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
const whatsappText = encodeURIComponent('Hi FoneKart, I want to book home installation for phone accessories.');
const imageBase = 'https://images.unsplash.com/';
const photoBank = {
  hero: `${imageBase}photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=1400&q=85`,
  lifestyle: `${imageBase}photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1100&q=85`,
  install: `${imageBase}photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85`,
  store: `${imageBase}photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1100&q=85`,
  desk: `${imageBase}photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1100&q=85`,
  phone: `${imageBase}photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=900&q=82`,
  screen: `${imageBase}photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=900&q=82`,
  watch: `${imageBase}photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=900&q=82`,
  charger: `${imageBase}photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=900&q=82`,
  power: `${imageBase}photo-1609592806596-b43bada2f7ed?auto=format&fit=crop&w=900&q=82`,
  laptop: `${imageBase}photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=82`,
  cable: `${imageBase}photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=82`,
  ipad: `${imageBase}photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=82`,
  kit: `${imageBase}photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=82`
};
const visualPhotos = {
  'iphone-clear': photoBank.phone,
  'samsung-matte': `${imageBase}photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=82`,
  'silicone-case': `${imageBase}photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=900&q=82`,
  'leather-case': photoBank.lifestyle,
  'clear-case': photoBank.phone,
  'strap-case': photoBank.lifestyle,
  'carbon-case': `${imageBase}photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=82`,
  'tempered-glass': photoBank.screen,
  'ceramic-glass': photoBank.screen,
  'glass-pack': photoBank.screen,
  'uv-glass': photoBank.screen,
  'privacy-glass': `${imageBase}photo-1556656793-08538906a9f8?auto=format&fit=crop&w=900&q=82`,
  'privacy-pro': `${imageBase}photo-1556656793-08538906a9f8?auto=format&fit=crop&w=900&q=82`,
  'privacy-android': `${imageBase}photo-1556656793-08538906a9f8?auto=format&fit=crop&w=900&q=82`,
  'lens-guard': `${imageBase}photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=82`,
  'lens-crystal': `${imageBase}photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=82`,
  'ipad-folio': photoBank.ipad,
  'tablet-kids': photoBank.ipad,
  'ipad-pencil': photoBank.ipad,
  'watch-loop': photoBank.watch,
  'sport-strap': photoBank.watch,
  'metal-strap': photoBank.watch,
  'nylon-strap': photoBank.watch,
  'laptop-stand': photoBank.laptop,
  'desk-kit': photoBank.desk,
  'usb-hub': photoBank.desk,
  'charger-33w': photoBank.charger,
  'gan-charger': photoBank.charger,
  'car-charger': photoBank.charger,
  'braided-cable': photoBank.cable,
  'lightning-cable': photoBank.cable,
  'multi-cable': photoBank.cable,
  'c-cable': photoBank.cable,
  'powerpod': photoBank.power,
  'travelmax': photoBank.power,
  'magsnap-bank': photoBank.power,
  'wallet-stand': photoBank.phone,
  'tracker-tag': photoBank.desk,
  'cleaning-kit': photoBank.screen,
  'combo-box': photoBank.kit,
  'kit-basic': photoBank.screen,
  'kit-style': photoBank.phone,
  'kit-privacy': `${imageBase}photo-1556656793-08538906a9f8?auto=format&fit=crop&w=900&q=82`,
  'kit-iphone': photoBank.phone,
  'kit-work': photoBank.desk
};
const displayCategory = (category) => categoryDisplay[category] || category;
const imageFor = (item) => visualPhotos[item.visual] || visualPhotos[String(item.visual || '').replace(/-(angle|pack)$/, '')] || photoBank.phone;
const photo = (item, className = 'photo-card') => `<div class="${className}" style="background-image:url('${imageFor(item)}')"><span>${item.badge || displayCategory(item.category || '')}</span></div>`;

const iconPaths = {
  spark: '<path d="M12 2l1.7 5.2L19 9l-5.3 1.8L12 16l-1.7-5.2L5 9l5.3-1.8L12 2z"/><path d="M5 15l.8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8L5 15z"/>',
  check: '<path d="M20 6L9 17l-5-5"/>',
  arrow: '<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  bag: '<path d="M6 8h12l-1 12H7L6 8z"/><path d="M9 8a3 3 0 0 1 6 0"/>',
  menu: '<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>',
  heart: '<path d="M20.8 8.6c0 5-8.8 10.4-8.8 10.4S3.2 13.6 3.2 8.6A4.6 4.6 0 0 1 12 6a4.6 4.6 0 0 1 8.8 2.6z"/>',
  star: '<path d="M12 3l2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3z"/>',
  tile: '<rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/>',
  calendar: '<rect x="4" y="5" width="16" height="15" rx="3"/><path d="M8 3v4"/><path d="M16 3v4"/><path d="M4 10h16"/>',
  truck: '<path d="M3 7h11v9H3z"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
  watch: '<rect x="8" y="7" width="8" height="10" rx="3"/><path d="M9 7l1-4h4l1 4"/><path d="M9 17l1 4h4l1-4"/>',
  pin: '<path d="M12 21s7-5.4 7-12a7 7 0 0 0-14 0c0 6.6 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
  insta: '<rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.5"/><path d="M17 7.5h.01"/>',
  filter: '<path d="M4 6h16"/><path d="M7 12h10"/><path d="M10 18h4"/>',
  clock: '<circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/>',
  phone: '<rect x="7" y="3" width="10" height="18" rx="3"/><path d="M11 18h2"/>',
  store: '<path d="M4 10h16l-1.5-5h-13L4 10z"/><path d="M6 10v10h12V10"/><path d="M9 20v-6h6v6"/>',
  card: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 10h18"/>',
  shield: '<path d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6l7-3z"/>',
  whatsapp: '<path d="M5 19l1-3a7 7 0 1 1 3 3l-4 1z"/><path d="M9 9c.6 2 2 3.5 4 4l1-1"/>'
};
const icon = (name) => `<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name] || iconPaths.check}</svg>`;

function go(page, data = {}) {
  state.page = page;
  if (data.category) state.category = data.category;
  if (data.product) {
    state.selected = data.product;
    state.detailColor = data.product.colors[0];
    state.detailQty = 1;
    state.gallery = 0;
  }
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function addToCart(productOrId, qty = 1, color) {
  const product = typeof productOrId === 'string' ? products.find((item) => item.id === productOrId) : productOrId;
  if (!product) return;
  const itemId = `${product.id}-${color || product.colors?.[0] || 'Default'}`;
  const existing = state.cart.find((item) => item.itemId === itemId);
  if (existing) existing.qty += qty;
  else state.cart.push({ ...product, itemId, color: color || product.colors?.[0] || 'Default', qty });
  render();
}

function updateQty(itemId, qty) {
  const item = state.cart.find((entry) => entry.itemId === itemId);
  if (!item) return;
  item.qty = qty;
  state.cart = state.cart.filter((entry) => entry.qty > 0);
  render();
}

function cartTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const fitting = state.cart.some((item) => ['Tempered Glass', 'Privacy Glass', 'Camera Lens Protectors'].includes(item.category)) ? 99 : 0;
  const delivery = subtotal > 999 || subtotal === 0 ? 0 : 49;
  const discount = state.couponApplied ? Math.min(250, Math.round(subtotal * 0.1)) : 0;
  return { subtotal, fitting, delivery, discount, total: Math.max(0, subtotal + fitting + delivery - discount) };
}

function visual(product, size = '') {
  const visualName = product.visual || 'combo-box';
  return `<div class="product-visual ${size} visual-${visualName}">
    <div class="mock-device"><span></span><b></b><i></i></div>
    <div class="mock-accessory"></div>
    <div class="mini-chip">${product.colors?.[0] || product.badge}</div>
  </div>`;
}

function header() {
  const count = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const nav = ['Covers', 'Screen Guards', 'iPhone', 'Android', 'Watch Straps', 'iPad', 'Laptop', 'Book Installation', 'Store'];
  return `<div class="announcement">${icon('spark')} Opening offer - Curated Cases, Screen Guards and Accessories now available with home fitting.</div>
  <header class="site-header">
    <button class="logo" data-go="home"><span>F</span> FoneKart</button>
    <nav class="desktop-nav">${nav.map((item) => `<button data-nav="${item}">${item}</button>`).join('')}</nav>
    <div class="header-actions">
      <a class="whatsapp-pill" href="https://wa.me/919999999999?text=${whatsappText}">${icon('whatsapp')} WhatsApp</a>
      <button class="icon-button" data-go="shop" aria-label="Search">${icon('search')}</button>
      <button class="cart-button" data-go="cart" aria-label="Cart">${icon('bag')}${count ? `<span>${count}</span>` : ''}</button>
      <button class="icon-button mobile-only" data-menu aria-label="Menu">${icon('menu')}</button>
    </div>
  </header>`;
}

function hero() {
  return `<section class="hero fk-hero-v3">
    <div class="hero-copy reveal">
      <p class="eyebrow">Noida's curated accessories + home fitting</p>
      <h1>Upgrade your phone. Protect it beautifully.</h1>
      <p>Curated mobile accessories, premium screen protection and doorstep fitting in Noida / NCR.</p>
      <div class="hero-actions"><button class="primary" data-go="shop">Shop Accessories ${icon('arrow')}</button><button class="secondary" data-go="installation">Book Home Installation</button></div>
      <div class="mini-proof"><span>${icon('shield')} Bubble-free fitting</span><span>${icon('truck')} Same-day Noida slots</span><span>${icon('check')} Pay after service</span><span>${icon('spark')} Curated premium accessories</span></div>
    </div>
    <div class="hero-photo-board reveal delay">
      <div class="hero-photo main" style="background-image:url('${photoBank.hero}')"><span>AeroShield case collection</span></div>
      <div class="hero-photo service" style="background-image:url('${photoBank.install}')"><span>Expert home installation</span></div>
      <div class="hero-photo product" style="background-image:url('${photoBank.watch}')"><span>Watch straps and essentials</span></div>
      <div class="hero-floating-card"><strong>FoneKart home service</strong><p>Choose accessories at home. Get screen guards fitted cleanly. Pay after service.</p></div>
    </div>
  </section>`;
}

function modelSelector() {
  return `<section class="model-selector section-tight">
    <div><p class="eyebrow">Device finder</p><h2>Find accessories for your phone</h2><p>Select your phone brand and model to instantly browse matching cases, screen guards, privacy shields and protection kits.</p></div>
    <div class="selector-panel">
      <label><span>Select Brand</span><select data-state="selectorBrand">${phoneBrands.map((brand) => `<option ${state.selectorBrand === brand ? 'selected' : ''}>${brand}</option>`).join('')}</select></label>
      <label><span>Select Model</span><select data-state="selectorModel">${phoneModels.map((model) => `<option ${state.selectorModel === model ? 'selected' : ''}>${model}</option>`).join('')}</select></label>
      <button class="primary" data-compatible>Show compatible accessories</button>
    </div>
  </section>`;
}

function trustBar() {
  return `<section class="trust-bar">${['Professional fitting', 'Same-day Noida slots', 'Bubble-free installation', 'Easy exchange', 'Pay after service'].map((item) => `<div>${icon('check')} ${item}</div>`).join('')}</section>`;
}

function categoryCards() {
  const descriptions = {
    'Mobile Covers': 'MagSafe clear, matte armor and premium cases',
    'Tempered Glass': 'CrystalShield screen guards with expert fitting',
    'Privacy Glass': 'Privacy Shield for metro, office and travel',
    'Camera Lens Protectors': 'Lens Shield for premium camera bumps',
    'iPad/Tablet Covers': 'Slim folio and work-ready tablet covers',
    'Smartwatch Straps': 'Premium strap collection with fresh drops',
    'Laptop Accessories': 'Desk stands, hubs and organizers',
    Chargers: 'Nano chargers and fast charge essentials',
    Cables: 'Everyday power and fast sync cables',
    'Power Banks': 'Travel power for commute and weekends'
  };
  const categoryPhoto = {
    'Mobile Covers': visualPhotos['iphone-clear'],
    'Tempered Glass': photoBank.screen,
    'Privacy Glass': visualPhotos['privacy-glass'],
    'Camera Lens Protectors': visualPhotos['lens-guard'],
    'iPad/Tablet Covers': photoBank.ipad,
    'Smartwatch Straps': photoBank.watch,
    'Laptop Accessories': photoBank.desk,
    Chargers: photoBank.charger,
    Cables: photoBank.cable,
    'Power Banks': photoBank.power
  };
  return `<section class="section premium-category-section"><div class="section-heading"><p class="eyebrow">Shop by category</p><h2>Premium protection and power, curated for your device.</h2></div>
    <div class="category-grid photo-cats">${categories.map((cat) => `<button class="category-card photo-category reveal" data-category="${cat}">
      <div class="category-photo" style="background-image:url('${categoryPhoto[cat]}')"></div>
      <span>${displayCategory(cat)}</span><p>${descriptions[cat]}</p>${icon('arrow')}
    </button>`).join('')}</div></section>`;
}

function kitsSection() {
  return `<section class="section soft-section kit-showcase"><div class="section-heading inline"><div><p class="eyebrow">Curated combos</p><h2>Protection kits that feel ready, not random.</h2></div><button class="text-link" data-go="kit">Explore kits ${icon('arrow')}</button></div>
    <div class="kit-grid">${kits.map(kitCard).join('')}</div></section>`;
}

function kitCard(kit) {
  return `<article class="kit-card reveal">
    ${photo({ visual: kit.visual, badge: kit.badge }, 'kit-photo')}
    <span class="badge">${kit.badge}</span><h3>${kit.name}</h3><p>${kit.desc}</p>
    <ul>${kit.benefits.map((point) => `<li>${icon('check')} ${point}</li>`).join('')}</ul>
    <div class="price-line"><strong>${rupees(kit.price)}</strong><s>${rupees(kit.mrp)}</s></div>
    <div class="dual-actions"><button data-go="kit">View</button><button data-add-kit="${kit.id}">Add to cart</button></div>
  </article>`;
}

function installationBand() {
  const steps = ['Select your device', 'Book a slot', 'Try accessories at home', 'Get professional fitting', 'Pay after service'];
  return `<section class="installation-band install-v3">
    <div class="install-photo" style="background-image:url('${photoBank.install}')"><span>Expert fitting at your doorstep</span></div>
    <div><p class="eyebrow">Home installation</p><h2>Book a device accessories expert at home.</h2><p>Get the confidence of an outlet, the convenience of home, and professional fitting for Screen Guards, Privacy Shield and Lens Shield.</p><button class="primary" data-go="installation">Book Installation ${icon('calendar')}</button></div>
    <ol>${steps.map((step, index) => `<li><span>${index + 1}</span>${step}</li>`).join('')}</ol>
  </section>`;
}

function trending() {
  const tabs = ['iPhone', 'Samsung', 'OnePlus', 'Under ₹499', 'Premium', 'New Drops', 'Best Sellers'];
  const filtered = products.filter((p) => {
    if (state.trendingFilter === 'Under ₹499') return p.price < 500;
    if (state.trendingFilter === 'Premium') return p.badge === 'Premium';
    if (state.trendingFilter === 'New Drops') return p.badge === 'New Drop';
    if (state.trendingFilter === 'Best Sellers') return p.badge === 'Best Seller' || p.badge === 'Trending';
    return p.device.includes(state.trendingFilter) || p.brand === state.trendingFilter;
  }).slice(0, 8);
  return `<section class="section"><div class="section-heading inline"><div><p class="eyebrow">Trending in Noida</p><h2>Fast-moving picks for new phones and fresh setups.</h2></div><button class="text-link" data-go="shop">View shop ${icon('arrow')}</button></div>
    <div class="chip-row">${tabs.map((tab) => `<button class="${tab === state.trendingFilter ? 'active' : ''}" data-trending="${tab}">${tab}</button>`).join('')}</div>
    <div class="product-grid">${filtered.map(productCard).join('')}</div></section>`;
}

function why() {
  return `<section class="section compare-section why-v3"><div class="section-heading"><p class="eyebrow">Why FoneKart</p><h2>Curated quality, expert fitting and local support in one flow.</h2></div><div class="compare-grid">
    ${[['Local shops', 'Random quality, rushed fitting and inconsistent pricing'], ['Marketplaces', 'Wide range, but no one helps you fit or choose'], ['Quick commerce', 'Fast for basics, limited for premium device matches'], ['FoneKart', 'Curated accessories + expert home fitting + Noida support']].map((row) => `<div class="${row[0] === 'FoneKart' ? 'winner' : ''}"><strong>${row[0]}</strong><p>${row[1]}</p></div>`).join('')}</div></section>`;
}

function testimonials() {
  const reviews = [
    ['Aarav, Sector 137', 'Perfect glass fitting, no bubbles. The expert cleaned the phone properly and aligned it better than any local shop I tried.'],
    ['Megha, Indirapuram', 'Loved the premium covers. They brought 4-5 options for my iPhone and I paid only after choosing.'],
    ['Riya, Noida Extension', 'Home service was super convenient. I booked a slot after office and got privacy glass fitted at home.']
  ];
  return `<section class="section testimonials testimonials-v3"><div class="section-heading"><p class="eyebrow">Verified customers</p><h2>Real convenience, cleaner fitting, better accessories.</h2></div>${reviews.map((review) => `<article><div>${icon('star')}${icon('star')}${icon('star')}${icon('star')}${icon('star')}</div><p>"${review[1]}"</p><span>${review[0]} - Verified customer</span></article>`).join('')}</section>`;
}

function drops() {
  return `<section class="section social-drops"><div class="section-heading inline"><div><p class="eyebrow">Shoppable social wall</p><h2>New drops every week</h2></div><button class="text-link">${icon('insta')} Follow @fonekart</button></div><div class="drops-grid">${products.slice(0, 8).map((p) => `<div class="drop-card">${photo(p, 'drop-photo')}<span>${p.name}</span><small>${p.badge}</small></div>`).join('')}</div></section>`;
}

function storePreview() {
  return `<section class="store-section store-v3"><div><p class="eyebrow">First outlet</p><h2>Visit our first outlet in Noida</h2><p>FoneKart Experience Store, Sector XX Market, Noida, Uttar Pradesh. Open 11:00 AM - 9:30 PM.</p><div class="store-actions"><button class="primary" data-go="store">Visit Store ${icon('pin')}</button><a class="secondary" href="https://wa.me/919999999999?text=${whatsappText}">WhatsApp</a></div></div><div class="store-photo" style="background-image:url('${photoBank.store}')"><span>FoneKart Noida experience outlet</span></div></section>`;
}

function productCard(product) {
  return `<article class="product-card reveal">
    <button class="wish" aria-label="Save product">${icon('heart')}</button>${photo(product, 'product-photo')}
    <span class="badge">${product.badge}</span>
    <button class="product-title" data-product="${product.id}">${product.name}</button>
    <p>${displayCategory(product.category)} - ${product.device}</p><div class="rating">${icon('star')} ${product.rating}</div>
    <div class="price-line"><strong>${rupees(product.price)}</strong><s>${rupees(product.mrp)}</s><em>${product.discount}% off</em></div>
    <div class="card-bottom"><span>${product.stock}</span><button data-add="${product.id}">Add</button></div>
  </article>`;
}

function home() {
  return `${hero()}${modelSelector()}${trustBar()}${categoryCards()}${kitsSection()}${installationBand()}${trending()}${why()}${testimonials()}${drops()}${storePreview()}`;
}

function shop() {
  const filtered = products.filter((p) => {
    const q = `${p.name} ${p.device} ${p.category} ${p.brand}`.toLowerCase();
    const priceMatch = state.price === 'All' || (state.price === 'Under 500' ? p.price < 500 : state.price === '500-999' ? p.price >= 500 && p.price <= 999 : p.price > 999);
    return (state.category === 'All' || p.category === state.category) && (!state.query || q.includes(state.query.toLowerCase())) && (state.brand === 'All' || p.brand === state.brand) && (state.color === 'All' || p.colors.includes(state.color)) && priceMatch;
  });
  return `<section class="shop-page"><div class="shop-hero"><p class="eyebrow">FoneKart shop</p><h1>Search your phone model and build your protection kit.</h1><div class="search-bar">${icon('search')}<input id="searchInput" value="${state.query}" placeholder="Search your phone model"></div></div>
    <div class="shop-layout"><aside class="filters"><h3>${icon('filter')} Filters</h3>${filter('Category', 'category', ['All', ...categories])}${filter('Price', 'price', ['All', 'Under 500', '500-999', '1000+'])}${filter('Brand', 'brand', ['All', ...phoneBrands, 'Universal'])}${filter('Color', 'color', ['All', 'Clear', 'Black', 'White', 'Blue', 'Pink', 'Orange', 'Purple', 'Tan', 'Graphite'])}</aside>
    <div><div class="results-header"><strong>${filtered.length} products</strong><span>Curated for NCR delivery, pickup and fitting</span></div><div class="product-grid">${filtered.map(productCard).join('')}</div></div></div></section>`;
}

function filter(label, key, options) {
  return `<label class="filter-field"><span>${label}</span><select data-state="${key}">${options.map((o) => `<option value="${o}" ${state[key] === o ? 'selected' : ''}>${key === 'category' && o !== 'All' ? displayCategory(o) : o}</option>`).join('')}</select></label>`;
}

function categoryPage() {
  const items = products.filter((p) => state.category === 'All' || p.category === state.category);
  return `<section class="section"><div class="category-page-head"><div><p class="eyebrow">Category</p><h1>${state.category === 'All' ? 'All FoneKart accessories' : displayCategory(state.category)}</h1><p>Premium but affordable picks, ready for retail pickup, home delivery or doorstep fitting.</p></div><button class="secondary" data-go="installation">Book fitting</button></div><div class="chip-row">${['All', ...categories].map((cat) => `<button class="${cat === state.category ? 'active' : ''}" data-category="${cat}">${cat === 'All' ? 'All' : displayCategory(cat)}</button>`).join('')}</div><div class="product-grid">${items.map(productCard).join('')}</div></section>`;
}

function productPage() {
  const p = state.selected;
  const recommended = products.filter((item) => item.category !== p.category && (item.brand === p.brand || item.brand === 'Universal')).slice(0, 3);
  const gallery = [p, { ...p, visual: `${p.visual}-angle`, colors: [state.detailColor] }, { ...p, visual: `${p.visual}-pack`, colors: ['Pack'] }];
  return `<section class="product-detail deep-detail">
    <div class="gallery-wrap">
      <div class="main-gallery">${photo(gallery[state.gallery] || p, 'detail-photo')}</div>
      <div class="thumb-row">${gallery.map((item, index) => `<button class="${index === state.gallery ? 'active' : ''}" data-gallery="${index}">${photo(item, 'thumb-photo')}</button>`).join('')}</div>
    </div>
    <div class="detail-copy"><span class="badge">${p.badge}</span><h1>${p.name}</h1><p>${p.description}</p>
      <div class="detail-meta"><span>${icon('star')} ${p.rating}</span><span>${p.stock}</span><span>${displayCategory(p.category)}</span><span>${p.device}</span></div>
      <div class="detail-price-row"><strong>${rupees(p.price)}</strong><s>${rupees(p.mrp)}</s><em>${p.discount}% off</em></div>
      <div class="option-block"><span>Color</span><div class="color-row">${p.colors.map((color) => `<button class="${color === state.detailColor ? 'active' : ''}" data-color="${color}">${color}</button>`).join('')}</div></div>
      <div class="option-block"><span>Quantity</span><div class="qty detail-qty"><button data-detail-qty="-1">-</button><b>${state.detailQty}</b><button data-detail-qty="1">+</button></div></div>
      <div class="detail-actions"><button class="primary" data-add-detail>Add to Cart ${icon('bag')}</button><button class="secondary" data-go="installation">Book fitting at home</button><a class="secondary" href="https://wa.me/919999999999?text=${encodeURIComponent(`Hi FoneKart, I want to ask about ${p.name}.`)}">Ask on WhatsApp</a></div>
      <div class="accordion-grid"><article><h3>Product details</h3><p>${p.description} Compatible with ${p.device}. Available colors: ${p.colors.join(', ')}.</p></article><article><h3>Warranty details</h3><p>7-day exchange for manufacturing defects. Fast charge essentials, cables and travel power include brand warranty placeholder.</p></article><article><h3>Return policy</h3><p>Unused accessories can be exchanged as per FoneKart policy. Fitted Screen Guards, Privacy Shield and Lens Shield are covered for installation issues at the time of service.</p></article></div>
    </div>
    <section class="section recommended-detail"><div class="section-heading inline"><h2>Recommended combos</h2><button class="text-link" data-go="kit">View kits ${icon('arrow')}</button></div><div class="product-grid">${recommended.map(productCard).join('')}</div></section>
  </section>`;
}

function installationPage() {
  return `<section class="form-page installation-page"><div><p class="eyebrow">Doorstep fitting</p><h1>Book a device accessories expert at home.</h1><p>Our expert brings selected covers, glass and accessories to your doorstep, helps you choose, and fits it professionally.</p><div class="promise-list">${['Select your device', 'Book a slot', 'Try accessories at home', 'Get professional fitting', 'Pay after service'].map((i) => `<span>${icon('check')} ${i}</span>`).join('')}</div><div class="note-card">Currently serving selected locations in Noida, Greater Noida West, Indirapuram and nearby areas.</div></div>
    <form class="booking-form">${['Name', 'Mobile number', 'WhatsApp number', 'Society/location', 'Pin code'].map((f) => `<input placeholder="${f}">`).join('')}${selectField('Device brand', phoneBrands)}${selectField('Device model', phoneModels)}${selectField('Product needed', ['Screen Guard', 'Privacy Shield', 'Lens Shield', 'Premium Cover', 'Full protection kit', 'Other accessories'])}<input type="date" placeholder="Preferred date">${selectField('Preferred time slot', timeSlots)}<textarea placeholder="Notes"></textarea><button class="primary">Submit booking request ${icon('arrow')}</button></form></section>`;
}

function selectField(label, options) {
  return `<label class="plain-select"><span>${label}</span><select>${options.map((option) => `<option>${option}</option>`).join('')}</select></label>`;
}

function kitPage() {
  return `<section class="section"><div class="category-page-head"><div><p class="eyebrow">Protection kits</p><h1>Bundle the essentials for your device.</h1><p>Curated combos for new phones, office privacy, travel, gifting and desk setups.</p></div><button class="secondary" data-go="installation">Book kit at home</button></div><div class="kit-grid large">${kits.map(kitCard).join('')}</div></section>`;
}

function cartPage() {
  const totals = cartTotals();
  return `<section class="cart-page"><div><p class="eyebrow">Cart</p><h1>Your FoneKart bag</h1>${state.cart.length ? state.cart.map((item) => `<article class="cart-item">${photo(item, 'cart-photo')}<div><strong>${item.name}</strong><span>${displayCategory(item.category)} - ${item.color}</span></div><div class="qty"><button data-qty="${item.itemId}" data-value="${item.qty - 1}">-</button><span>${item.qty}</span><button data-qty="${item.itemId}" data-value="${item.qty + 1}">+</button></div><strong>${rupees(item.price * item.qty)}</strong><button class="remove-link" data-qty="${item.itemId}" data-value="0">Remove</button></article>`).join('') : '<p>Your cart is empty. Add a kit or search your device model.</p>'}</div>${summary(totals, true)}</section>`;
}

function summary(totals, withCoupon = false) {
  return `<aside class="summary"><h2>Order summary</h2>${withCoupon ? `<label class="coupon"><span>Coupon code</span><div><input id="couponInput" value="${state.coupon}" placeholder="Try LAUNCH10"><button data-coupon>Apply</button></div></label>` : ''}<p>Subtotal <strong>${rupees(totals.subtotal)}</strong></p><p>Delivery <strong>${totals.delivery ? rupees(totals.delivery) : 'Free'}</strong></p><p>Fitting charge <strong>${totals.fitting ? rupees(totals.fitting) : 'Not added'}</strong></p><p>Coupon discount <strong>-${rupees(totals.discount)}</strong></p><p class="total">Total <strong>${rupees(totals.total)}</strong></p><button class="primary" data-go="checkout" ${state.cart.length ? '' : 'disabled'}>Proceed to checkout ${icon('card')}</button><button class="secondary" data-go="installation">Add home installation</button></aside>`;
}

function checkout() {
  const totals = cartTotals();
  // Razorpay integration placeholder:
  // Add the Razorpay Checkout script and public key when going live.
  // Create payment orders on your backend, then verify razorpay_payment_id,
  // razorpay_order_id and razorpay_signature on the backend before marking paid.
  return `<section class="checkout-page"><div><p class="eyebrow">Checkout</p><h1>Delivery and payment details</h1><form class="booking-form checkout-form">${['Customer name', 'Mobile number', 'Email', 'Address', 'Landmark', 'Pin code'].map((f) => `<input placeholder="${f}">`).join('')}<div class="radio-grid"><span>Delivery option</span>${['Store pickup', 'Home delivery', 'Home delivery + installation'].map((o, i) => `<label><input name="delivery" type="radio" ${i === 2 ? 'checked' : ''}> ${o}</label>`).join('')}</div><div class="radio-grid"><span>Payment option</span>${['UPI', 'Card', 'Net banking', 'Cash on delivery', 'Pay after installation'].map((o, i) => `<label><input name="payment" type="radio" ${i === 4 ? 'checked' : ''}> ${o}</label>`).join('')}</div><div class="razorpay-box"><strong>Razorpay payment gateway placeholder</strong><p>Add the Razorpay checkout key here and verify payment on your backend before confirming paid orders.</p></div><button class="primary">Place order request</button></form></div>${summary(totals)}</section>
  <!-- Razorpay integration placeholder:
    1. Add Razorpay Checkout script in index.html when going live.
    2. Create an order on your backend and pass the real order_id here.
    3. Use a public Razorpay key only in frontend. Never expose key_secret.
    4. Verify razorpay_payment_id, razorpay_order_id and razorpay_signature on backend before marking payment successful.
  -->`;
}

function storePage() {
  return `<section class="contact-page"><div><p class="eyebrow">Store Location</p><h1>Visit our first outlet in Noida.</h1><p>FoneKart Experience Store, Sector XX Market, Noida, Uttar Pradesh.</p><div class="contact-list"><span>${icon('clock')} 11:00 AM - 9:30 PM, all days</span><span>${icon('phone')} +91 99999 99999</span><span>${icon('pin')} Selected Noida, Greater Noida West and Indirapuram service zones</span></div><div class="store-actions"><a class="primary" href="https://wa.me/919999999999?text=${whatsappText}">WhatsApp store</a><button class="secondary" data-go="installation">Book installation</button></div></div><div class="map-placeholder tall">${icon('store')}<strong>Google Maps placeholder</strong><span>Noida / Delhi NCR</span></div></section>`;
}

function about() {
  return `<section class="about-page"><p class="eyebrow">About FoneKart</p><h1>Premium mobile lifestyle accessories, made easier for India.</h1><p>FoneKart starts in Noida/Delhi NCR with a simple belief: phone accessories should feel stylish, trustworthy and convenient. We curate covers, glass, chargers, straps and desk accessories, then make them available through our store, slot-based delivery and home installation.</p><div class="stats"><div><strong>40+</strong><span>Launch products</span></div><div><strong>5-step</strong><span>Home fitting flow</span></div><div><strong>NCR</strong><span>First market</span></div></div></section>`;
}

function warranty() {
  return `<section class="about-page policy-page"><p class="eyebrow">Warranty & Returns</p><h1>Clear policies for a local, trusted accessory brand.</h1><div class="policy-grid"><article><h3>Easy exchange</h3><p>Unused products in original condition can be exchanged within 7 days. Keep the invoice or order confirmation handy.</p></article><article><h3>Fitting assurance</h3><p>If glass fitting has visible bubbles or alignment issues during service, the expert will correct it before completion.</p></article><article><h3>Accessory warranty</h3><p>Chargers, cables and power banks carry brand warranty placeholder. Final terms can be configured before launch.</p></article><article><h3>Returns</h3><p>Fitted tempered glass, privacy glass and lens protectors are not returnable after successful installation unless defective.</p></article></div></section>`;
}

function contact() {
  return `<section class="contact-page"><div><p class="eyebrow">Contact</p><h1>Talk to FoneKart.</h1><p>Need help choosing a case, finding your model, or booking installation? Message us and our Noida team will help.</p><div class="contact-list"><span>${icon('phone')} +91 8800825975</span><span>${icon('insta')} @fonekart</span><span>${icon('store')} hello@fonekart.in</span></div><div class="store-actions"><a class="primary" href="https://wa.me/918800825975?text=${whatsappText}">Chat on WhatsApp</a><button class="secondary" data-go="store">Store location</button></div></div><form class="booking-form"><input placeholder="Name"><input placeholder="Mobile number"><input placeholder="Email"><textarea placeholder="Message"></textarea><button class="primary">Send message</button></form></section>`;
}

function footer() {
  return `<a class="whatsapp" href="https://wa.me/918800825975?text=${whatsappText}">${icon('whatsapp')} WhatsApp</a>
  <footer><div><button class="logo footer-logo" data-go="home"><span>F</span> FoneKart</button><p>Style your phone. Protect it better.</p></div>
  <div><h4>Shop categories</h4>${['Mobile Covers', 'Tempered Glass', 'Privacy Glass', 'Smartwatch Straps', 'Power Banks'].map((i) => `<button data-category="${i}">${displayCategory(i)}</button>`).join('')}</div>
  <div><h4>Customer care</h4><button data-go="installation">Book installation</button><button data-go="warranty">Warranty policy</button><button data-go="warranty">Return policy</button><button data-go="about">About Us</button><button data-go="contact">Contact</button></div>
  <div><h4>Contact</h4><span>WhatsApp: +91 8800825975</span><span>Instagram: @fonekart</span><span>Email: hello@fonekart.in</span><span>Store: Sector XX, Noida</span></div></footer>`;
}

function page() {
  return ({
    home,
    shop,
    category: categoryPage,
    product: productPage,
    installation: installationPage,
    kit: kitPage,
    cart: cartPage,
    checkout,
    store: storePage,
    about,
    warranty,
    contact
  }[state.page] || home)();
}

function render() {
  app.innerHTML = `${header()}<main>${page()}</main>${footer()}`;
  bind();
}

function bind() {
  document.querySelectorAll('[data-go]').forEach((el) => el.addEventListener('click', () => go(el.dataset.go)));
  document.querySelectorAll('[data-category]').forEach((el) => el.addEventListener('click', () => go('category', { category: el.dataset.category })));
  document.querySelectorAll('[data-product]').forEach((el) => el.addEventListener('click', () => go('product', { product: products.find((p) => p.id === el.dataset.product) })));
  document.querySelectorAll('[data-add]').forEach((el) => el.addEventListener('click', () => addToCart(el.dataset.add)));
  document.querySelectorAll('[data-add-kit]').forEach((el) => el.addEventListener('click', () => {
    const kit = kits.find((item) => item.id === el.dataset.addKit);
    addToCart({ id: kit.id, name: kit.name, category: 'Protection Kits', price: kit.price, mrp: kit.mrp, rating: 4.8, badge: kit.badge, device: 'Custom bundle', visual: kit.visual, description: kit.desc, colors: ['Bundle'], stock: 'In stock', brand: 'Universal', discount: Math.round((1 - kit.price / kit.mrp) * 100) }, 1, 'Bundle');
  }));
  document.querySelectorAll('[data-qty]').forEach((el) => el.addEventListener('click', () => updateQty(el.dataset.qty, Number(el.dataset.value))));
  document.querySelectorAll('[data-state]').forEach((el) => el.addEventListener('change', () => { state[el.dataset.state] = el.value; render(); }));
  document.querySelectorAll('[data-trending]').forEach((el) => el.addEventListener('click', () => { state.trendingFilter = el.dataset.trending; render(); }));
  document.querySelectorAll('[data-gallery]').forEach((el) => el.addEventListener('click', () => { state.gallery = Number(el.dataset.gallery); render(); }));
  document.querySelectorAll('[data-color]').forEach((el) => el.addEventListener('click', () => { state.detailColor = el.dataset.color; render(); }));
  document.querySelectorAll('[data-detail-qty]').forEach((el) => el.addEventListener('click', () => { state.detailQty = Math.max(1, state.detailQty + Number(el.dataset.detailQty)); render(); }));
  const addDetail = document.querySelector('[data-add-detail]');
  if (addDetail) addDetail.addEventListener('click', () => addToCart(state.selected, state.detailQty, state.detailColor));
  const compatible = document.querySelector('[data-compatible]');
  if (compatible) compatible.addEventListener('click', () => { state.query = `${state.selectorBrand} ${state.selectorModel}`; state.category = 'All'; go('shop'); });
  const search = document.getElementById('searchInput');
  if (search) search.addEventListener('input', (event) => { state.query = event.target.value; render(); document.getElementById('searchInput')?.focus(); });
  const coupon = document.getElementById('couponInput');
  if (coupon) coupon.addEventListener('input', (event) => { state.coupon = event.target.value; });
  const couponButton = document.querySelector('[data-coupon]');
  if (couponButton) couponButton.addEventListener('click', () => { state.couponApplied = state.coupon.trim().toUpperCase() === 'LAUNCH10'; render(); });
  document.querySelectorAll('[data-nav]').forEach((el) => el.addEventListener('click', () => {
    const item = el.dataset.nav;
    const map = { Covers: 'Mobile Covers', 'Screen Guards': 'Tempered Glass', 'Watch Straps': 'Smartwatch Straps', iPad: 'iPad/Tablet Covers', Laptop: 'Laptop Accessories' };
    if (item === 'Book Installation') go('installation');
    else if (item === 'Store') go('store');
    else go('category', { category: map[item] || 'All' });
  }));
  const menu = document.querySelector('[data-menu]');
  if (menu) menu.addEventListener('click', () => {
    const existing = document.querySelector('.mobile-nav');
    if (existing) existing.remove();
    else document.querySelector('.site-header').insertAdjacentHTML('beforeend', `<nav class="mobile-nav">${['Covers', 'Screen Guards', 'iPhone', 'Android', 'Watch Straps', 'iPad', 'Laptop', 'Book Installation', 'Store', 'About'].map((i) => `<button data-mobile-nav="${i}">${i}</button>`).join('')}</nav>`);
    document.querySelectorAll('[data-mobile-nav]').forEach((el) => el.addEventListener('click', () => {
      const item = el.dataset.mobileNav;
      if (item === 'Book Installation') go('installation');
      else if (item === 'Store') go('store');
      else if (item === 'About') go('about');
      else go('shop');
    }));
  });
  document.querySelectorAll('form').forEach((form) => form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button.primary');
    if (button) button.textContent = 'Request received';
  }));
}

render();
