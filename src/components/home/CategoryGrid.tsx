import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { highlights } from '../../data/highlights';
import MediaFrame from '../ui/MediaFrame';

export default function CategoryGrid() {
  return (
    <section className="category-strip section-pad">
      <div className="container-luxe">
        <div className="highlight-grid">
          {highlights.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.05 }}
            >
              <Link className="highlight-item" to={`/catalog?category=${item.catalogCategory}`}>
                <MediaFrame src={`/assets/highlights/${item.key}/cover.jpg`} label={item.label} rounded className="highlight-thumb" />
                <span>{item.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
