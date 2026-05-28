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

export function resolveAsset(src?: string) {
  if (!src) return undefined;
  if (!src.startsWith('/assets/highlights/')) return src;

  const exactKey = src.replace('/assets', '.');
  if (highlightModules[exactKey]) return highlightModules[exactKey];

  const parts = src.split('/');
  const folder = parts[3];
  const fallback = Object.entries(highlightModules).find(([key]) => key.includes(`/highlights/${folder}/`));
  return fallback?.[1] ?? pickFromImages(folder, src);
}

export function resolveHeroAsset() {
  return pickFromImages('decoration', 'gold-events-hero') ?? pickFromImages('bougies', 'gold-events-hero');
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

  return [...new Set([...ordered, ...discovered])];
}

export function resolveFolderShowcase() {
  return folderOrder
    .map((folder) => {
      const src = firstFromFolder(folder);
      return src ? { key: folder, label: folderLabels[folder] ?? folder, src } : undefined;
    })
    .filter((item): item is { key: string; label: string; src: string } => Boolean(item));
}
