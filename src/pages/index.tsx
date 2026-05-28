import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import HeroV2 from "@site/src/components/Home/v2/Hero";
import StatsRow from "@site/src/components/Home/v2/Stats";
import AboutV2 from "@site/src/components/Home/v2/About";
import EcosystemV2 from "@site/src/components/Home/v2/Ecosystem";
import StackMarquee from "@site/src/components/Home/v2/StackMarquee";
import WhyOpenSource from "@site/src/components/Home/v2/WhyOpenSource";
import SponsorV2 from "@site/src/components/Home/v2/Sponsor";
import CTAFinal from "@site/src/components/Home/v2/CTAFinal";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — open-source WhatsApp automation`}
      description="WPPConnect is an open-source ecosystem for WhatsApp automation. Library, server and tooling built by the community."
    >
      <main>
        <HeroV2 />
        <StatsRow />
        <AboutV2 />
        <EcosystemV2 />
        <StackMarquee />
        <WhyOpenSource />
        <SponsorV2 />
        <CTAFinal />
      </main>
    </Layout>
  );
}
