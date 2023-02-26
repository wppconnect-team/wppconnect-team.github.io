import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import { Container } from "./_style";
import AboutContainer from "../components/Home/AboutUs";
import ApoiarContainer from "../components/Home/Apoiar";
import DockerContainer from "../components/Home/Docker";
import FrontendContainer from "../components/Home/Frontend";
import HeroContainer from "../components/Home/Hero";
import ServidorContainer from "../components/Home/Servidor";
import ServerStyle from "./ServerStyle";

function Root({ children }) {
  return (
    <>
      <ServerStyle from={children} />
      {children}
    </>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Automatize o seu WhatsApp`}
      description="WWPPConnect is an open source project developed by the JavaScript community with the aim of exporting functions from WhatsApp Web to the node, which can be used to support the creation of any interaction, such as customer service, media sending, intelligence recognition based on phrases artificial and many other things, use your imagination..."
    >
      {/* <HomepageHeader /> */}
      <main>
        {/* <HomepageFeatures /> */}
        <Root>
          <Container>
            <HeroContainer />
            <AboutContainer />
            <ServidorContainer />
            <FrontendContainer />
            <DockerContainer />
            <ApoiarContainer />
          </Container>
        </Root>
      </main>
    </Layout>
  );
}
