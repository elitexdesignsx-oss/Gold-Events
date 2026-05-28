import CTABanner from '../components/home/CTABanner';
import HeroSection from '../components/home/HeroSection';
import InstagramFeed from '../components/home/InstagramFeed';
import ReviewsMarquee from '../components/home/ReviewsMarquee';
import WhyUsSection from '../components/home/WhyUsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ReviewsMarquee />
      <WhyUsSection />
      <InstagramFeed />
      <CTABanner />
    </>
  );
}
