import { Menu, MessageCircle, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { whatsappUrl } from '../../data/brand';
import LanguageSwitcher from './LanguageSwitcher';

const links = [
  { to: '/', key: 'home' },
  { to: '/catalog', key: 'catalog' },
  { to: '/gallery', key: 'gallery' },
  { to: '/about', key: 'about' },
  { to: '/contact', key: 'contact' },
];

export default function Navbar() {
  const { t } = useTranslation();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setSolid(!entry.isIntersecting);
      },
      { threshold: 0.1 },
    );
    const sentinel = document.querySelector('[data-nav-sentinel]');
    if (sentinel) observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className={`navbar ${solid || open ? 'is-solid' : ''}`}>
        <nav className="container-luxe navbar-inner" aria-label="Main navigation">
          <button className="icon-btn mobile-only" type="button" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu size={20} />
          </button>
          <div className="nav-links desktop-nav">
            {links.slice(0, 3).map((link) => (
              <NavLink key={link.to} to={link.to}>
                {t(`nav.${link.key}`)}
              </NavLink>
            ))}
          </div>
          <NavLink to="/" className="nav-logo" aria-label="Gold Events home">
            <span className="nav-wordmark">
              <span className="nav-wordmark-title">Gold Events</span>
              <span className="nav-wordmark-motto">{t('nav.motto')}</span>
            </span>
          </NavLink>
          <div className="nav-links desktop-nav">
            {links.slice(3).map((link) => (
              <NavLink key={link.to} to={link.to}>
                {t(`nav.${link.key}`)}
              </NavLink>
            ))}
          </div>
          <div className="nav-actions">
            <LanguageSwitcher />
            <a className="icon-btn desktop-only" href={whatsappUrl('Bonjour Gold Events, je souhaite une proposition.')} aria-label="WhatsApp">
              <MessageCircle size={18} />
            </a>
          </div>
        </nav>
      </header>
      {open ? (
        <div className="mobile-menu">
          <button className="icon-btn mobile-menu-close" type="button" onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={20} />
          </button>
          <div className="mobile-menu-logo nav-wordmark">
            <span className="nav-wordmark-title">Gold Events</span>
            <span className="nav-wordmark-motto">{t('nav.motto')}</span>
          </div>
          <div className="mobile-menu-links">
            {links.map((link) => (
              <div key={link.to}>
                <NavLink to={link.to} onClick={() => setOpen(false)}>
                  {t(`nav.${link.key}`)}
                </NavLink>
              </div>
            ))}
          </div>
          <LanguageSwitcher />
        </div>
      ) : null}
    </>
  );
}
