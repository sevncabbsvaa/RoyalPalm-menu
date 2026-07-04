export type Language = "az" | "en" | "ru";

export type LocalizedImageSet = Record<Language, string>;

export type MenuSectionKey = "banquet" | "kids" | "drinks";

export type MenuSectionData = {
  key: MenuSectionKey;
  titleKey: string;
  images: LocalizedImageSet;
};
