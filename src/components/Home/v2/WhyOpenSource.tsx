import React from "react";
import Translate from "@docusaurus/Translate";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { GitMerge, Heart, Zap } from "lucide-react";
import Container from "@site/src/components/ui/Container";
import Section from "@site/src/components/ui/Section";
import Badge from "@site/src/components/ui/Badge";
import GradientText from "@site/src/components/ui/GradientText";

type Step = {
  icon: React.ReactNode;
  title: React.ReactNode;
  body: React.ReactNode;
  color: string;
};

const STEPS: Step[] = [
  {
    icon: <GitMerge size={20} />,
    title: <Translate id="home.why.s1.title">Transparent by design</Translate>,
    body: (
      <Translate id="home.why.s1.body">
        Every line of code lives on GitHub. Audit, fork, extend. The platform
        belongs to the community.
      </Translate>
    ),
    color: "var(--wpp-green)",
  },
  {
    icon: <Zap size={20} />,
    title: <Translate id="home.why.s2.title">Battle-tested</Translate>,
    body: (
      <Translate id="home.why.s2.body">
        Powering thousands of bots, customer service flows and integrations
        worldwide. Stable releases, careful breaking changes.
      </Translate>
    ),
    color: "var(--wpp-cyan)",
  },
  {
    icon: <Heart size={20} />,
    title: <Translate id="home.why.s3.title">Made with care</Translate>,
    body: (
      <Translate id="home.why.s3.body">
        Maintained by an active team that ships, listens, documents. We are
        building tools we'd want to use ourselves.
      </Translate>
    ),
    color: "var(--wpp-violet)",
  },
];

const WhyOpenSource: React.FC = () => {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLElement>,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 10]);
  const yShift = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <Section ref={ref}>
      <Container>
        <div
          style={{
            display: "grid",
            gap: "3rem",
            gridTemplateColumns: "minmax(0, 1fr)",
            alignItems: "start",
          }}
        >
          <div style={{ display: "grid", gap: "3rem", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)" }}>
            <div>
              <Badge variant="violet" style={{ marginBottom: "1rem" }}>
                <Translate id="home.why.eyebrow">Why open-source</Translate>
              </Badge>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  margin: "0 0 1rem 0",
                }}
              >
                <Translate id="home.why.headline">A platform that</Translate>{" "}
                <GradientText>
                  <Translate id="home.why.headline.accent">
                    grows with you.
                  </Translate>
                </GradientText>
              </h2>
              <p
                style={{
                  color: "var(--wpp-muted)",
                  lineHeight: 1.7,
                  fontSize: "1.05rem",
                  maxWidth: "520px",
                }}
              >
                <Translate id="home.why.intro">
                  WPPConnect is not a product. It's an open foundation where
                  developers, agencies and teams build the next generation of
                  conversational software on top of WhatsApp.
                </Translate>
              </p>

              <motion.div
                style={
                  reduced
                    ? { marginTop: "2.5rem" }
                    : { y: yShift, rotate, marginTop: "2.5rem" }
                }
                aria-hidden
              >
                <pre
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                    border: "1px solid var(--wpp-border)",
                    borderRadius: "16px",
                    padding: "1.25rem",
                    fontFamily: "var(--wpp-font-mono)",
                    fontSize: "0.85rem",
                    overflow: "hidden",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  <code>
                    {`import { create } from '@wppconnect-team/wppconnect';

const client = await create({ session: 'main' });
client.onMessage((msg) => {
  if (msg.body === 'ping') client.sendText(msg.from, 'pong');
});`}
                  </code>
                </pre>
              </motion.div>
            </div>

            <div style={{ display: "grid", gap: "1.25rem" }}>
              {STEPS.map((s, i) => (
                <motion.div
                  key={i}
                  initial={reduced ? false : { opacity: 0, x: 24 }}
                  whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    delay: i * 0.12,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    padding: "1.5rem",
                    border: "1px solid var(--wpp-border)",
                    borderRadius: "16px",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.005))",
                    backdropFilter: "blur(8px)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: "3px",
                      background: s.color,
                      opacity: 0.7,
                    }}
                  />
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: s.color,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {s.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      margin: "0 0 0.4rem 0",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p style={{ color: "var(--wpp-muted)", margin: 0, lineHeight: 1.6 }}>
                    {s.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default WhyOpenSource;
