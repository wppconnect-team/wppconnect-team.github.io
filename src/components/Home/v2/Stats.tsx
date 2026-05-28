import React from "react";
import Translate from "@docusaurus/Translate";
import { Star, Download, Users, GitCommit } from "lucide-react";
import Container from "@site/src/components/ui/Container";
import Section from "@site/src/components/ui/Section";
import RevealOnScroll from "@site/src/components/ui/RevealOnScroll";

type Stat = {
  icon: React.ReactNode;
  value: string;
  labelId: string;
  fallback: string;
};

const STATS: Stat[] = [
  {
    icon: <Star size={18} />,
    value: "4.6k+",
    labelId: "home.stats.stars",
    fallback: "GitHub Stars",
  },
  {
    icon: <Download size={18} />,
    value: "1M+",
    labelId: "home.stats.downloads",
    fallback: "NPM Downloads",
  },
  {
    icon: <Users size={18} />,
    value: "120+",
    labelId: "home.stats.contributors",
    fallback: "Contributors",
  },
  {
    icon: <GitCommit size={18} />,
    value: "10k+",
    labelId: "home.stats.commits",
    fallback: "Commits",
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
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
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
                <Translate id={s.labelId}>{s.fallback}</Translate>
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
