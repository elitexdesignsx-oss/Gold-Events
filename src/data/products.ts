import type { Language } from '../context/LanguageContext';

export type ProductCategory =
  | 'bougies'
  | 'cartes'
  | 'dragees'
  | 'sachets'
  | 'bracelets'
  | 'henna'
  | 'omra'
  | 'decoration';

export type Product = {
  id: string;
  name: Record<Language, string>;
  category: ProductCategory;
  occasion: string[];
  theme: string[];
  priceRange: string;
  priceMax: number;
  customizable: boolean;
  featured: boolean;
  images: string[];
  description: Record<Language, string>;
};

const descriptions: Record<Language, string> = {
  fr: 'Une creation personnalisee, preparee a Marrakech avec finitions soignees et presentation premium.',
  ar: 'تصميم شخصي يحضر في مراكش بتفاصيل أنيقة وتغليف راق.',
  en: 'A personalized creation prepared in Marrakech with refined finishing and premium presentation.',
};

type ProductTuple = [
  string,
  string,
  string,
  string,
  ProductCategory,
  string[],
  string[],
  string,
  number,
  boolean,
  boolean,
];

const seeds: ProductTuple[] = [
  ['candle-rose', 'Bougie Rose Poudree', 'شمعة وردية ناعمة', 'Powder Rose Candle', 'bougies', ['Mariage', 'Fiançailles'], ['Rose', 'Ivoire'], '25-45 MAD', 45, true, true],
  ['candle-gold', 'Bougie Signature Doree', 'شمعة ذهبية فاخرة', 'Golden Signature Candle', 'bougies', ['Mariage', 'Corporate'], ['Doré'], '30-55 MAD', 55, true, true],
  ['candle-marble', 'Bougie Marbre Blanc', 'شمعة رخامية بيضاء', 'White Marble Candle', 'bougies', ['Fiançailles'], ['Ivoire', 'Doré'], '28-50 MAD', 50, true, false],
  ['candle-henna', 'Bougie Nuit Henna', 'شمعة ليلة الحناء', 'Henna Night Candle', 'bougies', ['Henna'], ['Doré', 'Rose'], '24-42 MAD', 42, true, false],
  ['candle-mini', 'Mini Bougie Invite', 'شمعة صغيرة للضيوف', 'Mini Guest Candle', 'bougies', ['Anniversaire'], ['Bleu', 'Ivoire'], '18-35 MAD', 35, true, false],
  ['candle-perle', 'Bougie Perlee', 'شمعة باللؤلؤ', 'Pearled Candle', 'bougies', ['Mariage'], ['Ivoire'], '32-60 MAD', 60, true, true],
  ['card-vellum', 'Carte Vellum Or', 'بطاقة فخمة ذهبية', 'Gold Vellum Card', 'cartes', ['Mariage'], ['Doré'], '8-18 MAD', 18, true, true],
  ['card-atelier', 'Carte Atelier Ivoire', 'بطاقة عاجية', 'Atelier Ivory Card', 'cartes', ['Fiançailles'], ['Ivoire'], '7-16 MAD', 16, true, false],
  ['card-blue', 'Carte Bleu Majorelle', 'بطاقة زرقاء ماجوريل', 'Majorelle Blue Card', 'cartes', ['Corporate'], ['Bleu'], '9-20 MAD', 20, true, false],
  ['card-henna', 'Carte Henna Calligraphie', 'بطاقة حناء بالخط', 'Henna Calligraphy Card', 'cartes', ['Henna'], ['Doré', 'Rose'], '8-18 MAD', 18, true, false],
  ['card-table', 'Marque-Place Couture', 'بطاقة مكان فاخرة', 'Couture Place Card', 'cartes', ['Tables'], ['Ivoire'], '6-14 MAD', 14, true, true],
  ['card-omra', 'Carte Douaa Omra', 'بطاقة دعاء العمرة', 'Omra Prayer Card', 'cartes', ['Omra'], ['Doré', 'Ivoire'], '7-16 MAD', 16, true, false],
  ['dragee-box', 'Boite Dragees Or', 'علبة دراجي ذهبية', 'Gold Dragee Box', 'dragees', ['Mariage'], ['Doré'], '18-38 MAD', 38, true, true],
  ['dragee-glass', 'Tube Verre Dragees', 'أنبوب زجاجي للدراجي', 'Glass Dragee Tube', 'dragees', ['Fiançailles'], ['Ivoire'], '16-34 MAD', 34, true, false],
  ['dragee-satin', 'Pochette Satin Dragees', 'كيس ساتان للدراجي', 'Satin Dragee Pouch', 'dragees', ['Mariage'], ['Rose', 'Ivoire'], '14-30 MAD', 30, true, false],
  ['dragee-henna', 'Dragees Henna Dore', 'دراجي الحناء الذهبي', 'Golden Henna Dragees', 'dragees', ['Henna'], ['Doré'], '15-32 MAD', 32, true, false],
  ['dragee-coffret', 'Coffret Dragees Premium', 'صندوق دراجي فاخر', 'Premium Dragee Gift Box', 'dragees', ['Mariage', 'Corporate'], ['Doré', 'Ivoire'], '38-85 MAD', 85, true, true],
  ['dragee-floral', 'Dragees Ruban Floral', 'دراجي بشريط ورود', 'Floral Ribbon Dragees', 'dragees', ['Anniversaire'], ['Rose'], '14-28 MAD', 28, true, false],
  ['sachet-musk', 'Sachet Musc Ivoire', 'كيس مسك عاجي', 'Ivory Musk Sachet', 'sachets', ['Mariage'], ['Ivoire'], '16-36 MAD', 36, true, true],
  ['sachet-amber', 'Sachet Ambre Dore', 'كيس عنبر ذهبي', 'Golden Amber Sachet', 'sachets', ['Henna'], ['Doré'], '18-38 MAD', 38, true, false],
  ['sachet-lavande', 'Sachet Lavande Couture', 'كيس خزامى فاخر', 'Couture Lavender Sachet', 'sachets', ['Fiançailles'], ['Bleu', 'Ivoire'], '15-32 MAD', 32, true, false],
  ['sachet-rose', 'Sachet Rose Brode', 'كيس ورد مطرز', 'Embroidered Rose Sachet', 'sachets', ['Mariage'], ['Rose'], '18-40 MAD', 40, true, true],
  ['sachet-omra', 'Sachet Omra Blanc', 'كيس عمرة أبيض', 'White Omra Sachet', 'sachets', ['Omra'], ['Ivoire'], '14-30 MAD', 30, true, false],
  ['bracelet-pearl', 'Bracelet Perle Invitee', 'سوار لؤلؤ للضيفة', 'Guest Pearl Bracelet', 'bracelets', ['Mariage'], ['Ivoire'], '20-44 MAD', 44, true, true],
  ['bracelet-gold', 'Bracelet Fil Dore', 'سوار خيط ذهبي', 'Golden Thread Bracelet', 'bracelets', ['Fiançailles'], ['Doré'], '18-40 MAD', 40, true, false],
  ['bracelet-blue', 'Bracelet Bleu Chance', 'سوار أزرق للحظ', 'Blue Blessing Bracelet', 'bracelets', ['Henna'], ['Bleu'], '18-38 MAD', 38, true, false],
  ['bracelet-rose', 'Bracelet Rose Nacre', 'سوار وردي بالصدف', 'Rose Nacre Bracelet', 'bracelets', ['Anniversaire'], ['Rose'], '20-42 MAD', 42, true, false],
  ['bracelet-couple', 'Duo Bracelet Couple', 'سواران للعروسين', 'Couple Bracelet Duo', 'bracelets', ['Mariage'], ['Doré', 'Ivoire'], '45-90 MAD', 90, true, true],
  ['henna-mirror', 'Miroir Henna Dore', 'مرآة حناء ذهبية', 'Golden Henna Mirror', 'henna', ['Henna'], ['Doré'], '22-48 MAD', 48, true, true],
  ['henna-tray', 'Plateau Henna Signature', 'صينية حناء فاخرة', 'Signature Henna Tray', 'henna', ['Henna'], ['Doré', 'Rose'], '180-420 MAD', 420, true, false],
  ['henna-fan', 'Eventail Henna Brode', 'مروحة حناء مطرزة', 'Embroidered Henna Fan', 'henna', ['Henna'], ['Ivoire'], '18-36 MAD', 36, true, false],
  ['henna-mini', 'Mini Coffret Henna', 'صندوق حناء صغير', 'Mini Henna Box', 'henna', ['Henna'], ['Rose'], '35-75 MAD', 75, true, false],
  ['henna-label', 'Etiquette Henna Luxe', 'ملصق حناء فاخر', 'Luxury Henna Label', 'henna', ['Henna'], ['Doré'], '5-12 MAD', 12, true, false],
  ['omra-tasbih', 'Tasbih Omra Gift', 'سبحة هدية عمرة', 'Omra Tasbih Gift', 'omra', ['Omra'], ['Ivoire', 'Doré'], '22-48 MAD', 48, true, true],
  ['omra-box', 'Coffret Omra Douaa', 'صندوق دعاء العمرة', 'Omra Prayer Box', 'omra', ['Omra'], ['Doré'], '45-110 MAD', 110, true, false],
  ['omra-pouch', 'Pochette Omra Satin', 'كيس ساتان للعمرة', 'Satin Omra Pouch', 'omra', ['Omra'], ['Ivoire'], '18-38 MAD', 38, true, false],
  ['omra-water', 'Flacon Eau Zamzam', 'قارورة ماء زمزم', 'Zamzam Water Bottle', 'omra', ['Omra'], ['Ivoire', 'Bleu'], '16-34 MAD', 34, true, false],
  ['omra-card', 'Set Cartes Omra', 'مجموعة بطاقات عمرة', 'Omra Card Set', 'omra', ['Omra'], ['Doré'], '12-28 MAD', 28, true, false],
  ['decor-table', 'Set Table Doree', 'تنسيق طاولة ذهبي', 'Golden Table Set', 'decoration', ['Tables', 'Mariage'], ['Doré'], '350-900 MAD', 900, true, true],
  ['decor-floral', 'Centre Floral Ivoire', 'وسطية ورود عاجية', 'Ivory Floral Centerpiece', 'decoration', ['Mariage'], ['Ivoire'], '220-580 MAD', 580, true, false],
  ['decor-henna', 'Coin Henna Luxe', 'ركن حناء فاخر', 'Luxury Henna Corner', 'decoration', ['Henna'], ['Rose', 'Doré'], '650-1800 MAD', 1800, true, false],
  ['decor-corporate', 'Cadeau Corporate Table', 'هدايا شركات للطاولة', 'Corporate Gift Table', 'decoration', ['Corporate'], ['Bleu', 'Doré'], '420-1200 MAD', 1200, true, false],
  ['decor-entry', 'Accueil Invite Or', 'استقبال ضيوف ذهبي', 'Golden Guest Welcome', 'decoration', ['Mariage', 'Fiançailles'], ['Doré'], '480-1450 MAD', 1450, true, false],
];

export const products: Product[] = seeds.map(([id, fr, ar, en, category, occasion, theme, priceRange, priceMax, customizable, featured]) => ({
  id,
  name: { fr, ar, en },
  category,
  occasion,
  theme,
  priceRange,
  priceMax,
  customizable,
  featured,
  images: [`/assets/highlights/${category}/${id}.jpg`],
  description: descriptions,
}));

export const categoryLabels: Record<ProductCategory, string> = {
  bougies: 'Bougies',
  cartes: 'Cartes Perso',
  dragees: 'Dragées',
  sachets: 'Sachets',
  bracelets: 'Bracelets',
  henna: 'Henna Items',
  omra: 'Omra',
  decoration: 'Décoration',
};

export const occasions = ['Mariage', 'Fiançailles', 'Henna', 'Omra', 'Anniversaire', 'Corporate', 'Tables'];
export const productThemes = ['Doré', 'Ivoire', 'Rose', 'Bleu'];
