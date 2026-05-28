import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FilterBar, { type CatalogFilters } from '../components/catalog/FilterBar';
import ProductGrid from '../components/catalog/ProductGrid';
import { products } from '../data/products';

export default function CatalogPage() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState<CatalogFilters>({
    category: searchParams.get('category') ?? '',
    occasion: '',
    theme: '',
    maxPrice: 1800,
  });

  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        if (filters.category && product.category !== filters.category) return false;
        if (filters.occasion && !product.occasion.includes(filters.occasion)) return false;
        if (filters.theme && !product.theme.includes(filters.theme)) return false;
        return product.priceMax <= filters.maxPrice;
      }),
    [filters],
  );

  return (
    <section className="page catalog-page">
      <div data-nav-sentinel className="page-sentinel" />
      <div className="container-luxe page-hero">
        <span className="eyebrow">Gold Events</span>
        <h1 className="section-title">{t('catalog.title')}</h1>
        <p className="section-copy">{t('catalog.subtitle')}</p>
      </div>
      <div className="container-luxe catalog-layout">
        <FilterBar filters={filters} onChange={setFilters} />
        <ProductGrid products={filteredProducts} />
      </div>
    </section>
  );
}
