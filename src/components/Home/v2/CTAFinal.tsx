import React from "react";
import Translate from "@docusaurus/Translate";
import { ArrowRight, Github } from "lucide-react";
import Container from "@site/src/components/ui/Container";
import Section from "@site/src/components/ui/Section";
import Button from "@site/src/components/ui/Button";
import GradientText from "@site/src/components/ui/GradientText";
import Spotlight from "@site/src/components/ui/Spotlight";
import RevealOnScroll from "@site/src/components/ui/RevealOnScroll";

const CTAFinal: React.FC = () => (
  <Section>
    <Container>
      <RevealOnScroll>
        <Spotlight color="rgba(37, 211, 102, 0.18)" size={500}>
          <div
            style={{
              padding: "clamp(2.5rem, 6vw, 4.5rem) clamp(1.5rem, 4vw, 3rem)",
              borderRadius: "28px",
              border: "1px solid var(--wpp-border)",
              background: "var(--wpp-grad-card)",
              textAlign: "center",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.035em",
                lineHeight: 1.05,
                margin: "0 auto 1rem auto",
                maxWidth: "780px",
              }}
            >
              <Translate id="home.cta.headline">
                Start automating in minutes,
              </Translate>{" "}
              <GradientText>
                <Translate id="home.cta.headline.accent">
                  scale for years.
                </Translate>
              </GradientText>
            </h2>
            <p
              style={{
                color: "var(--wpp-muted)",
                fontSize: "1.1rem",
                maxWidth: "620px",
                margin: "0 auto 2rem auto",
                lineHeight: 1.6,
              }}
            >
              <Translate id="home.cta.subtitle">
                Free, open-source, MIT licensed. No credentials required to
                start exploring.
              </Translate>
            </p>
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Button as="a" size="lg" href="/docs/tutorial/intro">
                <Translate id="home.cta.button">Read the docs</Translate>
                <ArrowRight size={18} />
              </Button>
              <Button
                as="a"
                variant="ghost"
                size="lg"
                href="https://github.com/wppconnect-team/wppconnect"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} />
                <Translate id="home.cta.github">Star on GitHub</Translate>
              </Button>
            </div>
          </div>
        </Spotlight>
      </RevealOnScroll>
    </Container>
  </Section>
);

export default CTAFinal;
