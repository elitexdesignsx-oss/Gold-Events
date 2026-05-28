import { SlidersHorizontal } from 'lucide-react';
import { categoryLabels, occasions, productThemes, type ProductCategory } from '../../data/products';

export type CatalogFilters = {
  category: string;
  occasion: string;
  theme: string;
  maxPrice: number;
};

export default function FilterBar({
  filters,
  onChange,
}: {
  filters: CatalogFilters;
  onChange: (filters: CatalogFilters) => void;
}) {
  const categories = Object.keys(categoryLabels) as ProductCategory[];

  return (
    <aside className="filter-bar glass-card">
      <h2>
        <SlidersHorizontal size={18} /> Filtres
      </h2>
      <label>
        Catégorie
        <select value={filters.category} onChange={(event) => onChange({ ...filters, category: event.target.value })}>
          <option value="">Tout</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {categoryLabels[item]}
            </option>
          ))}
        </select>
      </label>
      <label>
        Occasion
        <select value={filters.occasion} onChange={(event) => onChange({ ...filters, occasion: event.target.value })}>
          <option value="">Tout</option>
          {occasions.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <label>
        Thème
        <select value={filters.theme} onChange={(event) => onChange({ ...filters, theme: event.target.value })}>
          <option value="">Tout</option>
          {productThemes.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <label>
        Budget maximum: {filters.maxPrice} MAD
        <input
          type="range"
          min="20"
          max="1800"
          step="10"
          value={filters.maxPrice}
          onChange={(event) => onChange({ ...filters, maxPrice: Number(event.target.value) })}
        />
      </label>
    </aside>
  );
}
