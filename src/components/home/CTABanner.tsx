import { Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ButtonLink } from '../ui/Button';

export default function CTABanner() {
  const { t } = useTranslation();

  return (
    <section className="cta-banner section-pad">
      <span className="floating-feather one" />
      <span className="floating-feather two" />
      <span className="floating-feather three" />
      <div className="container-luxe cta-content">
        <Sparkles size={32} />
        <h2 className="section-title">{t('home.ctaTitle')}</h2>
        <p className="section-copy">{t('home.ctaText')}</p>
        <ButtonLink variant="primary" to="/catalog">
          {t('home.ctaButton')}
        </ButtonLink>
      </div>
    </section>
  );
}
