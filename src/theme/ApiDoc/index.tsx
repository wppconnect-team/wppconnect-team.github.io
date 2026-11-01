import React from "react";
import Layout from "@theme/Layout";
import Redoc from "@theme/Redoc";
import type { ApiDocProps } from "docusaurus-theme-redoc/dist/types/common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function ApiDoc({ layoutProps, specProps }: ApiDocProps) {
  const pt = useDocusaurusContext().i18n.currentLocale === "pt-BR";
  return (
    <Layout
      title="WPPConnect Server API"
      description="WPPConnect Server REST API reference"
      {...layoutProps}
    >
      <main>
        <header className="api-intro">
          <div className="portal-intro">
            <span className="portal-eyebrow">REST API / WPPCONNECT SERVER</span>
            <h1>
              {pt
                ? "Sua integração, endpoint por endpoint."
                : "Your integration, endpoint by endpoint."}
            </h1>
            <p>
              {pt
                ? "Explore sessões, mensagens, contatos e webhooks. Use a busca e o menu de endpoints para encontrar a operação que você precisa."
                : "Explore sessions, messages, contacts, and webhooks. Use search and the endpoint menu to find the operation you need."}
            </p>
            <div className="api-intro-links">
              <a href="https://github.com/wppconnect-team/wppconnect-server">
                GitHub
              </a>
              <a href="https://raw.githubusercontent.com/wppconnect-team/wppconnect-server/main/src/swagger.json">
                OpenAPI JSON
              </a>
            </div>
          </div>
        </header>
        <Redoc {...specProps} />
      </main>
    </Layout>
  );
}
