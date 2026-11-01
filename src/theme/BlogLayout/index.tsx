import React from "react";
import OriginalLayout from "@theme-original/BlogLayout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useLocation } from "@docusaurus/router";

export default function BlogLayout(
  props: React.ComponentProps<typeof OriginalLayout>,
) {
  const pt = useDocusaurusContext().i18n.currentLocale === "pt-BR";
  const list = /\/blog(?:\/page\/\d+)?\/?$/.test(useLocation().pathname);
  return (
    <OriginalLayout {...props}>
      {list && (
        <header className="portal-intro blog-intro">
          <span className="portal-eyebrow">
            {pt ? "NOVIDADES DO ECOSSISTEMA" : "FROM THE ECOSYSTEM"}
          </span>
          <h1>{pt ? "O que estamos construindo." : "What we're building."}</h1>
          <p>
            {pt
              ? "Lançamentos, melhorias e novidades da comunidade WPPConnect."
              : "Releases, improvements, and updates from the WPPConnect community."}
          </p>
        </header>
      )}
      {props.children}
    </OriginalLayout>
  );
}
