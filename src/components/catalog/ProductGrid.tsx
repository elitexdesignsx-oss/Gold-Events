import { useSearchParams } from 'react-router-dom';
import type { Product } from '../../data/products';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

export default function ProductGrid({ products }: { products: Product[] }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selected = products.find((product) => product.id === searchParams.get('quick')) ?? null;
  const close = () => {
    const next = new URLSearchParams(searchParams);
    next.delete('quick');
    setSearchParams(next, { replace: true });
  };

  return (
    <>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="reveal is-visible" style={{ transitionDelay: `${index * 45}ms` }} key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <ProductModal product={selected} onClose={close} />
    </>
  );
}
