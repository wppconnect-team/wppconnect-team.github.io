import React from "react";
import Translate from "@docusaurus/Translate";
import { ArrowRight, Code2, Server, Boxes, MonitorSmartphone } from "lucide-react";
import Container from "@site/src/components/ui/Container";
import Section from "@site/src/components/ui/Section";
import Card from "@site/src/components/ui/Card";
import TiltCard from "@site/src/components/ui/TiltCard";
import RevealOnScroll from "@site/src/components/ui/RevealOnScroll";
import Badge from "@site/src/components/ui/Badge";
import GradientText from "@site/src/components/ui/GradientText";

type Product = {
  badge: string;
  badgeId: string;
  title: string;
  titleId: string;
  desc: React.ReactNode;
  href: string;
  icon: React.ReactNode;
  accent: string;
  variant: "green" | "cyan" | "violet" | "default";
};

const PRODUCTS: Product[] = [
  {
    badge: "Library",
    badgeId: "home.eco.lib.badge",
    title: "WPPConnect",
    titleId: "home.eco.lib.title",
    desc: (
      <Translate id="home.eco.lib.desc">
        The core Node.js library. Send messages, build bots and automate any
        WhatsApp Web flow through a clean API.
      </Translate>
    ),
    href: "https://github.com/wppconnect-team/wppconnect",
    icon: <Code2 size={22} />,
    accent: "rgba(37, 211, 102, 0.35)",
    variant: "green",
  },
  {
    badge: "Server",
    badgeId: "home.eco.server.badge",
    title: "WPPConnect Server",
    titleId: "home.eco.server.title",
    desc: (
      <Translate id="server.robust.desc">
        A simple and robust server made in NodeJS, with all the functions that
        WPPConnect offers.
      </Translate>
    ),
    href: "https://github.com/wppconnect-team/wppconnect-server",
    icon: <Server size={22} />,
    accent: "rgba(34, 211, 238, 0.35)",
    variant: "cyan",
  },
  {
    badge: "Frontend",
    badgeId: "home.eco.wajs.badge",
    title: "WA-JS",
    titleId: "home.eco.wajs.title",
    desc: (
      <Translate id="extension.desc">
        WAJS is an open-source library designed for easy integration and
        automation of WhatsApp Web, allowing developers to create extensions and
        use it directly in the browser console.
      </Translate>
    ),
    href: "https://github.com/wppconnect-team/wa-js",
    icon: <MonitorSmartphone size={22} />,
    accent: "rgba(139, 92, 246, 0.35)",
    variant: "violet",
  },
  {
    badge: "Container",
    badgeId: "home.eco.docker.badge",
    title: "WPP Docker",
    titleId: "home.eco.docker.title",
    desc: (
      <Translate id="docker.description">
        Seriously, we're even making Docker available. Check it out by clicking
        the button below
      </Translate>
    ),
    href: "https://github.com/wppconnect-team/wpp-docker",
    icon: <Boxes size={22} />,
    accent: "rgba(236, 72, 153, 0.35)",
    variant: "default",
  },
];

const EcosystemV2: React.FC = () => (
  <Section id="ecosystem" variant="subtle">
    <Container>
      <RevealOnScroll>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          <div style={{ maxWidth: "640px" }}>
            <Badge variant="cyan" style={{ marginBottom: "1rem" }}>
              <Translate id="home.eco.eyebrow">The Ecosystem</Translate>
            </Badge>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              <Translate id="home.eco.headline">
                Four projects, one mission:
              </Translate>{" "}
              <GradientText>
                <Translate id="home.eco.headline.accent">
                  ship faster.
                </Translate>
              </GradientText>
            </h2>
          </div>
        </div>
      </RevealOnScroll>

      <div
        style={{
          display: "grid",
          gap: "1.25rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
      >
        {PRODUCTS.map((p, i) => (
          <RevealOnScroll key={i} delay={i * 0.08}>
            <TiltCard>
              <Card accent={p.accent} style={{ height: "100%", minHeight: "260px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      width: 48,
                      height: 48,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "14px",
                      background: p.accent,
                      color: "#07080a",
                    }}
                  >
                    {p.icon}
                  </div>
                  <Badge variant={p.variant}>
                    <Translate id={p.badgeId}>{p.badge}</Translate>
                  </Badge>
                  <h3
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      margin: 0,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--wpp-muted)",
                      margin: 0,
                      lineHeight: 1.6,
                      flex: 1,
                    }}
                  >
                    {p.desc}
                  </p>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      color: "var(--ifm-color-primary)",
                      textDecoration: "none",
                      fontWeight: 600,
                      marginTop: "0.5rem",
                    }}
                  >
                    <Translate id="view">View</Translate>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </Card>
            </TiltCard>
          </RevealOnScroll>
        ))}
      </div>
    </Container>
  </Section>
);

export default EcosystemV2;
