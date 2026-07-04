import { useEffect, useMemo, useRef, useState } from "react";
import CategoryNav from "./Components/CategoryNav/CategoryNav";
import MenuSection from "./Components/MenuSection/MenuSection";
import { menuSections } from "./data/menuSections";
import SplashScreen from "./Components/SplashScreen/SplashScreen";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  const categories = useMemo(
    () =>
      menuSections.map((section) => ({
        key: section.key,
        titleKey: section.titleKey,
      })),
    []
  );

  const [activeCategory, setActiveCategory] = useState(categories[0]?.key || "");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

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

      for (const section of menuSections) {
        const el = sectionRefs.current[section.key];
        if (!el) continue;

        if (el.offsetTop <= currentScroll) {
          currentCategory = section.key;
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

      {showSplash && (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      )}

      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
        <img
          src="/images/palm-bg.jpg"
          alt=""
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-palm-900/55" />
      </div>

      <div className="relative min-h-screen  text-cream-200">
        <CategoryNav
          categories={categories}
          activeCategory={activeCategory}
          onCategoryClick={handleCategoryClick}
        />

        <main className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {menuSections.map((section) => (
              <MenuSection
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
