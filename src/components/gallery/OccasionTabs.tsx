import type { GalleryTab } from '../../data/gallery';

export default function OccasionTabs({
  tabs,
  active,
  onChange,
}: {
  tabs: GalleryTab[];
  active: GalleryTab;
  onChange: (tab: GalleryTab) => void;
}) {
  return (
    <div className="occasion-tabs" role="tablist" aria-label="Gallery occasions">
      {tabs.map((tab) => (
        <button key={tab} type="button" className={active === tab ? 'is-active' : ''} onClick={() => onChange(tab)} role="tab">
          {tab}
        </button>
      ))}
    </div>
  );
}
