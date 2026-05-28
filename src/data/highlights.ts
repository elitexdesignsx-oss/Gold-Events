export type HighlightCategory = {
  key: string;
  label: string;
  catalogCategory: string;
};

export const highlights: HighlightCategory[] = [
  { key: 'bougies', label: 'Bougies', catalogCategory: 'bougies' },
  { key: 'carte-personnalisee', label: 'Carte Perso', catalogCategory: 'cartes' },
  { key: 'dragee', label: 'Dragée', catalogCategory: 'dragees' },
  { key: 'review', label: 'Review', catalogCategory: 'decoration' },
  { key: 'preparation', label: 'Préparation', catalogCategory: 'decoration' },
  { key: 'important', label: 'Important', catalogCategory: 'henna' },
  { key: 'sachets', label: 'Sachets', catalogCategory: 'sachets' },
  { key: 'bracelets', label: 'Bracelets', catalogCategory: 'bracelets' },
];
