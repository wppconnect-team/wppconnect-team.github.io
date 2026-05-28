import React from "react";
import Translate from "@docusaurus/Translate";
import { Star, Download, Users, GitCommit } from "lucide-react";
import Container from "@site/src/components/ui/Container";
import Section from "@site/src/components/ui/Section";
import RevealOnScroll from "@site/src/components/ui/RevealOnScroll";

type Stat = {
  icon: React.ReactNode;
  value: string;
  label: React.ReactNode;
};

const STATS: Stat[] = [
  {
    icon: <Star size={18} />,
    value: "4.6k+",
    label: <Translate id="home.stats.stars">GitHub Stars</Translate>,
  },
  {
    icon: <Download size={18} />,
    value: "1M+",
    label: <Translate id="home.stats.downloads">NPM Downloads</Translate>,
  },
  {
    icon: <Users size={18} />,
    value: "120+",
    label: <Translate id="home.stats.contributors">Contributors</Translate>,
  },
  {
    icon: <GitCommit size={18} />,
    value: "10k+",
    label: <Translate id="home.stats.commits">Commits</Translate>,
  },
];

const StatsRow: React.FC = () => (
  <Section compact>
    <Container>
      <RevealOnScroll>
        <div
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            padding: "1.5rem",
            background: "var(--wpp-card-bg)",
            border: "1px solid var(--wpp-border)",
            borderRadius: "20px",
            backdropFilter: "blur(10px)",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
                padding: "1rem",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "var(--wpp-muted)",
                  fontFamily: "var(--wpp-font-mono)",
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {s.icon}
                {s.label}
              </div>
              <div
                style={{
                  fontFamily: "var(--wpp-font-sans)",
                  fontSize: "2.25rem",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "var(--wpp-text)",
                }}
              >
                {s.value}
              </div>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </Container>
  </Section>
);

export default StatsRow;
