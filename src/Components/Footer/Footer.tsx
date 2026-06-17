import { useTranslation } from "react-i18next";
import PalmMotif from "../PalmMotif/PalmMotif";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative overflow-hidden border-t border-gold-500/20 bg-palm-950 pt-28 text-cream-300">
      <PalmMotif className="pointer-events-none absolute -left-24 -top-16 h-80 w-80 text-gold-500/[0.05]" />
      <PalmMotif className="pointer-events-none absolute -right-28 bottom-0 h-96 w-96 -scale-x-100 text-gold-500/[0.04]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-4 md:items-start">
          <div className="text-center md:text-left">
            <span className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-gold-500/30 bg-gold-500/5 md:mx-0">
              <img
                src="/images/logo-dark.png"
                alt="Royal Palm logo"
                className="h-12 w-12 object-contain"
              />
            </span>

            <h3 className="font-serif text-2xl text-cream-200">
              {t("brand.name")}
            </h3>

            <div className="mx-auto mt-3 h-px w-14 bg-gold-500 md:mx-0" />

            <p className="mt-4 max-w-xs text-sm leading-6 text-sage-300">
              {t("brand.description")}
            </p>
          </div>

          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-gold-500">
              {t("footer.hoursLabel")}
            </p>

            <p className="font-serif text-2xl text-cream-200">
              {t("footer.hoursValue")}
            </p>
          </div>

          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-gold-500">
              {t("footer.phoneLabel")}
            </p>

            <a
              href="tel:+994772777480"
              className="font-serif text-2xl text-cream-200 transition hover:text-gold-400"
            >
              +994 77 277 74 80
            </a>
          </div>

          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-gold-500">
              {t("footer.addressLabel")}
            </p>

            <div className="space-y-1 text-base leading-7 text-sage-300">
              <p>{t("footer.addressLine1")}</p>
              <p className="text-cream-200">{t("footer.addressLine2")}</p>
            </div>

            <a
              href="https://www.instagram.com/royalpalmbaku"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-gold-400 transition hover:text-gold-500"
            >
              @royalpalmbaku
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-gold-500/15 pt-5">
          <p className="text-center text-sm text-sage-400">
            {t("footer.serviceNote")}
          </p>
        </div>
      </div>
    </footer>
  );
}
