import type { GalleryItem } from '../../data/gallery';
import MediaFrame from '../ui/MediaFrame';

export default function GalleryGrid({
  items,
  onSelect,
}: {
  items: GalleryItem[];
  onSelect: (index: number) => void;
}) {
  return (
    <div className="gallery-grid">
      {items.map((item, index) => (
        <button key={item.id} type="button" className="gallery-tile" onClick={() => onSelect(index)}>
          <MediaFrame src={item.image} label={item.caption} />
          <span>{item.caption}</span>
        </button>
      ))}
    </div>
  );
}
