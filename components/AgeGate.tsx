"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface AgeGateProps {
  enabled: boolean;
  children: React.ReactNode;
}

const AGE_GATE_KEY = "creatibros_boudoir_18_verified";

export function AgeGate({ enabled, children }: AgeGateProps) {
  const router = useRouter();
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const storedValue = window.localStorage.getItem(AGE_GATE_KEY);
    if (storedValue === "true") {
      setIsVerified(true);
    }
  }, [enabled]);

  const handleConfirm = () => {
    window.localStorage.setItem(AGE_GATE_KEY, "true");
    setIsVerified(true);
  };

  const handleExit = () => {
    router.push("/portafolio");
  };

  if (!enabled || isVerified) {
    return <>{children}</>;
  }

  return (
    <>
      <div className="fixed inset-0 z-[120] bg-cb-dark/80 backdrop-blur-sm" />
      <div className="fixed inset-0 z-[121] flex items-center justify-center px-4">
        <div className="w-full max-w-md rounded-3xl border border-cb-lavender-light/30 bg-cb-white dark:bg-cb-dark shadow-[0_30px_80px_rgba(0,0,0,0.35)] p-6 sm:p-8 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-cb-purple font-semibold mb-3">Aviso de contenido</p>
          <h2 className="font-arsenica text-3xl font-bold text-cb-dark dark:text-cb-white mb-4">
            Sólo para mayores de 18 años
          </h2>
          <p className="text-cb-dark/80 dark:text-cb-white/80 leading-relaxed mb-7">
            Esta galería contiene contenido sensible. Al continuar, confirmas que tienes 18 años o más.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handleConfirm}
              className="flex-1 rounded-full bg-cb-purple text-cb-white font-semibold px-5 py-3 hover:bg-cb-navy transition-colors"
            >
              Tengo 18+
            </button>
            <button
              type="button"
              onClick={handleExit}
              className="flex-1 rounded-full border border-cb-dark/20 dark:border-cb-white/20 text-cb-dark dark:text-cb-white font-semibold px-5 py-3 hover:bg-cb-lavender-light/20 dark:hover:bg-white/10 transition-colors"
            >
              Salir
            </button>
          </div>
        </div>
      </div>
      <div className="opacity-0 pointer-events-none select-none">{children}</div>
    </>
  );
}
