import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.scss";
import whatsappVersion from "./versions.json";

function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">WhatsApp Versions</h1>
        <p className="hero__subtitle">Current Version</p>
        <div className={clsx(styles.buttons, "margin-bottom--lg")}>
          <span className="button button--secondary button--lg">
            {whatsappVersion.currentVersion}
          </span>
        </div>
        {whatsappVersion.currentBeta && (
          <>
            <p className="hero__subtitle">Current Beta Version</p>
            <div className={styles.buttons}>
              <span className="button button--secondary button--lg">
                {whatsappVersion.currentBeta}
              </span>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

function CardTitle({ version, beta }: { version: string; beta: boolean }) {
  const list: JSX.Element[] = [];

  list.push(<>{version.replace("-beta", "")}</>);

  list.push(<> </>);
  if (beta) {
    list.push(<span className="badge badge--warning">beta</span>);
  } else {
    list.push(<span className="badge badge--success">stable</span>);
  }
  if (
    version === whatsappVersion.currentVersion ||
    version.replace("-beta", "") === whatsappVersion.currentBeta
  ) {
    list.push(<> </>);
    list.push(<span className="badge badge--info">current</span>);
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

  const width = (1 - (end - now) / (end - start)) * 100;

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
            Released on {released}, expires on {expire}
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
  const { siteConfig } = useDocusaurusContext();

  const versions = whatsappVersion.versions.slice().reverse();

  return (
    <Layout
      title={`${siteConfig.title} - WhatsApp Versions`}
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
