import type { BanquetSectionData } from "../types/menu";

// Hər bölmə üçün 3 dildə (az / en / ru) şəkil yolu.
// Şəkillər `public/images/menus/` qovluğundadır.
export const banquetSections: BanquetSectionData[] = [
  {
    key: "banquet",
    titleKey: "sections.banquet.title",
    images: {
      az: "/images/menus/banquet-az.jpg",
      en: "/images/menus/banquet-en.jpg",
      ru: "/images/menus/banquet-ru.jpg",
    },
  },
  {
    key: "kids",
    titleKey: "sections.kids.title",
    images: {
      az: "/images/menus/kids-az.jpg",
      en: "/images/menus/kids-en.jpg",
      ru: "/images/menus/kids-ru.jpg",
    },
  },
  {
    key: "drinks",
    titleKey: "sections.drinks.title",
    images: {
      az: "/images/menus/drinks-az.jpg",
      en: "/images/menus/drinks-en.jpg",
      ru: "/images/menus/drinks-ru.jpg",
    },
  },
];
