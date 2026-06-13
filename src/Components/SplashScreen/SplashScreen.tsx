import { useEffect, useState } from "react";
import PalmMotif from "../PalmMotif/PalmMotif";

type SplashScreenProps = {
  onFinish: () => void;
};

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const [showContent, setShowContent] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const enterTimer = setTimeout(() => {
      setShowContent(true);
    }, 150);

    const exitTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2600);

    const finishTimer = setTimeout(() => {
      onFinish();
    }, 3200);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-999 overflow-hidden bg-palm-950 transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.16),transparent_42%)]" />

      <PalmMotif
        className={`pointer-events-none absolute -left-24 -top-20 h-[28rem] w-[28rem] text-gold-500/[0.07] transition-all duration-[1400ms] ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      />
      <PalmMotif
        className={`pointer-events-none absolute -bottom-24 -right-24 h-[32rem] w-[32rem] -scale-x-100 text-gold-500/[0.06] transition-all duration-[1400ms] ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="relative flex h-full items-center justify-center px-6">
        <div className="text-center">
          <div
            className={`mx-auto mb-7 flex h-28 w-28 items-center justify-center rounded-full border border-gold-500/40 bg-gold-500/[0.06] shadow-[0_0_70px_rgba(201,168,76,0.15)] backdrop-blur-sm transition-all duration-1000 ${
              showContent
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-4 scale-95 opacity-0"
            }`}
          >
            <img
              src="/images/logo-dark.png"
              alt="Royal Palm logo"
              className="h-16 w-16 object-contain opacity-95 sm:h-20 sm:w-20"
            />
          </div>

          <div
            className={`transition-all duration-1000 delay-150 ${
              showContent
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <p className="mb-3 text-[11px] uppercase tracking-[0.45em] text-gold-500">
              Restaurant
            </p>

            <h1 className="font-serif text-5xl tracking-[0.06em] text-cream-200 sm:text-7xl">
              ROYAL PALM
            </h1>

            <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

            <p className="mt-5 text-sm tracking-[0.2em] text-sage-300">
              Royal Taste Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
