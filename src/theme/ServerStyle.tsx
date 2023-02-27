import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import { StaticRouter, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Context as DocusaurusContext } from "@docusaurus/core/lib/client/docusaurusContext";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function ServerStyle({ from: children }) {
  let style = null;

  const location = useLocation();
  const context = useDocusaurusContext();
  const sheet = new ServerStyleSheet();

  try {
    renderToString(
      sheet.collectStyles(
        <HelmetProvider>
          <StaticRouter location={location}>
            <DocusaurusContext.Provider value={context}>
              {children}
            </DocusaurusContext.Provider>
          </StaticRouter>
        </HelmetProvider>
      )
    );
    style = sheet.getStyleElement();
  } catch (error) {
    console.error(error);
  } finally {
    sheet.seal();
  }

  return style;
}

function ClientStyle() {
  return null;
}

export default typeof window === "undefined" ? ServerStyle : ClientStyle;
