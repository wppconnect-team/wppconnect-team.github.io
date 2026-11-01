import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
  ArrowUpRight,
  BookOpen,
  Code2,
  Globe,
  Layers,
  Server,
  Terminal,
} from "lucide-react";

export default function DocsPortal({
  projects = false,
}: {
  projects?: boolean;
}) {
  const pt = useDocusaurusContext().i18n.currentLocale === "pt-BR";
  const items = projects
    ? [
        {
          icon: Code2,
          title: "WPPConnect",
          tag: "Node.js",
          text: pt
            ? "Controle sessões e automatize mensagens diretamente na sua aplicação Node.js."
            : "Manage sessions and automate messages directly from your Node.js application.",
          href: "/docs/projects/wppconnect-lib/",
        },
        {
          icon: Server,
          title: "WPPConnect Server",
          tag: "REST API",
          text: pt
            ? "Integre qualquer linguagem com uma API HTTP, sessões e webhooks."
            : "Connect any language through an HTTP API, sessions, and webhooks.",
          href: "/docs/projects/wppserver/introduction",
        },
        {
          icon: Globe,
          title: "WA-JS",
          tag: "Browser",
          text: pt
            ? "Acesse funções do WhatsApp Web em extensões e integrações no navegador."
            : "Access WhatsApp Web functions in browser extensions and integrations.",
          href: "/docs/projects/wa-js/",
        },
        {
          icon: Layers,
          title: "WPP4Delphi",
          tag: "Delphi",
          text: pt
            ? "Leve as integrações do ecossistema para suas aplicações Delphi."
            : "Bring the ecosystem to your Delphi applications.",
          href: "/docs/projects/wpp4delphi/introduction",
        },
      ]
    : [
        {
          icon: Terminal,
          title: pt ? "Comece pelo tutorial" : "Start with the tutorial",
          tag: "01",
          text: pt
            ? "Instale a biblioteca, conecte uma sessão e envie sua primeira mensagem."
            : "Install the library, connect a session, and send your first message.",
          href: "/docs/tutorial/intro",
        },
        {
          icon: Layers,
          title: pt ? "Encontre seu projeto" : "Find your project",
          tag: "02",
          text: pt
            ? "Compare a biblioteca Node.js, a API REST e as ferramentas de navegador."
            : "Compare the Node.js library, REST API, and browser tools.",
          href: "/docs/projects",
        },
        {
          icon: BookOpen,
          title: pt ? "Explore a API" : "Explore the API",
          tag: "03",
          text: pt
            ? "Consulte os endpoints do Server e os exemplos de requisições."
            : "Look up Server endpoints and request examples.",
          href: "/swagger/wppconnect-server",
        },
      ];
  return (
    <>
      <div className="portal-intro">
        <span className="portal-eyebrow">
          {projects
            ? pt
              ? "ECOSSISTEMA"
              : "ECOSYSTEM"
            : pt
              ? "CENTRAL DO DESENVOLVEDOR"
              : "DEVELOPER HUB"}
        </span>
        <h1>
          {projects
            ? pt
              ? "A ferramenta certa para sua ideia."
              : "The right tool for your idea."
            : pt
              ? "Construa com WPPConnect."
              : "Build with WPPConnect."}
        </h1>
        <p>
          {projects
            ? pt
              ? "Um ecossistema aberto. Escolha onde sua integração vai rodar e comece com a ferramenta que faz sentido para você."
              : "One open ecosystem. Choose where your integration will run and start with the tool that fits."
            : pt
              ? "Da primeira conexão à sua próxima integração. Guias práticos e referências para encontrar seu caminho."
              : "From your first connection to your next integration. Practical guides and references to help you find your way."}
        </p>
      </div>
      <div className="portal-grid">
        {items.map(({ icon: Icon, title, tag, text, href }) => (
          <Link key={title} to={href} className="portal-card">
            <div className="portal-card-top">
              <Icon size={23} aria-hidden="true" />
              <span>{tag}</span>
            </div>
            <h2>{title}</h2>
            <p>{text}</p>
            <span className="portal-card-link">
              {pt ? "Explorar" : "Explore"}
              <ArrowUpRight size={17} aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
      <aside className="portal-note">
        <strong>
          {pt
            ? "Construa junto com a comunidade."
            : "Build alongside the community."}
        </strong>
        <p>
          {pt
            ? "Tire dúvidas no Discord ou contribua com exemplos, correções e documentação no GitHub."
            : "Ask questions on Discord or contribute examples, fixes, and documentation on GitHub."}
        </p>
        <a href="https://discord.gg/JU5JGGKGNG">
          Discord <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <a href="https://github.com/wppconnect-team">
          GitHub <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </aside>
    </>
  );
}
