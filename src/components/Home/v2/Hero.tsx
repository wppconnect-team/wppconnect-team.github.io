import React from "react";
import Translate, { translate } from "@docusaurus/Translate";
import { ArrowRight, Github, BookOpen, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@site/src/components/ui/Container";
import Section from "@site/src/components/ui/Section";
import GradientText from "@site/src/components/ui/GradientText";
import Spotlight from "@site/src/components/ui/Spotlight";
import GlowEffect from "@site/src/components/ui/GlowEffect";
import Button from "@site/src/components/ui/Button";
import Badge from "@site/src/components/ui/Badge";
import AnimatedText from "@site/src/components/ui/AnimatedText";

const Chip: React.FC<{
  children: React.ReactNode;
  delay?: number;
  x: string;
  y: string;
}> = ({ children, delay = 0, x, y }) => {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, scale: 0.85 }}
      animate={reduced ? undefined : { opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "absolute",
        left: x,
        top: y,
        padding: "0.55rem 0.95rem",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid var(--wpp-border)",
        borderRadius: "9999px",
        backdropFilter: "blur(10px)",
        fontFamily: "var(--wpp-font-mono)",
        fontSize: "0.8rem",
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        color: "var(--wpp-text)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
      }}
    >
      {children}
    </motion.div>
  );
};

const HeroV2: React.FC = () => {
  const reduced = useReducedMotion();
  return (
    <Section
      style={{
        paddingTop: "clamp(1.5rem, 3vw, 3rem)",
        paddingBottom: "clamp(3rem, 6vw, 5rem)",
        overflow: "hidden",
      }}
    >
      <Spotlight color="rgba(37, 211, 102, 0.16)" size={780}>
        <Container>
          <div
            style={{
              position: "relative",
              minHeight: "min(80vh, 760px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1.5rem",
            }}
          >
            <GlowEffect
              color="rgba(37, 211, 102, 0.45)"
              size={520}
              blur={120}
              opacity={0.35}
              style={{ left: "-160px", top: "-120px" }}
            />
            <GlowEffect
              color="rgba(139, 92, 246, 0.35)"
              size={420}
              blur={140}
              opacity={0.25}
              style={{ right: "-140px", bottom: "-80px" }}
            />

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 14 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "inline-flex", gap: "0.6rem", alignItems: "center" }}
            >
              <Badge variant="green">
                <Sparkles size={12} />
                <Translate id="home.badge.opensource">
                  Open-source · MIT
                </Translate>
              </Badge>
              <Badge variant="cyan">
                <Translate id="home.badge.community">
                  Community-driven
                </Translate>
              </Badge>
            </motion.div>

            <h1
              style={{
                fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.035em",
                fontWeight: 800,
                margin: 0,
                maxWidth: "900px",
              }}
            >
              <AnimatedText
                text={translate({
                  id: "home.hero.line1",
                  message: "If you can imagine,",
                })}
              />
              <br />
              <GradientText as="span" style={{ fontWeight: 800 }}>
                <AnimatedText
                  text={translate({
                    id: "home.hero.line2",
                    message: "we can automate.",
                  })}
                  delay={0.15}
                />
              </GradientText>
            </h1>

            <motion.p
              initial={reduced ? false : { opacity: 0, y: 14 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontSize: "clamp(1.05rem, 1.6vw, 1.3rem)",
                color: "var(--wpp-muted)",
                maxWidth: "640px",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              <Translate id="home.hero.subtitle">
                A premium open-source ecosystem for WhatsApp automation. Library,
                server, and tooling built by developers, for developers.
              </Translate>
            </motion.p>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 14 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: "flex",
                gap: "0.75rem",
                flexWrap: "wrap",
                marginTop: "0.5rem",
              }}
            >
              <Button
                as="a"
                href="https://github.com/wppconnect-team/wppconnect"
                target="_blank"
                rel="noreferrer"
                size="lg"
              >
                <Github size={18} />
                <Translate id="home.hero.cta.lib">Explore the library</Translate>
                <ArrowRight size={18} />
              </Button>
              <Button
                as="a"
                variant="ghost"
                size="lg"
                href="/docs/tutorial/intro"
              >
                <BookOpen size={18} />
                <Translate id="home.hero.cta.tutorial">
                  Read the tutorial
                </Translate>
              </Button>
            </motion.div>

            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                display: "block",
              }}
            >
              <Chip delay={0.5} x="62%" y="8%">Node.js</Chip>
              <Chip delay={0.6} x="80%" y="24%">TypeScript</Chip>
              <Chip delay={0.7} x="68%" y="56%">Puppeteer</Chip>
              <Chip delay={0.8} x="82%" y="72%">Docker</Chip>
            </div>
          </div>
        </Container>
      </Spotlight>
    </Section>
  );
};

export default HeroV2;
