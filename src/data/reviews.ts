export type Review = {
  id: number;
  name: string;
  occasion: string;
  text: string;
  stars: 5;
  location: string;
};

export const reviews: Review[] = [
  {
    id: 1,
    name: 'Fatima Zahra B.',
    occasion: 'Mariage',
    text: 'Des cadeaux absolument magnifiques, tous mes invités ont été impressionnés par la finition et la délicatesse.',
    stars: 5,
    location: 'Casablanca',
  },
  {
    id: 2,
    name: 'Meryem A.',
    occasion: 'Henna',
    text: 'كل شيء كان أنيق ومنظم، من الألوان حتى التغليف. فعلا حسيت أن المناسبة أصبحت أرقى.',
    stars: 5,
    location: 'Marrakech',
  },
  {
    id: 3,
    name: 'Salma R.',
    occasion: 'Fiançailles',
    text: 'Le rendu était encore plus beau que les inspirations envoyées. Une vraie touche couture.',
    stars: 5,
    location: 'Rabat',
  },
  {
    id: 4,
    name: 'Nora E.',
    occasion: 'Omra',
    text: 'هدايا العمرة كانت راقية ومؤثرة. التغليف نظيف والرسائل مطبوعة بجودة عالية.',
    stars: 5,
    location: 'Agadir',
  },
  {
    id: 5,
    name: 'Imane L.',
    occasion: 'Mariage',
    text: 'Livraison à temps, communication fluide, et chaque pièce était parfaitement personnalisée.',
    stars: 5,
    location: 'Tanger',
  },
  {
    id: 6,
    name: 'Aya M.',
    occasion: 'Anniversaire',
    text: 'Une équipe patiente et très raffinée. Les sachets parfumés ont eu un succès fou.',
    stars: 5,
    location: 'Marrakech',
  },
  {
    id: 7,
    name: 'Kenza H.',
    occasion: 'Henna',
    text: 'المرآة والشموع كانوا بنفس اللون الذي طلبته بالضبط. خدمة محترفة وذوق عالي.',
    stars: 5,
    location: 'Fès',
  },
  {
    id: 8,
    name: 'Sara O.',
    occasion: 'Corporate',
    text: 'Nous cherchions un cadeau élégant pour nos clientes VIP. Gold Events a compris l’image de marque immédiatement.',
    stars: 5,
    location: 'Casablanca',
  },
  {
    id: 9,
    name: 'Lina K.',
    occasion: 'Mariage',
    text: 'Les dragées et les bracelets étaient coordonnés à ma décoration. Tout semblait pensé ensemble.',
    stars: 5,
    location: 'Meknès',
  },
  {
    id: 10,
    name: 'Hajar T.',
    occasion: 'Fiançailles',
    text: 'تعامل راقي وتفاصيل فخمة. الضيوف سألوني كثيرا عن مصدر الهدايا.',
    stars: 5,
    location: 'Oujda',
  },
  {
    id: 11,
    name: 'Rania S.',
    occasion: 'Omra',
    text: 'Simple, chic et plein de sens. Les coffrets ont été préparés avec une grande attention.',
    stars: 5,
    location: 'El Jadida',
  },
  {
    id: 12,
    name: 'Yasmine D.',
    occasion: 'Tables',
    text: 'Le set de table doré a transformé la salle. Une esthétique très haut de gamme.',
    stars: 5,
    location: 'Marrakech',
  },
];
