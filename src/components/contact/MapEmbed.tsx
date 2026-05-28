import { MapPin } from 'lucide-react';

export default function MapEmbed() {
  return (
    <div className="map-card glass-card">
      <MapPin size={32} />
      <h3>Marrakech, Morocco</h3>
      <p>Atelier sur rendez-vous · Livraison partout au Maroc</p>
      <div className="map-lines" aria-hidden="true" />
    </div>
  );
}
