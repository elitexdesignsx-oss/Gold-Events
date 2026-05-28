import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import type { Product } from '../../data/products';
import { whatsappUrl } from '../../data/brand';
import { ButtonAnchor, ButtonLink } from '../ui/Button';
import MediaFrame from '../ui/MediaFrame';
import Modal from '../ui/Modal';
import Tag from '../ui/Tag';

export default function ProductModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const { language } = useLanguage();

  return (
    <Modal open={Boolean(product)} onClose={onClose} labelledBy="product-modal-title">
      {product ? (
        <div className="product-modal">
          <MediaFrame src={product.images[0]} label={product.name[language]} className="product-modal-media" />
          <div className="product-modal-copy">
            <span className="eyebrow">{product.category}</span>
            <h2 id="product-modal-title">{product.name[language]}</h2>
            <p>{product.description[language]}</p>
            <div className="product-modal-tags">
              {product.occasion.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
              {product.theme.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
            <strong>{product.priceRange}</strong>
            <div className="product-modal-actions">
              <ButtonAnchor
                variant="primary"
                href={whatsappUrl(`Bonjour Gold Events, je souhaite commander: ${product.name.fr}`)}
                target="_blank"
                rel="noreferrer"
                icon={<MessageCircle size={16} />}
              >
                WhatsApp
              </ButtonAnchor>
              <ButtonLink to={`/catalog/${product.id}`}>Détails</ButtonLink>
            </div>
          </div>
        </div>
      ) : null}
    </Modal>
  );
}
