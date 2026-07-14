import { useEffect, useMemo, useRef, useState } from "react";
import CategoryNav from "./Components/CategoryNav/CategoryNav";
import MenuSection from "./Components/MenuSection/MenuSection";
import BanquetSection from "./Components/BanquetSection/BanquetSection";
import MenuModeSwitch from "./Components/MenuModeSwitch/MenuModeSwitch";
import { menuData } from "./data/menuData";
import { banquetSections } from "./data/banquetSections";
import SplashScreen from "./Components/SplashScreen/SplashScreen";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import type { MenuMode } from "./types/menu";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [mode, setMode] = useState<MenuMode>("alacarte");

  const categories = useMemo(
    () =>
      mode === "alacarte"
        ? menuData.map((category) => ({
            key: category.key,
            titleKey: category.titleKey,
          }))
        : banquetSections.map((section) => ({
            key: section.key,
            titleKey: section.titleKey,
          })),
    [mode]
  );

  const [activeCategory, setActiveCategory] = useState(
    categories[0]?.key || ""
  );
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const handleModeChange = (nextMode: MenuMode) => {
    if (nextMode === mode) return;

    sectionRefs.current = {};
    setMode(nextMode);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  useEffect(() => {
    setActiveCategory(categories[0]?.key || "");
  }, [categories]);

  const handleCategoryClick = (categoryKey: string) => {
    setActiveCategory(categoryKey);

    const section = sectionRefs.current[categoryKey];

    if (section) {
      const navOffset = 110;

      window.scrollTo({
        top: section.offsetTop - navOffset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const navOffset = 140;
      const currentScroll = window.scrollY + navOffset;

      let currentCategory = categories[0]?.key || "";

      for (const category of categories) {
        const section = sectionRefs.current[category.key];
        if (!section) continue;

        if (section.offsetTop <= currentScroll) {
          currentCategory = category.key;
        }
      }

      setActiveCategory((prev) =>
        prev === currentCategory ? prev : currentCategory
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [categories]);

  return (
    <>
      <Header />

      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
        <img
          src="/images/palm-bg.jpg"
          alt=""
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-palm-900/55" />
      </div>

      <div className="relative min-h-screen  text-cream-200">
        <MenuModeSwitch mode={mode} onModeChange={handleModeChange} />

        <CategoryNav
          categories={categories}
          activeCategory={activeCategory}
          onCategoryClick={handleCategoryClick}
        />

        <main className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {mode === "alacarte"
              ? menuData.map((category) => (
                  <MenuSection
                    key={category.key}
                    category={category}
                    sectionRef={(element) => {
                      sectionRefs.current[category.key] = element;
                    }}
                  />
                ))
              : banquetSections.map((section) => (
                  <BanquetSection
                    key={section.key}
                    section={section}
                    sectionRef={(element) => {
                      sectionRefs.current[section.key] = element;
                    }}
                  />
                ))}
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
