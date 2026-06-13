import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CategoryNavItem = {
  key: string;
  titleKey: string;
};

type CategoryNavProps = {
  categories: CategoryNavItem[];
  activeCategory: string;
  onCategoryClick: (categoryKey: string) => void;
};

export default function CategoryNav({
  categories,
  activeCategory,
  onCategoryClick,
}: CategoryNavProps) {
  const { t } = useTranslation();
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const activeButton = buttonRefs.current[activeCategory];
    const container = scrollContainerRef.current;

    if (activeButton && container) {
      // yalnız üfüqi sürüşmə — səhifənin şaquli scroll-una toxunmuruq
      const target =
        activeButton.offsetLeft -
        container.clientWidth / 2 +
        activeButton.clientWidth / 2;

      container.scrollTo({
        left: target,
        behavior: "smooth",
      });
    }
  }, [activeCategory]);

  const scrollByAmount = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.scrollBy({
      left: direction === "left" ? -220 : 220,
      behavior: "smooth",
    });
  };

  return (
    <div className="sticky top-0 z-50 border-b border-gold-500/20 bg-palm-900/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => scrollByAmount("left")}
          className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-500/30 bg-palm-800 text-gold-400 transition hover:bg-palm-700 md:flex"
          aria-label="Sola sürüşdür"
        >
          <ChevronLeft size={18} />
        </button>

        <div
          ref={scrollContainerRef}
          className="no-scrollbar overflow-x-auto scroll-smooth"
        >
          <div className="flex min-w-max gap-8 py-5">
            {categories.map((category) => {
              const isActive = activeCategory === category.key;

              return (
                <button
                  key={category.key}
                  ref={(el) => {
                    buttonRefs.current[category.key] = el;
                  }}
                  onClick={() => onCategoryClick(category.key)}
                  className={`whitespace-nowrap border-b-2 pb-2 text-sm tracking-wide transition ${
                    isActive
                      ? "border-gold-500 text-cream-200"
                      : "border-transparent text-sage-400 hover:text-cream-300"
                  }`}
                >
                  {t(category.titleKey)}
                </button>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          onClick={() => scrollByAmount("right")}
          className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-500/30 bg-palm-800 text-gold-400 transition hover:bg-palm-700 md:flex"
          aria-label="Sağa sürüşdür"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
