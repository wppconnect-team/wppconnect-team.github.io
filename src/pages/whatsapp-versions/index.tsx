import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import styles from "./index.module.scss";
import whatsappVersion from "./versions.json";

function HomepageHeader() {
  const colSize = whatsappVersion.currentBeta ? 6 : 12;

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <Translate>WhatsApp Versions</Translate>
        </h1>
        <div className="row">
          <div className={`col col--${colSize}`}>
            <p className="hero__subtitle">
              <Translate>Current Version</Translate>
            </p>
            <div className={clsx(styles.buttons, "margin-bottom--lg")}>
              <Link
                className="button button--secondary button--lg"
                href={`https://web.whatsapp.com/?v=${whatsappVersion.currentVersion}`}
              >
                {whatsappVersion.currentVersion}
              </Link>
            </div>
          </div>
          {whatsappVersion.currentBeta && (
            <div className={`col col--${colSize}`}>
              <p className="hero__subtitle">
                <Translate>Current Beta Version</Translate>
              </p>
              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  href={`https://web.whatsapp.com/?v=${whatsappVersion.currentBeta}`}
                >
                  {whatsappVersion.currentBeta}
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function CardTitle({ version, beta }: { version: string; beta: boolean }) {
  const list: JSX.Element[] = [];

  list.push(<>{version.replace("-beta", "")}</>);

  list.push(<> </>);
  if (beta) {
    list.push(
      <span className="badge badge--warning">
        <Translate>beta</Translate>
      </span>
    );
  } else {
    list.push(
      <span className="badge badge--success">
        <Translate>stable</Translate>
      </span>
    );
  }
  if (
    version === whatsappVersion.currentVersion ||
    version.replace("-beta", "") === whatsappVersion.currentBeta
  ) {
    list.push(<> </>);
    list.push(
      <span className="badge badge--info">
        <Translate>current</Translate>
      </span>
    );
  }

  return <>{list}</>;
}

function VersionProgress({
  released,
  expire,
}: {
  released: string;
  expire: string;
}) {
  const start = Date.parse(released);
  const end = Date.parse(expire);
  const now = Date.now();

  const width = Math.min((1 - (end - now) / (end - start)) * 100, 100);

  return (
    <div className={clsx(styles.progress)}>
      <div
        className={clsx(
          styles.progressBar,
          styles.progressBarStriped,
          styles.progressBarAnimated
        )}
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
}

interface VersionProps {
  version: string;
  beta: boolean;
  released: string;
  expire: string;
}

function VersionCard({ version, beta, released, expire }: VersionProps) {
  const { i18n } = useDocusaurusContext();

  return (
    <div className="col col--12 margin-bottom--lg">
      <div className={clsx("card")}>
        <div className="card__header">
          <Heading as="h3">
            <CardTitle version={version} beta={beta} />
          </Heading>
        </div>
        <div className="card__body">
          <p>
            {translate(
              {
                message: "Released on {released}, expires on {expire}",
              },
              {
                released: new Date(released).toLocaleString(i18n.currentLocale),
                expire: new Date(expire).toLocaleString(i18n.currentLocale),
              }
            )}
          </p>
        </div>
        <div className="card__footer">
          <VersionProgress released={released} expire={expire} />
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const versions = whatsappVersion.versions.slice().reverse();

  return (
    <Layout
      title={`WhatsApp Versions`}
      description="WPPConnect is an open source project developed by the JavaScript community with the aim of exporting functions from WhatsApp Web to the node, which can be used to support the creation of any interaction, such as customer service, media sending, intelligence recognition based on phrases artificial and many other things, use your imagination..."
    >
      <HomepageHeader />
      <main className="container margin-vert--lg">
        <div className="margin-bottom--lg">
          <Heading as="h3" id="latest">
            <Translate id="whatsappVersionsPage.all.title">
              All WhatsApp Versions
            </Translate>
          </Heading>
          <div className="row">
            {versions.map((version) => (
              <VersionCard key={version.version} {...version} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
