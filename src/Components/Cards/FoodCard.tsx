import { useTranslation } from "react-i18next";
import type { MenuItem } from "../../types/menu";
import PalmMotif from "../PalmMotif/PalmMotif";

type FoodCardProps = {
  item: MenuItem;
};

function ImageFallback() {
  const { t } = useTranslation();
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-palm-700">
      <PalmMotif className="h-12 w-12 text-gold-500/40" />
      <span className="text-xs tracking-wide text-sage-400">
        {t("common.noImage")}
      </span>
    </div>
  );
}

export default function FoodCard({ item }: FoodCardProps) {
  const { t } = useTranslation();

  return (
    <article className="group w-full">
      {/* MOBILE */}
      <div className="flex gap-4 rounded-2xl border border-gold-500/15 bg-palm-850 p-3 sm:hidden">
        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-palm-700">
          {item.badgeKey && (
            <span className="absolute left-2 top-2 z-10 rounded-full bg-gold-500 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-palm-900">
              {t(item.badgeKey)}
            </span>
          )}

          {item.image ? (
            <img
              src={item.image}
              alt={t(item.nameKey)}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          ) : (
            <ImageFallback />
          )}
        </div>

        <div className="min-w-0 flex-1 py-1">
          <div className="mb-2 flex items-start justify-between gap-3">
            <h3 className="line-clamp-2 font-serif text-lg leading-tight text-cream-200">
              {t(item.nameKey)}
            </h3>

            <div className="shrink-0 font-serif text-lg text-gold-400">
              ₼{item.price.toFixed(2)}
            </div>
          </div>

          {item.weight && (
            <p className="mb-2 text-xs text-sage-400">{item.weight}</p>
          )}

          <p className="line-clamp-3 text-sm leading-6 text-sage-300">
            {item.descriptionKey
              ? t(item.descriptionKey)
              : t("common.descriptionFallback")}
          </p>
        </div>
      </div>

      {/* TABLET / DESKTOP */}
      <div className="hidden sm:block">
        <div className="overflow-hidden rounded-[20px] border border-gold-500/15 bg-palm-850 transition duration-500 group-hover:border-gold-500/40">
          <div className="relative aspect-[4/5] overflow-hidden bg-palm-700">
            {item.badgeKey && (
              <span className="absolute left-5 top-5 z-10 rounded-full bg-gold-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-palm-900">
                {t(item.badgeKey)}
              </span>
            )}

            {item.image ? (
              <img
                src={item.image}
                alt={t(item.nameKey)}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            ) : (
              <ImageFallback />
            )}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-palm-950/50 via-transparent to-transparent" />
          </div>

          <div className="px-5 pb-5 pt-5">
            <div className="mb-2 flex items-start justify-between gap-4">
              <h3 className="max-w-[70%] font-serif text-2xl leading-tight text-cream-200">
                {t(item.nameKey)}
              </h3>

              <div className="shrink-0 pt-1 font-serif text-xl text-gold-400">
                ₼{item.price.toFixed(2)}
              </div>
            </div>

            {item.weight && (
              <p className="mb-2 text-sm text-sage-400">{item.weight}</p>
            )}

            <p className="text-[15px] leading-7 text-sage-300">
              {item.descriptionKey
                ? t(item.descriptionKey)
                : t("common.descriptionFallback")}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
