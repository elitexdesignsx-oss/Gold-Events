import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import GalleryGrid from '../components/gallery/GalleryGrid';
import LightboxViewer from '../components/gallery/LightboxViewer';
import OccasionTabs from '../components/gallery/OccasionTabs';
import { galleryItems, galleryTabs, type GalleryTab } from '../data/gallery';

export default function GalleryPage() {
  const { t } = useTranslation();
  const [active, setActive] = useState<GalleryTab>('Mariages');
  const [selected, setSelected] = useState<number | null>(null);
  const items = useMemo(() => galleryItems.filter((item) => item.tab === active), [active]);

  return (
    <section className="page gallery-page">
      <div data-nav-sentinel className="page-sentinel" />
      <div className="container-luxe page-hero">
        <span className="eyebrow">Portfolio</span>
        <h1 className="section-title">{t('gallery.title')}</h1>
        <p className="section-copy">{t('gallery.subtitle')}</p>
      </div>
      <div className="container-luxe">
        <OccasionTabs tabs={galleryTabs} active={active} onChange={setActive} />
        <GalleryGrid items={items} onSelect={setSelected} />
      </div>
      <LightboxViewer items={items} index={selected} onClose={() => setSelected(null)} onNavigate={setSelected} />
    </section>
  );
}
