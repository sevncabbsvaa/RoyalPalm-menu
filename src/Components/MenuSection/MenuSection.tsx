import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { MenuSectionData, Language } from "../../types/menu";

type MenuSectionProps = {
  section: MenuSectionData;
  sectionRef?: (element: HTMLElement | null) => void;
};

export default function MenuSection({ section, sectionRef }: MenuSectionProps) {
  const { t, i18n } = useTranslation();
  const [isZoomed, setIsZoomed] = useState(false);

  const currentLanguage = (i18n.language?.split("-")[0] || "az") as Language;
  const imageSrc = section.images[currentLanguage] ?? section.images.az;

  return (
    <section
      id={section.key}
      ref={sectionRef}
      className="scroll-mt-28 space-y-7 sm:space-y-9"
    >
      <div className="flex flex-wrap items-center gap-5">
        <h2 className="font-serif text-3xl text-cream-200 sm:text-4xl">
          {t(section.titleKey)}
        </h2>
        <span className="h-px flex-1 bg-gradient-to-r from-gold-500/50 to-transparent" />
      </div>

      <button
        type="button"
        onClick={() => setIsZoomed(true)}
        className="block w-full overflow-hidden rounded-2xl border border-gold-500/20 bg-palm-800/40 shadow-lg transition hover:border-gold-500/40"
        aria-label={t(section.titleKey)}
      >
        <img
          src={imageSrc}
          alt={t(section.titleKey)}
          className="w-full object-contain"
          loading="lazy"
        />
      </button>

      {isZoomed && (
        <div
          className="fixed inset-0 z-999 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsZoomed(false)}
          role="button"
          tabIndex={0}
          aria-label="Bağla"
        >
          <img
            src={imageSrc}
            alt={t(section.titleKey)}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      )}
    </section>
  );
}
