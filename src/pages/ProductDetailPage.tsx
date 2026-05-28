import { MessageCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../data/products';
import { whatsappUrl } from '../data/brand';
import { ButtonAnchor } from '../components/ui/Button';
import MediaFrame from '../components/ui/MediaFrame';
import Tag from '../components/ui/Tag';

export default function ProductDetailPage() {
  const { id } = useParams();
  const { language } = useLanguage();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <section className="page">
        <div data-nav-sentinel className="page-sentinel" />
        <div className="container-luxe page-hero">
          <h1 className="section-title">Création introuvable</h1>
          <Link className="btn btn-primary" to="/catalog">Retour collection</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page product-detail-page">
      <div data-nav-sentinel className="page-sentinel" />
      <div className="container-luxe product-detail">
        <MediaFrame src={product.images[0]} label={product.name[language]} className="product-detail-media" />
        <div className="product-detail-copy">
          <span className="eyebrow">{product.category}</span>
          <h1 className="section-title">{product.name[language]}</h1>
          <p className="section-copy">{product.description[language]}</p>
          <div className="product-modal-tags">
            {product.occasion.map((item) => <Tag key={item}>{item}</Tag>)}
            {product.theme.map((item) => <Tag key={item}>{item}</Tag>)}
          </div>
          <strong>{product.priceRange}</strong>
          <ButtonAnchor
            variant="primary"
            href={whatsappUrl(`Bonjour Gold Events, je souhaite une proposition pour: ${product.name.fr}`)}
            target="_blank"
            rel="noreferrer"
            icon={<MessageCircle size={17} />}
          >
            Demander ce modèle
          </ButtonAnchor>
        </div>
      </div>
    </section>
  );
}
