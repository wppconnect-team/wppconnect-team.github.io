import React, { useEffect } from "react";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

type Props = { children?: React.ReactNode };

const LenisProvider: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    let raf = 0;
    let lenis: any;
    let cancelled = false;

    (async () => {
      try {
        const Lenis = (await import("lenis")).default;
        if (cancelled) return;
        lenis = new Lenis({
          duration: 1.05,
          easing: (t: number) => 1 - Math.pow(1 - t, 3),
          smoothWheel: true,
          touchMultiplier: 1.2,
        });
        const loop = (time: number) => {
          lenis.raf(time);
          raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
      } catch {
        /* swallow */
      }
    })();

    return () => {
      cancelled = true;
      if (raf) cancelAnimationFrame(raf);
      if (lenis && typeof lenis.destroy === "function") lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default LenisProvider;
