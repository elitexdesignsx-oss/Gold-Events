export type GalleryTab = 'Mariages' | 'Henna' | 'Fiançailles' | 'Omra' | 'Anniversaires' | 'Tables';

export type GalleryItem = {
  id: string;
  tab: GalleryTab;
  caption: string;
  location: string;
  image: string;
};

const tabs: GalleryTab[] = ['Mariages', 'Henna', 'Fiançailles', 'Omra', 'Anniversaires', 'Tables'];

export const galleryItems: GalleryItem[] = tabs.flatMap((tab, tabIndex) =>
  Array.from({ length: tab === 'Mariages' || tab === 'Henna' ? 6 : 5 }, (_, index) => ({
    id: `${tab.toLowerCase()}-${index + 1}`,
    tab,
    caption:
      tab === 'Tables'
        ? `Table signature ${index + 1}`
        : `${tab} · Collection ${index + 1}`,
    location: index % 2 === 0 ? 'Marrakech' : 'Casablanca',
    image: `/assets/highlights/${['dragee', 'bougies', 'sachets', 'bracelets', 'preparation', 'carte-personnalisee'][tabIndex]}/gallery-${index + 1}.jpg`,
  })),
);

export const galleryTabs = tabs;
