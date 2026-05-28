import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import type { GalleryItem } from '../../data/gallery';
import { whatsappUrl } from '../../data/brand';
import { ButtonAnchor } from '../ui/Button';
import MediaFrame from '../ui/MediaFrame';
import Modal from '../ui/Modal';

export default function LightboxViewer({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const item = index === null ? null : items[index];
  const previous = () => {
    if (index !== null) onNavigate((index - 1 + items.length) % items.length);
  };
  const next = () => {
    if (index !== null) onNavigate((index + 1) % items.length);
  };

  return (
    <Modal open={Boolean(item)} onClose={onClose}>
      {item ? (
        <div className="lightbox">
          <button className="icon-btn lightbox-nav previous" type="button" onClick={previous} aria-label="Previous">
            <ChevronLeft size={20} />
          </button>
          <MediaFrame src={item.image} label={item.caption} className="lightbox-media" />
          <button className="icon-btn lightbox-nav next" type="button" onClick={next} aria-label="Next">
            <ChevronRight size={20} />
          </button>
          <div className="lightbox-caption">
            <span className="eyebrow">{item.tab} · {item.location}</span>
            <h2>{item.caption}</h2>
            <ButtonAnchor
              variant="primary"
              href={whatsappUrl(`Bonjour Gold Events, je souhaite commander ce style: ${item.caption}`)}
              target="_blank"
              rel="noreferrer"
              icon={<MessageCircle size={16} />}
            >
              Commander ce style
            </ButtonAnchor>
          </div>
        </div>
      ) : null}
    </Modal>
  );
}
