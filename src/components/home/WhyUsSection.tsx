import { useTranslation } from 'react-i18next';

const items = [
  {
    title: 'Personnalisation complète',
    text: 'Chaque détail selon vos envies',
    path: 'M12 3l7 4v10l-7 4-7-4V7l7-4zm0 0v18M5 7l7 4 7-4',
  },
  {
    title: 'Livraison partout au Maroc',
    text: 'Marrakech et au-delà',
    path: 'M3 7h11v9H3zM14 10h4l3 3v3h-7zM7 19a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z',
  },
  {
    title: 'Qualité premium',
    text: 'Matériaux sélectionnés avec soin',
    path: 'M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2 7.5 14 3 9.6l6.2-.9L12 3z',
  },
];

export default function WhyUsSection() {
  const { t } = useTranslation();

  return (
    <section className="why section-pad">
      <div className="container-luxe">
        <div className="section-heading">
          <span className="eyebrow">Savoir-faire</span>
          <h2 className="section-title">{t('home.why')}</h2>
        </div>
        <div className="why-grid">
          {items.map((item) => (
            <article
              className="why-card glass-card"
              key={item.title}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d={item.path} />
              </svg>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
