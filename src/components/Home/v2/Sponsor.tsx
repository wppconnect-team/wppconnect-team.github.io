import React from "react";
import Translate from "@docusaurus/Translate";
import { ArrowRight, Code2, Heart, Youtube } from "lucide-react";
import Container from "@site/src/components/ui/Container";
import Section from "@site/src/components/ui/Section";
import Card from "@site/src/components/ui/Card";
import TiltCard from "@site/src/components/ui/TiltCard";
import RevealOnScroll from "@site/src/components/ui/RevealOnScroll";
import Badge from "@site/src/components/ui/Badge";
import GradientText from "@site/src/components/ui/GradientText";

type Item = {
  icon: React.ReactNode;
  title: string;
  body: React.ReactNode;
  link: string;
  linkLabel: React.ReactNode;
  accent: string;
};

const ITEMS: Item[] = [
  {
    icon: <Heart size={22} />,
    title: "Open Collective",
    body: (
      <>
        <Translate id="sponsor.weplatform">We use the platform </Translate>
        <b>Open Collective</b>{" "}
        <Translate id="sponsor.receipt">
          to fund maintenance, infrastructure, documentation, and the
          developers who keep WPPConnect reliable.
        </Translate>
      </>
    ),
    link: "https://opencollective.com/wppconnect",
    linkLabel: <Translate id="sponsor.opencollective.cta">Support us</Translate>,
    accent: "rgba(37, 211, 102, 0.35)",
  },
  {
    icon: <Youtube size={22} />,
    title: "YouTube",
    body: (
      <Translate id="sponsor.youtube">
        We have a YouTube channel where we make some tutorials on how to use our
        library/server/frontend and much more...
      </Translate>
    ),
    link: "https://www.youtube.com/channel/UCD7J9LG08PmGQrF5IS7Yv9A",
    linkLabel: <Translate id="followChannel">Follow Channel</Translate>,
    accent: "rgba(236, 72, 153, 0.35)",
  },
  {
    icon: <Code2 size={22} />,
    title: "Code contributions",
    body: (
      <>
        <Translate id="sponsor.giveastar">
          Improve the project with issues, pull requests, examples, and docs.
        </Translate>
        <br />
        <Translate id="sponsor.stardesc">
          Every useful contribution helps more teams adopt WPPConnect with
          confidence.
        </Translate>
      </>
    ),
    link: "https://github.com/wppconnect-team/wppconnect",
    linkLabel: <Translate id="sponsor.gogithub">Go to the Github</Translate>,
    accent: "rgba(139, 92, 246, 0.35)",
  },
];

const SponsorV2: React.FC = () => (
  <Section>
    <Container>
      <RevealOnScroll>
        <div style={{ maxWidth: "720px", marginBottom: "3rem" }}>
          <Badge variant="green" style={{ marginBottom: "1rem" }}>
            <Translate id="sponsor">Sponsor-us</Translate>
          </Badge>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              margin: "0 0 0.75rem 0",
            }}
          >
            <Translate id="sponsor.headline">Help us keep this</Translate>{" "}
            <GradientText>
              <Translate id="sponsor.headline.accent">free, useful, and evolving.</Translate>
            </GradientText>
          </h2>
          <p style={{ color: "var(--wpp-muted)", margin: 0, lineHeight: 1.7, fontSize: "1.05rem" }}>
            <Translate id="sponsor.desc">
              Use WPPConnect in your projects, sponsor the maintainers, share
              tutorials, or send code that makes the ecosystem stronger for the
              next developer.
            </Translate>
          </p>
        </div>
      </RevealOnScroll>

      <div
        style={{
          display: "grid",
          gap: "1.25rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
      >
        {ITEMS.map((it, i) => (
          <RevealOnScroll key={i} delay={i * 0.1}>
            <TiltCard>
              <Card accent={it.accent} style={{ height: "100%" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem", height: "100%" }}>
                  <div
                    style={{
                      display: "inline-flex",
                      width: 48,
                      height: 48,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "14px",
                      background: it.accent,
                      color: "#07080a",
                    }}
                  >
                    {it.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      margin: 0,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {it.title}
                  </h3>
                  <p style={{ color: "var(--wpp-muted)", margin: 0, lineHeight: 1.6, flex: 1 }}>
                    {it.body}
                  </p>
                  <a
                    href={it.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      color: "var(--ifm-color-primary)",
                      textDecoration: "none",
                      fontWeight: 600,
                    }}
                  >
                    {it.linkLabel}
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

export default SponsorV2;
