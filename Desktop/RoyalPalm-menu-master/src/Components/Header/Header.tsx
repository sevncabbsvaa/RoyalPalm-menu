import { useTranslation } from "react-i18next";

const languages = ["az", "en", "ru"] as const;
type Language = (typeof languages)[number];

export default function Header() {
  const { t, i18n } = useTranslation();

  const currentLanguage = (i18n.language?.split("-")[0] || "az") as Language;

  const handleLanguageChange = (lang: Language) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="border-b border-gold-500/20 bg-palm-950/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/35 bg-gold-500/5">
            <img
              src="/images/logo-dark.png"
              alt="Royal Palm logo"
              className="h-8 w-8 object-contain"
            />
          </span>

          <div>
            <p className="font-serif text-xl leading-none text-cream-200">
              {t("brand.name")}
            </p>
            <p className="mt-1.5 text-[10px] uppercase tracking-[0.32em] text-gold-500">
              {t("brand.tagline")}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 rounded-full border border-gold-500/25 bg-palm-800/60 p-1">
          {languages.map((lang) => {
            const isActive = currentLanguage === lang;

            return (
              <button
                key={lang}
                type="button"
                onClick={() => handleLanguageChange(lang)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition ${
                  isActive
                    ? "bg-gold-500 text-palm-900"
                    : "text-sage-300 hover:text-cream-200"
                }`}
              >
                {lang}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
