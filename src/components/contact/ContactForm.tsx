import { FormEvent, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { whatsappUrl } from '../../data/brand';
import { occasions } from '../../data/products';
import { Button } from '../ui/Button';

export default function ContactForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    occasion: 'Mariage',
    date: '',
    guests: '',
    message: '',
  });

  const update = (field: keyof typeof form, value: string) => setForm((current) => ({ ...current, [field]: value }));

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const message = [
      `Bonjour Gold Events, je souhaite une proposition.`,
      `Nom: ${form.name}`,
      `WhatsApp: ${form.phone}`,
      `Occasion: ${form.occasion}`,
      `Date: ${form.date}`,
      `Invités: ${form.guests}`,
      `Message: ${form.message}`,
    ].join('\n');
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <form className="contact-form glass-card" onSubmit={onSubmit}>
      <label>
        {t('contact.name')}
        <input value={form.name} onChange={(event) => update('name', event.target.value)} required />
      </label>
      <label>
        {t('contact.phone')}
        <input value={form.phone} onChange={(event) => update('phone', event.target.value)} required />
      </label>
      <label>
        {t('contact.occasion')}
        <select value={form.occasion} onChange={(event) => update('occasion', event.target.value)}>
          {occasions.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <label>
        {t('contact.date')}
        <input type="date" value={form.date} onChange={(event) => update('date', event.target.value)} />
      </label>
      <label>
        {t('contact.guests')}
        <input type="number" min="1" value={form.guests} onChange={(event) => update('guests', event.target.value)} />
      </label>
      <label>
        {t('contact.message')}
        <textarea rows={5} value={form.message} onChange={(event) => update('message', event.target.value)} />
      </label>
      <Button type="submit" variant="primary" icon={<MessageCircle size={17} />}>
        {t('contact.send')}
      </Button>
    </form>
  );
}
