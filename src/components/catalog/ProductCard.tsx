import { Eye, HeartHandshake } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import type { Product } from '../../data/products';
import Badge from '../ui/Badge';
import MediaFrame from '../ui/MediaFrame';

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  const { language } = useLanguage();
  const location = useLocation();
  const quickParams = new URLSearchParams(location.search);
  quickParams.set('quick', product.id);
  const quickViewTo = `${location.pathname}?${quickParams.toString()}`;

  return (
    <article className="product-card">
      <Link to={`/catalog/${product.id}`} className="product-media-link" aria-label={product.name[language]}>
        <MediaFrame src={product.images[0]} label={product.name[language]} className="product-media" />
      </Link>
      <div className="product-overlay">
        <Link to={quickViewTo} className="btn btn-primary">
          <Eye size={16} /> Voir
        </Link>
      </div>
      {product.customizable ? <Badge className="product-custom">Personnalisable</Badge> : null}
      <div className="product-body">
        <div>
          <h3>{product.name[language]}</h3>
          <p>{product.priceRange}</p>
        </div>
        <Link
          className="icon-btn"
          to={quickViewTo}
          aria-label="Ajouter à ma demande"
          title="Ajouter à ma demande"
        >
          <HeartHandshake size={18} />
        </Link>
      </div>
      <div className="product-tags">
        {product.occasion.slice(0, 2).map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </article>
  );
}
