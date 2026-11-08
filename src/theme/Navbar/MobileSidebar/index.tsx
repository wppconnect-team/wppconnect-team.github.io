import React, { useEffect, useRef } from "react";
import OriginalSidebar from "@theme-original/Navbar/MobileSidebar";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import { translate } from "@docusaurus/Translate";

export default function MobileSidebar() {
  const { shown, toggle } = useNavbarMobileSidebar();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!shown || !ref.current) return;
    const container = ref.current;
    const pathname = window.location.pathname;
    const previous = document.activeElement as HTMLElement | null;
    const background = Array.from(
      document.querySelectorAll<HTMLElement>("main, footer, .navbar__inner"),
    );
    const inert = background.map((element) => element.inert);
    background.forEach((element) => {
      element.inert = true;
    });
    const focusable = () =>
      Array.from(
        container.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex='0']",
        ),
      ).filter(
        (element) =>
          element.getClientRects().length &&
          getComputedStyle(element).visibility !== "hidden" &&
          !element.closest("[inert]"),
      );
    container
      .querySelector<HTMLButtonElement>(".navbar-sidebar__close")
      ?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        toggle();
      }
      if (event.key !== "Tab") return;
      const elements = focusable(),
        first = elements[0],
        last = elements.at(-1);
      if (!first) {
        event.preventDefault();
        return;
      }
      if (
        !container.contains(document.activeElement) ||
        (event.shiftKey && document.activeElement === first)
      ) {
        event.preventDefault();
        (event.shiftKey ? last : first)?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey, true);
    return () => {
      document.removeEventListener("keydown", onKey, true);
      background.forEach((element, index) => {
        element.inert = inert[index];
      });
      requestAnimationFrame(() => {
        if (window.location.pathname !== pathname) return;
        const target = previous?.isConnected
          ? previous
          : document.querySelector<HTMLButtonElement>(".navbar__toggle");
        target?.focus();
      });
    };
  }, [shown, toggle]);
  return (
    <div
      ref={ref}
      role={shown ? "dialog" : undefined}
      aria-modal={shown || undefined}
      aria-label={
        shown
          ? translate({ id: "theme.NavBar.navAriaLabel", message: "Main" })
          : undefined
      }
    >
      <OriginalSidebar />
    </div>
  );
}
