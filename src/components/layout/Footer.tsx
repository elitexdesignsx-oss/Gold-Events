import { Instagram, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { goldEventsLogo } from '../../assets/Logo';
import { INSTAGRAM_URL, whatsappUrl } from '../../data/brand';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-luxe">
        <img src={goldEventsLogo} alt="Gold Events" className="footer-logo" />
        <div className="footer-rule" />
        <div className="footer-grid">
          <div>
            <h3>Navigation</h3>
            <Link to="/">Accueil</Link>
            <Link to="/catalog">Collection</Link>
            <Link to="/gallery">Galerie</Link>
            <Link to="/about">À Propos</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <h3>Info & Livraison</h3>
            <p>Marrakech, Morocco</p>
            <p>Livraison partout au Maroc</p>
            <p>Commandes personnalisées sur devis</p>
          </div>
          <div>
            <h3>Réseaux Sociaux</h3>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              <Instagram size={17} /> @gold_events1
            </a>
            <a href={whatsappUrl('Bonjour Gold Events, je souhaite vous contacter.')} target="_blank" rel="noreferrer">
              <MessageCircle size={17} /> WhatsApp
            </a>
            <a href="mailto:contact@goldevents.ma">
              <Mail size={17} /> contact@goldevents.ma
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Gold Events · Marrakech, Morocco</span>
          <span>
            <MapPin size={14} /> Atelier sur rendez-vous
          </span>
        </div>
      </div>
    </footer>
  );
}
