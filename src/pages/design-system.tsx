import React, { useState } from "react";
import Layout from "@theme/Layout";
import useMessages from "../i18n/useMessages";
import manifest from "../../design-system/manifest.json";

export default function DesignSystem() {
  const t = useMessages();
  const [done, setDone] = useState(false);
  return (
    <Layout
      title="WPPConnect Design System"
      description={t("designDescription")}
    >
      <main className="wpp-shell wpp-section">
        <header className="portal-intro">
          <span className="wpp-label">
            WPPConnect Design System / v{manifest.version}
          </span>
          <h1>{t("designTitle")}</h1>
          <p>{t("designDescription")}</p>
        </header>
        <h2>{t("designColors")}</h2>
        <div className="wpp-swatches">
          {(
            [
              ["background", "colorBackground"],
              ["card", "colorCard"],
              ["foreground", "colorForeground"],
              ["brand", "colorBrand"],
              ["muted-foreground", "colorMuted"],
              ["border", "colorBorder"],
            ] as const
          ).map(([color, key]) => (
            <div key={color}>
              <div
                className="wpp-swatch"
                style={{ background: `var(--${color})` }}
              />
              <strong>{t(key)}</strong>
              <code>--{color}</code>
            </div>
          ))}
        </div>
        <section className="wpp-design-section">
          <h2>{t("designTypography")}</h2>
          <h3>Geist</h3>
          <p>{t("heroDescription")}</p>
          <pre className="wpp-type-code">
            <code>Geist Mono / const session = 'my-session';</code>
          </pre>
        </section>
        <section className="wpp-design-section">
          <h2>{t("designControls")}</h2>
          <p>{t("designPreview")}</p>
          <div className="wpp-actions">
            <button className="wpp-action" onClick={() => setDone(true)}>
              {t("designPrimary")}
            </button>
            <button
              className="wpp-action wpp-action-secondary"
              onClick={() => setDone(false)}
            >
              {t("designSecondary")}
            </button>
          </div>
          <p role="status">{done ? t("designFeedback") : ""}</p>
          <label className="wpp-example-field">
            {t("designField")}
            <input placeholder={t("designPlaceholder")} />
          </label>
        </section>
        <div className="wpp-actions">
          <a href="https://cloud.wppconnect.io/design-system">
            {t("designCloud")}
          </a>
          <a href="https://github.com/wppconnect-team/wppconnect-team.github.io/tree/main/design-system">
            {t("designSource")}
          </a>
        </div>
        <p className="wpp-hash">
          <code>SHA256 {manifest.sha256}</code>
        </p>
      </main>
    </Layout>
  );
}
