import { Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { resolveFolderShowcase } from '../../assets/media';
import { INSTAGRAM_URL } from '../../data/brand';
import MediaFrame from '../ui/MediaFrame';

export default function InstagramFeed() {
  const { t } = useTranslation();
  const feed = resolveFolderShowcase();

  return (
    <section className="instagram-feed section-pad">
      <div className="container-luxe">
        <div className="instagram-head">
          <h2 className="section-title">{t('home.instagram')}</h2>
          <a className="btn" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            <Instagram size={17} /> Instagram
          </a>
        </div>
        <div className="insta-grid">
          {feed.map((item) => (
            <a key={item.key} href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="insta-item">
              <MediaFrame src={item.src} label={item.label} />
              <strong className="insta-label">{item.label}</strong>
              <span>
                <Instagram size={24} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
