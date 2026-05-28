import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '../../data/brand';

export default function WhatsAppButton({ floating = false }: { floating?: boolean }) {
  return (
    <a
      className={floating ? 'whatsapp-fab' : 'btn btn-primary'}
      href={whatsappUrl('Bonjour Gold Events, je souhaite des informations.')}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp Gold Events"
    >
      <MessageCircle size={floating ? 24 : 18} />
      {!floating ? 'WhatsApp' : null}
    </a>
  );
}
