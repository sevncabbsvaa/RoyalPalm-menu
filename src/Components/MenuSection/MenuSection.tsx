import { useTranslation } from "react-i18next";
import FoodCard from "../Cards/FoodCard";
import type { MenuCategory } from "../../types/menu";

type MenuSectionProps = {
  category: MenuCategory;
  sectionRef?: (element: HTMLElement | null) => void;
};

export default function MenuSection({
  category,
  sectionRef,
}: MenuSectionProps) {
  const { t } = useTranslation();

  return (
    <section
      id={category.key}
      ref={sectionRef}
      className="scroll-mt-28 space-y-7 sm:space-y-9"
    >
      <div className="flex items-center gap-5">
        <h2 className="font-serif text-3xl text-cream-200 sm:text-4xl">
          {t(category.titleKey)}
        </h2>
        <span className="h-px flex-1 bg-gradient-to-r from-gold-500/50 to-transparent" />
      </div>

      <div className="grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 xl:grid-cols-4">
        {category.items.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
