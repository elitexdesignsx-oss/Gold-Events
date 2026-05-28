import { useLanguage, type Language } from '../../context/LanguageContext';

const labels: Record<Language, string> = {
  fr: 'FR',
  ar: 'AR',
  en: 'EN',
};

export default function LanguageSwitcher() {
  const { language, languages, setLanguage } = useLanguage();

  return (
    <div className="language-switcher" aria-label="Language switcher">
      {languages.map((item) => (
        <button
          key={item}
          type="button"
          className={language === item ? 'is-active' : ''}
          onClick={() => setLanguage(item)}
          aria-pressed={language === item}
        >
          {labels[item]}
        </button>
      ))}
    </div>
  );
}
