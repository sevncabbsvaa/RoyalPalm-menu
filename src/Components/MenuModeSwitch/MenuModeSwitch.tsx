import { useTranslation } from "react-i18next";
import type { MenuMode } from "../../types/menu";

type MenuModeSwitchProps = {
  mode: MenuMode;
  onModeChange: (mode: MenuMode) => void;
};

const modes: { key: MenuMode; labelKey: string }[] = [
  { key: "alacarte", labelKey: "menuSwitch.alacarte" },
  { key: "banquet", labelKey: "menuSwitch.banquet" },
];

export default function MenuModeSwitch({
  mode,
  onModeChange,
}: MenuModeSwitchProps) {
  const { t } = useTranslation();

  return (
    <div className="border-b border-gold-500/15 bg-palm-900/70 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl justify-center px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex w-full max-w-md items-center gap-1 rounded-full border border-gold-500/25 bg-palm-800/60 p-1">
          {modes.map(({ key, labelKey }) => {
            const isActive = mode === key;

            return (
              <button
                key={key}
                type="button"
                onClick={() => onModeChange(key)}
                className={`flex-1 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition sm:text-sm ${
                  isActive
                    ? "bg-gold-500 text-palm-900 shadow"
                    : "text-sage-300 hover:text-cream-200"
                }`}
              >
                {t(labelKey)}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
