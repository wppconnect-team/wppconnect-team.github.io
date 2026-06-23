import React from "react";
import Translate from "@docusaurus/Translate";
import Container from "@site/src/components/ui/Container";
import Section from "@site/src/components/ui/Section";
import MarqueeRow from "@site/src/components/ui/MarqueeRow";
import RevealOnScroll from "@site/src/components/ui/RevealOnScroll";

const ROW_1 = [
  "Node.js",
  "TypeScript",
  "Puppeteer",
  "Express",
  "Docker",
  "WebSockets",
  "REST",
  "Multi-device",
];

const ROW_2 = [
  "WhatsApp Web",
  "Webhooks",
  "MQTT",
  "Open Source",
  "MIT",
  "GitHub Actions",
  "MongoDB",
  "Redis",
];

const StackMarquee: React.FC = () => (
  <Section compact>
    <Container size="wide">
      <RevealOnScroll>
        <p
          style={{
            textAlign: "center",
            color: "var(--wpp-muted)",
            fontFamily: "var(--wpp-font-mono)",
            fontSize: "0.85rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        >
          <Translate id="home.stack.eyebrow">
            Built with the tools you already love
          </Translate>
        </p>
      </RevealOnScroll>
      <MarqueeRow items={ROW_1} direction="left" speedSec={42} />
      <div style={{ height: "1rem" }} />
      <MarqueeRow items={ROW_2} direction="right" speedSec={48} />
    </Container>
  </Section>
);

export default StackMarquee;
