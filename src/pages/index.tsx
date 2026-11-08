import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import {
  ArrowRight,
  Code2,
  Server,
  Blocks,
  Terminal,
  Cloud,
  GitPullRequest,
  BookOpen,
  Heart,
  Check,
} from "lucide-react";
import useMessages from "../i18n/useMessages";

const example = `import * as wppconnect from '@wppconnect-team/wppconnect';

const client = await wppconnect.create({
  session: 'my-session',
});

client.onMessage(async (message) => {
  if (message.body === 'Hello') {
    await client.sendText(message.from, 'Hello, world!');
  }
});`;

export default function Home(): React.JSX.Element {
  const t = useMessages();
  const products = [
    {
      name: "WPPConnect",
      tag: "Node.js",
      icon: Code2,
      description: t("libraryDescription"),
      href: "https://github.com/wppconnect-team/wppconnect",
    },
    {
      name: "WPPConnect Server",
      tag: "REST API",
      icon: Server,
      description: t("serverDescription"),
      href: "https://github.com/wppconnect-team/wppconnect-server",
    },
    {
      name: "WA-JS",
      tag: "JavaScript",
      icon: Blocks,
      description: t("wajsDescription"),
      href: "https://github.com/wppconnect-team/wa-js",
    },
    {
      name: "WPP4Delphi",
      tag: "Delphi",
      icon: Terminal,
      description: t("delphiDescription"),
      href: "https://github.com/wppconnect-team/WPP4Delphi",
    },
  ];
  return (
    <Layout title={t("metaTitle")} description={t("metaDescription")}>
      <main className="wpp-home">
        <section className="wpp-hero wpp-shell" aria-labelledby="hero-title">
          <div className="wpp-hero-copy">
            <span className="wpp-label">
              <span className="wpp-status-dot" aria-hidden="true" />
              {t("eyebrow")}
            </span>
            <h1 id="hero-title">
              {t("heroTitle")} <span>{t("heroAccent")}</span>
            </h1>
            <p className="wpp-lead">{t("heroDescription")}</p>
            <div className="wpp-actions">
              <Link className="wpp-action" to="/docs/tutorial/intro">
                {t("startBuilding")}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <a
                className="wpp-action wpp-action-secondary"
                href="https://cloud.wppconnect.io/"
              >
                {t("exploreCloud")}
                <Cloud size={16} aria-hidden="true" />
              </a>
            </div>
            <p className="wpp-small">{t("heroNote")}</p>
          </div>
          <div className="wpp-code-panel">
            <div className="wpp-code-header">
              <span>index.ts</span>
              <span>WPPConnect / Node.js</span>
            </div>
            <pre aria-label={t("codeExample")}>
              <code>{example}</code>
            </pre>
            <div className="wpp-code-footer">
              <Check size={14} aria-hidden="true" />
              {t("codeNote")}
            </div>
          </div>
        </section>
        <div className="wpp-principles">
          <div className="wpp-shell">
            {(
              ["openSource", "yourInfrastructure", "communityBuilt"] as const
            ).map((key) => (
              <span key={key}>
                <Check size={16} aria-hidden="true" />
                {t(key)}
              </span>
            ))}
          </div>
        </div>
        <section
          className="wpp-section wpp-shell"
          aria-labelledby="ecosystem-title"
        >
          <div className="wpp-section-heading">
            <div>
              <span className="wpp-label">{t("ecosystemEyebrow")}</span>
              <h2 id="ecosystem-title">{t("ecosystemTitle")}</h2>
            </div>
            <p>{t("ecosystemDescription")}</p>
          </div>
          <div className="wpp-product-grid">
            {products.map(({ name, tag, icon: Icon, description, href }) => (
              <a className="wpp-product" href={href} key={name}>
                <div className="wpp-product-top">
                  <Icon size={22} aria-hidden="true" />
                  <span className="wpp-badge">{tag}</span>
                </div>
                <h3>{name}</h3>
                <p>{description}</p>
                <span className="wpp-product-link">
                  {t("viewProject")}
                  <ArrowRight size={16} aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </section>
        <section
          className="wpp-section wpp-section-tint"
          aria-labelledby="cloud-title"
        >
          <div className="wpp-shell wpp-split">
            <div>
              <span className="wpp-label">WPPConnect Cloud</span>
              <h2 id="cloud-title">{t("cloudTitle")}</h2>
              <p className="wpp-lead">{t("cloudDescription")}</p>
              <a className="wpp-action" href="https://cloud.wppconnect.io/">
                {t("exploreCloud")}
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
            <ul className="wpp-feature-list">
              {(["cloudSessions", "cloudKeys", "cloudWebhooks"] as const).map(
                (key) => (
                  <li key={key}>
                    <Check size={18} aria-hidden="true" />
                    <div>{t(key)}</div>
                  </li>
                ),
              )}
            </ul>
          </div>
        </section>
        <section
          className="wpp-section wpp-shell"
          aria-labelledby="community-title"
        >
          <div className="wpp-section-heading">
            <div>
              <span className="wpp-label">{t("communityEyebrow")}</span>
              <h2 id="community-title">{t("communityTitle")}</h2>
            </div>
            <p>{t("communityDescription")}</p>
          </div>
          <div className="wpp-resource-grid">
            <Link className="wpp-resource" to="/docs/">
              <BookOpen size={20} aria-hidden="true" />
              <h3>{t("learnTitle")}</h3>
              <p>{t("learnDescription")}</p>
              <span>
                {t("readDocs")}
                <ArrowRight size={16} aria-hidden="true" />
              </span>
            </Link>
            <a
              className="wpp-resource"
              href="https://github.com/wppconnect-team"
            >
              <GitPullRequest size={20} aria-hidden="true" />
              <h3>{t("contributeTitle")}</h3>
              <p>{t("contributeDescription")}</p>
              <span>
                GitHub
                <ArrowRight size={16} aria-hidden="true" />
              </span>
            </a>
            <a
              className="wpp-resource"
              href="https://opencollective.com/wppconnect"
            >
              <Heart size={20} aria-hidden="true" />
              <h3>{t("sponsorTitle")}</h3>
              <p>{t("sponsorDescription")}</p>
              <span>
                Open Collective
                <ArrowRight size={16} aria-hidden="true" />
              </span>
            </a>
          </div>
          <div className="wpp-community">
            <div>
              <h3>{t("questionsTitle")}</h3>
              <p>{t("questionsDescription")}</p>
            </div>
            <a
              className="wpp-action wpp-action-secondary"
              href="https://discord.gg/JU5JGGKGNG"
            >
              {t("joinCommunity")}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
