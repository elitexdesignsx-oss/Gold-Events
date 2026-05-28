import { Instagram, MessageCircle, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { goldEventsLogo } from '../assets/Logo';
import MapEmbed from '../components/contact/MapEmbed';
import { ButtonAnchor } from '../components/ui/Button';
import MediaFrame from '../components/ui/MediaFrame';
import { INSTAGRAM_URL, whatsappUrl } from '../data/brand';

const values = [
  ['Discrétion', 'Une esthétique calme qui laisse votre événement respirer.'],
  ['Précision', 'Chaque ruban, carte et parfum est aligné avec votre univers.'],
  ['Présence', 'Un accompagnement attentif de l’idée à la livraison.'],
];

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <section className="page about-page">
      <div data-nav-sentinel className="page-sentinel" />
      <div className="container-luxe about-hero">
        <img src={goldEventsLogo} alt="Gold Events" />
        <h1 className="section-title">{t('about.title')}</h1>
        <p className="section-copy">{t('about.manifesto')}</p>
      </div>
      <div className="container-luxe story-grid section-pad">
        <MediaFrame label="Atelier Gold Events" className="story-media" />
        <div>
          <span className="eyebrow">{t('about.history')}</span>
          <h2 className="section-title">Marrakech, le geste, la mémoire.</h2>
          <p className="section-copy">
            Gold Events est né d’une conviction simple: un cadeau d’invité peut devenir une émotion durable. Dans notre atelier,
            nous composons des objets délicats, personnalisés et cohérents avec la couleur, la culture et l’intimité de chaque célébration.
          </p>
          <p className="section-copy">
            Des bougies aux dragées, des bracelets aux cartes calligraphiées, chaque pièce est pensée comme une finition de robe: subtile,
            impeccable, et immédiatement reconnaissable.
          </p>
        </div>
      </div>
      <div className="container-luxe values-grid">
        {values.map(([title, text]) => (
          <article className="glass-card value-card" key={title}>
            <Sparkles size={24} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <div className="container-luxe atelier-section section-pad">
        <div>
          <span className="eyebrow">{t('about.atelier')}</span>
          <h2 className="section-title">Un rendez-vous, une palette, une collection.</h2>
          <p className="section-copy">
            Nous recevons vos inspirations, vos couleurs et vos contraintes, puis préparons une proposition claire pour votre budget et
            votre calendrier.
          </p>
          <div className="about-actions">
            <ButtonAnchor variant="primary" href={whatsappUrl('Bonjour Gold Events, je souhaite prendre rendez-vous.')} target="_blank" rel="noreferrer" icon={<MessageCircle size={17} />}>
              WhatsApp
            </ButtonAnchor>
            <ButtonAnchor href={INSTAGRAM_URL} target="_blank" rel="noreferrer" icon={<Instagram size={17} />}>
              Instagram
            </ButtonAnchor>
          </div>
        </div>
        <MapEmbed />
      </div>
    </section>
  );
}
