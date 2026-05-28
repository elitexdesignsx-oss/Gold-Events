import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ThemeSwitcher from './components/layout/ThemeSwitcher';
import WhatsAppButton from './components/contact/WhatsAppButton';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductDetailPage from './pages/ProductDetailPage';

const pageMotion = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.45, ease: 'easeOut' as const },
};

export default function App() {
  const location = useLocation();

  return (
    <div className="site-shell">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main key={location.pathname + location.search} {...pageMotion}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<ProductDetailPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <ThemeSwitcher />
      <WhatsAppButton floating />
    </div>
  );
}
