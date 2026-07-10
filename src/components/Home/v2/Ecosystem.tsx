import React from "react";
import Translate from "@docusaurus/Translate";
import {
  ArrowRight,
  Code2,
  Server,
  MonitorSmartphone,
  Smartphone,
  Star,
  Terminal,
  Package,
  Layers,
} from "lucide-react";
import Container from "@site/src/components/ui/Container";
import Section from "@site/src/components/ui/Section";
import Card from "@site/src/components/ui/Card";
import TiltCard from "@site/src/components/ui/TiltCard";
import RevealOnScroll from "@site/src/components/ui/RevealOnScroll";
import Badge from "@site/src/components/ui/Badge";
import GradientText from "@site/src/components/ui/GradientText";

type Product = {
  badge: React.ReactNode;
  title: string;
  desc: React.ReactNode;
  href: string;
  stars?: string;
  icon: React.ReactNode;
  accent: string;
  variant: "green" | "cyan" | "violet" | "default";
  featured?: boolean;
};

const PRODUCTS: Product[] = [
  {
    badge: <Translate id="home.eco.lib.badge">Library</Translate>,
    title: "WPPConnect",
    desc: (
      <Translate id="home.eco.lib.desc">
        The most starred project in the ecosystem: a Node.js library to send
        messages, build bots, and automate WhatsApp Web flows.
      </Translate>
    ),
    href: "https://github.com/wppconnect-team/wppconnect",
    stars: "3.4k",
    icon: <Code2 size={22} />,
    accent: "rgba(37, 211, 102, 0.35)",
    variant: "green",
    featured: true,
  },
  {
    badge: <Translate id="home.eco.server.badge">Server</Translate>,
    title: "WPPConnect Server",
    desc: (
      <Translate id="server.robust.desc">
        A ready-to-use REST API built on WPPConnect for sessions, messages,
        contacts, groups, and webhooks.
      </Translate>
    ),
    href: "https://github.com/wppconnect-team/wppconnect-server",
    stars: "1k",
    icon: <Server size={22} />,
    accent: "rgba(34, 211, 238, 0.35)",
    variant: "cyan",
    featured: true,
  },
  {
    badge: <Translate id="home.eco.wajs.badge">Frontend</Translate>,
    title: "WA-JS",
    desc: (
      <Translate id="home.eco.wajs.desc">
        Browser-side WhatsApp Web automation used to power extensions,
        integrations, and direct console workflows.
      </Translate>
    ),
    href: "https://github.com/wppconnect-team/wa-js",
    stars: "766",
    icon: <MonitorSmartphone size={22} />,
    accent: "rgba(139, 92, 246, 0.35)",
    variant: "violet",
    featured: true,
  },
  {
    badge: <Translate id="home.eco.delphi.badge">Delphi</Translate>,
    title: "WPP4Delphi",
    desc: (
      <Translate id="home.eco.delphi.desc">
        Bring WhatsApp Web automation to the Delphi ecosystem with a community
        project built around WPPConnect.
      </Translate>
    ),
    href: "https://github.com/wppconnect-team/WPP4Delphi",
    stars: "243",
    icon: <Layers size={22} />,
    accent: "rgba(236, 72, 153, 0.35)",
    variant: "default",
    featured: true,
  },
];

type Tool = {
  title: string;
  desc: React.ReactNode;
  href: string;
  stars: string;
  icon: React.ReactNode;
};

const TOOLS: Tool[] = [
  {
    title: "wa-version",
    desc: (
      <Translate id="home.eco.waversion.desc">
        Always up-to-date WhatsApp Web versions registry, updated automatically.
      </Translate>
    ),
    href: "https://github.com/wppconnect-team/wa-version",
    stars: "168",
    icon: <Package size={20} />,
  },
  {
    title: "wa-proto",
    desc: (
      <Translate id="home.eco.waproto.desc">
        Protobuf files from WhatsApp Web with automated checks and updates.
      </Translate>
    ),
    href: "https://github.com/wppconnect-team/wa-proto",
    stars: "47",
    icon: <Package size={20} />,
  },
  {
    title: "server-cli",
    desc: (
      <Translate id="home.eco.cli.desc">
        Command-line interface to manage WPPConnect Server quickly.
      </Translate>
    ),
    href: "https://github.com/wppconnect-team/server-cli",
    stars: "37",
    icon: <Terminal size={20} />,
  },
  {
    title: "mobile",
    desc: (
      <Translate id="home.eco.mobile.desc">
        Automation that runs WhatsApp Web inside Android and iOS mobile browsers.
      </Translate>
    ),
    href: "https://github.com/wppconnect-team/mobile",
    stars: "26",
    icon: <Smartphone size={20} />,
  },
  {
    title: "wa-js-api-server",
    desc: (
      <Translate id="home.eco.api.desc">
        A small API server that provides URL previews for the WA-JS library.
      </Translate>
    ),
    href: "https://github.com/wppconnect-team/wa-js-api-server",
    stars: "22",
    icon: <Server size={20} />,
  },
  {
    title: "wppconnect-extension",
    desc: (
      <Translate id="home.eco.extension.desc">
        Browser extension project for WhatsApp Web workflows powered by the
        WPPConnect ecosystem.
      </Translate>
    ),
    href: "https://github.com/wppconnect-team/wppconnect-extension",
    stars: "15",
    icon: <MonitorSmartphone size={20} />,
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
                A constellation of tools,
              </Translate>{" "}
              <GradientText>
                <Translate id="home.eco.headline.accent">
                  one mission.
                </Translate>
              </GradientText>
            </h2>
          </div>
          <a
            href="https://github.com/wppconnect-team"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              color: "var(--ifm-color-primary)",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.95rem",
            }}
          >
            <Translate id="home.eco.viewall">See all repositories</Translate>
            <ArrowRight size={16} />
          </a>
        </div>
      </RevealOnScroll>

      <div
        style={{
          display: "grid",
          gap: "1.25rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          marginBottom: "2.5rem",
        }}
      >
        {PRODUCTS.map((p, i) => (
          <RevealOnScroll key={i} delay={i * 0.08}>
            <TiltCard>
              <Card
                accent={p.accent}
                style={{ height: "100%", minHeight: "280px" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    gap: "0.85rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
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
                    {p.stars && (
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.3rem",
                          color: "var(--wpp-muted)",
                          fontFamily: "var(--wpp-font-mono)",
                          fontSize: "0.78rem",
                        }}
                      >
                        <Star size={12} />
                        {p.stars}
                      </span>
                    )}
                  </div>
                  <Badge variant={p.variant}>{p.badge}</Badge>
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
                      marginTop: "0.25rem",
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

      <RevealOnScroll>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            margin: "1rem 0 1.5rem 0",
          }}
        >
          <span
            style={{
              color: "var(--wpp-muted)",
              fontFamily: "var(--wpp-font-mono)",
              fontSize: "0.78rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <Translate id="home.eco.tools.eyebrow">
              Popular repositories
            </Translate>
          </span>
          <span
            aria-hidden
            style={{
              flex: 1,
              height: 1,
              background: "var(--wpp-border)",
            }}
          />
        </div>
      </RevealOnScroll>

      <div
        style={{
          display: "grid",
          gap: "0.85rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
        }}
      >
        {TOOLS.map((t, i) => (
          <RevealOnScroll key={i} delay={i * 0.04}>
            <a
              href={t.href}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                padding: "1.15rem",
                borderRadius: "14px",
                border: "1px solid var(--wpp-border)",
                background: "var(--wpp-card-bg)",
                textDecoration: "none",
                color: "inherit",
                transition: "border-color 200ms ease, transform 200ms ease",
                height: "100%",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--ifm-color-primary)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--wpp-border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "var(--ifm-color-primary)",
                  }}
                >
                  {t.icon}
                  <span style={{ fontWeight: 700, color: "var(--wpp-text)" }}>
                    {t.title}
                  </span>
                </div>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    color: "var(--wpp-muted)",
                    fontFamily: "var(--wpp-font-mono)",
                    fontSize: "0.75rem",
                  }}
                >
                  <Star size={11} />
                  {t.stars}
                </span>
              </div>
              <p
                style={{
                  color: "var(--wpp-muted)",
                  margin: 0,
                  fontSize: "0.88rem",
                  lineHeight: 1.55,
                }}
              >
                {t.desc}
              </p>
            </a>
          </RevealOnScroll>
        ))}
      </div>
    </Container>
  </Section>
);

export default EcosystemV2;
