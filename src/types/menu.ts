export type MenuItem = {
  id: number;
  nameKey: string;
  image: string;
  descriptionKey?: string;
  price: number;
  weight?: string;
  badgeKey?: string;
};

export type MenuCategory = {
  key: string;
  titleKey: string;
  items: MenuItem[];
};

// --- Banket rejimi ---

export type Language = "az" | "en" | "ru";

export type LocalizedImageSet = Record<Language, string>;

export type BanquetSectionKey = "banquet" | "kids" | "drinks";

export type BanquetSectionData = {
  key: BanquetSectionKey;
  titleKey: string;
  images: LocalizedImageSet;
};

export type MenuMode = "alacarte" | "banquet";

// Köhnə v2 adları ilə uyğunluq üçün alias-lar (menuSections.ts silinməsə belə build pozulmasın)
export type MenuSectionKey = BanquetSectionKey;
export type MenuSectionData = BanquetSectionData;
