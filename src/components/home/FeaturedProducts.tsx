import { useTranslation } from 'react-i18next';
import { products } from '../../data/products';
import Divider from '../ui/Divider';
import ProductGrid from '../catalog/ProductGrid';

export default function FeaturedProducts() {
  const { t } = useTranslation();
  const featured = products.filter((product) => product.featured).slice(0, 6);

  return (
    <section className="featured section-pad">
      <div className="container-luxe">
        <div className="section-heading">
          <span className="eyebrow">Gold Events</span>
          <h2 className="section-title">{t('home.creations')}</h2>
          <Divider />
        </div>
        <ProductGrid products={featured} />
      </div>
    </section>
  );
}
