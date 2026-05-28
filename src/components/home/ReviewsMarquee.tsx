import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { reviews } from '../../data/reviews';

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <article className="review-card">
      <span className="review-quote">“</span>
      <div className="review-stars" aria-label="5 stars">
        {Array.from({ length: review.stars }).map((_, index) => (
          <Star key={index} size={16} fill="currentColor" />
        ))}
      </div>
      <p>{review.text}</p>
      <div className="review-meta">
        <strong>{review.name}</strong>
        <span>{review.occasion} · {review.location}</span>
      </div>
    </article>
  );
}

export default function ReviewsMarquee() {
  const { t } = useTranslation();
  const firstRow = [...reviews.slice(0, 6), ...reviews.slice(0, 6)];
  const secondRow = [...reviews.slice(6), ...reviews.slice(6)];

  return (
    <section className="reviews section-pad">
      <div className="container-luxe section-heading">
        <div className="review-heading-stars">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} size={18} fill="currentColor" />
          ))}
        </div>
        <h2 className="section-title">{t('home.trust')}</h2>
      </div>
      <div className="marquee" aria-label="Client reviews">
        <div className="marquee-track">
          {firstRow.map((review, index) => (
            <ReviewCard review={review} key={`${review.id}-a-${index}`} />
          ))}
        </div>
        <div className="marquee-track reverse">
          {secondRow.map((review, index) => (
            <ReviewCard review={review} key={`${review.id}-b-${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
