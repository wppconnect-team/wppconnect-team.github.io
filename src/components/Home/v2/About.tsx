import React from "react";
import Translate from "@docusaurus/Translate";
import { Home as HomeIcon, Settings, Users } from "lucide-react";
import Container from "@site/src/components/ui/Container";
import Section from "@site/src/components/ui/Section";
import Card from "@site/src/components/ui/Card";
import TiltCard from "@site/src/components/ui/TiltCard";
import RevealOnScroll from "@site/src/components/ui/RevealOnScroll";
import Badge from "@site/src/components/ui/Badge";
import GradientText from "@site/src/components/ui/GradientText";

type Pillar = {
  icon: React.ReactNode;
  title: React.ReactNode;
  desc: React.ReactNode;
  accent: string;
};

const PILLARS: Pillar[] = [
  {
    icon: <HomeIcon size={22} />,
    title: <Translate id="whoweare">Who we are</Translate>,
    desc: (
      <Translate id="about.weareateam">
        We are a team that started an OpenSource project that performs automation
        on WhatsApp
      </Translate>
    ),
    accent: "rgba(37, 211, 102, 0.35)",
  },
  {
    icon: <Settings size={22} />,
    title: <Translate id="about.wedo">What we do?</Translate>,
    desc: (
      <Translate id="about.wedo.desc">
        The WPPConnect Team creates open-source tools for automating and
        integrating with WhatsApp Web, enabling efficient communication and bot
        development
      </Translate>
    ),
    accent: "rgba(34, 211, 238, 0.35)",
  },
  {
    icon: <Users size={22} />,
    title: <Translate id="about.ourteam">Our Team</Translate>,
    desc: (
      <Translate id="about.ourteam.desc">
        A team of professionals who perform maintenance and provide improvements
        for all the solutions we offer
      </Translate>
    ),
    accent: "rgba(139, 92, 246, 0.35)",
  },
];

const AboutV2: React.FC = () => (
  <Section id="about">
    <Container>
      <RevealOnScroll>
        <div style={{ maxWidth: "720px", marginBottom: "3rem" }}>
          <Badge variant="green" style={{ marginBottom: "1rem" }}>
            <Translate id="aboutus">About us</Translate>
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
            <Translate id="about.headline">More than a library.</Translate>{" "}
            <GradientText>
              <Translate id="about.headline.accent">An ecosystem.</Translate>
            </GradientText>
          </h2>
        </div>
      </RevealOnScroll>

      <div
        style={{
          display: "grid",
          gap: "1.25rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
      >
        {PILLARS.map((p, i) => (
          <RevealOnScroll key={i} delay={i * 0.1}>
            <TiltCard>
              <Card accent={p.accent} style={{ height: "100%" }}>
                <div
                  style={{
                    display: "inline-flex",
                    width: 44,
                    height: 44,
                    borderRadius: "12px",
                    alignItems: "center",
                    justifyContent: "center",
                    background: p.accent,
                    color: "#07080a",
                    marginBottom: "1rem",
                  }}
                >
                  {p.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    margin: "0 0 0.5rem 0",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    color: "var(--wpp-muted)",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {p.desc}
                </p>
              </Card>
            </TiltCard>
          </RevealOnScroll>
        ))}
      </div>
    </Container>
  </Section>
);

export default AboutV2;
