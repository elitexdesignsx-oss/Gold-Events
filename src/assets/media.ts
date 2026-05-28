const highlightModules = import.meta.glob('./highlights/**/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const imageModules = import.meta.glob('../../Images/**/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const folderAliases: Record<string, string[]> = {
  bougies: ['Bougies'],
  bracelets: ['Bracelets', 'porte Clé'],
  cartes: ['Cartes personnalisée', 'Carte Table', 'Cartes Parfum'],
  'carte-personnalisee': ['Cartes personnalisée', 'Carte Table', 'Cartes Parfum'],
  dragees: ['Dragee'],
  dragee: ['Dragee'],
  sachets: ['Mbikhra', 'Plateaux'],
  henna: ['Plateaux', 'Mbikhra'],
  omra: ['Mbikhra', 'Plateaux'],
  decoration: ['Plateaux', 'Carte Table'],
  preparation: ['Plateaux', 'Bougies'],
  important: ['Mbikhra', 'porte Clé'],
  review: ['Cartes personnalisée', 'Bougies'],
};

const highlightAliases: Record<string, string[]> = {
  bougies: ['bougies'],
  bracelets: ['bracelets'],
  cartes: ['cartes', 'carte-personnalisee'],
  'carte-personnalisee': ['carte-personnalisee', 'cartes'],
  dragees: ['dragees', 'dragee'],
  dragee: ['dragee', 'dragees'],
  sachets: ['sachets'],
  henna: ['henna', 'important', 'preparation'],
  omra: ['omra', 'sachets', 'carte-personnalisee'],
  decoration: ['decoration', 'preparation', 'review'],
  preparation: ['preparation', 'decoration'],
  important: ['important', 'henna'],
  review: ['review', 'carte-personnalisee'],
};

const highlightLabels: Record<string, string> = {
  bougies: 'Bougies',
  bracelets: 'Bracelets',
  'carte-personnalisee': 'Cartes Perso',
  dragee: 'Dragées',
  sachets: 'Sachets',
  preparation: 'Préparation',
  important: 'Important',
  review: 'Review',
};

const folderOrder = [
  'Bougies',
  'Bracelets',
  'Carte Table',
  'Cartes Parfum',
  'Cartes personnalisée',
  'Dragee',
  'Mbikhra',
  'Plateaux',
  'porte Clé',
];

const folderLabels: Record<string, string> = {
  Bougies: 'Bougies',
  Bracelets: 'Bracelets',
  'Carte Table': 'Carte Table',
  'Cartes Parfum': 'Cartes Parfum',
  'Cartes personnalisée': 'Cartes Perso',
  Dragee: 'Dragées',
  Mbikhra: 'Mbikhra',
  Plateaux: 'Plateaux',
  'porte Clé': 'Porte Clé',
};

function hash(value: string) {
  return [...value].reduce((total, char) => total + char.charCodeAt(0), 0);
}

function pickFromImages(folder: string, seed: string) {
  const aliases = folderAliases[folder] ?? [folder];
  const candidates = Object.entries(imageModules)
    .filter(([key]) => aliases.some((alias) => key.includes(`/Images/${alias}/`)))
    .map(([, value]) => value);

  if (!candidates.length) return undefined;
  return candidates[hash(seed) % candidates.length];
}

function folderFromKey(key: string) {
  return key.match(/\/Images\/([^/]+)\//)?.[1];
}

function firstFromFolder(folder: string) {
  return Object.entries(imageModules).find(([key]) => key.includes(`/Images/${folder}/`))?.[1];
}

function highlightCandidates(folder: string) {
  const aliases = highlightAliases[folder] ?? [folder];
  return Object.entries(highlightModules)
    .filter(([key]) => aliases.some((alias) => key.includes(`/highlights/${alias}/`)))
    .map(([, value]) => value);
}

function firstFromHighlight(folder: string) {
  return highlightCandidates(folder)[0];
}

export function resolveAsset(src?: string) {
  if (!src) return undefined;
  if (!src.startsWith('/assets/highlights/')) return src;

  const exactKey = src.replace('/assets', '.');
  if (highlightModules[exactKey]) return highlightModules[exactKey];

  const parts = src.split('/');
  const folder = parts[3];
  const candidates = highlightCandidates(folder);
  return candidates[hash(src) % candidates.length] ?? pickFromImages(folder, src);
}

export function resolveHeroAsset() {
  return (
    pickFromImages('decoration', 'gold-events-hero') ??
    pickFromImages('bougies', 'gold-events-hero') ??
    firstFromHighlight('preparation') ??
    firstFromHighlight('bougies')
  );
}

export function resolveHeroSlides() {
  const seen = new Set<string>();

  const ordered = folderOrder
    .map((folder) => firstFromFolder(folder))
    .filter((value): value is string => Boolean(value));

  const discovered = Object.entries(imageModules)
    .map(([key, value]) => ({ folder: folderFromKey(key), value }))
    .filter(({ folder }) => folder && folder !== 'Logo')
    .filter(({ folder }) => {
      if (!folder || seen.has(folder)) return false;
      seen.add(folder);
      return true;
    })
    .map(({ value }) => value);

  const highlightSlides = Object.keys(highlightLabels)
    .map((folder) => firstFromHighlight(folder))
    .filter((value): value is string => Boolean(value));

  return [...new Set([...ordered, ...discovered, ...highlightSlides])];
}

export function resolveFolderShowcase() {
  const imageShowcase = folderOrder
    .map((folder) => {
      const src = firstFromFolder(folder);
      return src ? { key: folder, label: folderLabels[folder] ?? folder, src } : undefined;
    })
    .filter((item): item is { key: string; label: string; src: string } => Boolean(item));

  const highlightShowcase = Object.entries(highlightLabels)
    .map(([folder, label]) => {
      const src = firstFromHighlight(folder);
      return src ? { key: folder, label, src } : undefined;
    })
    .filter((item): item is { key: string; label: string; src: string } => Boolean(item));

  return [...imageShowcase, ...highlightShowcase];
}
