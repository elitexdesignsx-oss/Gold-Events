import { Instagram, MapPin, MessageCircle, Truck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ContactForm from '../components/contact/ContactForm';
import MapEmbed from '../components/contact/MapEmbed';
import { ButtonAnchor } from '../components/ui/Button';
import { INSTAGRAM_URL, whatsappUrl } from '../data/brand';

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <section className="page contact-page">
      <div data-nav-sentinel className="page-sentinel" />
      <div className="container-luxe contact-layout">
        <div className="contact-copy">
          <span className="eyebrow">Contact</span>
          <h1 className="section-title">{t('contact.title')}</h1>
          <p className="section-copy">{t('contact.subtitle')}</p>
          <div className="contact-info">
            <p><MapPin size={18} /> Marrakech, Morocco</p>
            <p><Truck size={18} /> {t('contact.delivery')}</p>
          </div>
          <div className="about-actions">
            <ButtonAnchor variant="primary" href={whatsappUrl('Bonjour Gold Events, je souhaite une proposition.')} target="_blank" rel="noreferrer" icon={<MessageCircle size={17} />}>
              WhatsApp
            </ButtonAnchor>
            <ButtonAnchor href={INSTAGRAM_URL} target="_blank" rel="noreferrer" icon={<Instagram size={17} />}>
              Instagram
            </ButtonAnchor>
          </div>
          <MapEmbed />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
