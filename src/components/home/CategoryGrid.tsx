import { Link } from 'react-router-dom';
import { highlights } from '../../data/highlights';
import MediaFrame from '../ui/MediaFrame';

export default function CategoryGrid() {
  return (
    <section className="category-strip section-pad">
      <div className="container-luxe">
        <div className="highlight-grid">
          {highlights.map((item) => (
            <div
              key={item.key}
            >
              <Link className="highlight-item" to={`/catalog?category=${item.catalogCategory}`}>
                <MediaFrame src={`/assets/highlights/${item.key}/cover.jpg`} label={item.label} rounded className="highlight-thumb" />
                <span>{item.label}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
