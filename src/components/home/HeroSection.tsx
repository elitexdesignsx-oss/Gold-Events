import { motion } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { goldEventsLogo } from '../../assets/Logo';
import { whatsappUrl } from '../../data/brand';
import { ButtonAnchor, ButtonLink } from '../ui/Button';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="hero" data-nav-sentinel>
      <div className="hero-media">
        <div className="hero-ambient" />
        <span className="hero-glow hero-glow-one" />
        <span className="hero-glow hero-glow-two" />
        <span className="hero-line one" />
        <span className="hero-line two" />
      </div>
      <div className="hero-overlay" />
      <motion.div
        className="hero-content container-luxe"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
      >
        <motion.img
          src={goldEventsLogo}
          alt="Gold Events"
          className="hero-logo"
          decoding="async"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
        <h1>{t('hero.tagline')}</h1>
        <p>{t('hero.subtagline')}</p>
        <div className="hero-actions">
          <ButtonLink variant="primary" to="/catalog">
            {t('hero.discover')}
          </ButtonLink>
          <ButtonAnchor
            href={whatsappUrl('Bonjour Gold Events, je souhaite créer des cadeaux personnalisés.')}
            target="_blank"
            rel="noreferrer"
            icon={<MessageCircle size={17} />}
          >
            {t('hero.whatsapp')}
          </ButtonAnchor>
        </div>
      </motion.div>
      <ChevronDown className="scroll-indicator" aria-hidden="true" />
    </section>
  );
}
