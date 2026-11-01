import React, { useEffect, useMemo, useState } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { ArrowUpRight, Search } from "lucide-react";
import data from "./versions.json";
import styles from "./index.module.scss";

const SIZE = 18;
const channel = (version: string, beta: boolean) =>
  version.includes("alpha") ? "alpha" : beta ? "beta" : "stable";

export default function Versions(): React.JSX.Element {
  const pt = useDocusaurusContext().i18n.currentLocale === "pt-BR";
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
  }, []);
  const versions = useMemo(
    () =>
      data.versions
        .slice()
        .reverse()
        .filter(
          (item) =>
            item.version.toLowerCase().includes(query.trim().toLowerCase()) &&
            (filter === "all" || channel(item.version, item.beta) === filter),
        ),
    [query, filter],
  );
  const pages = Math.max(1, Math.ceil(versions.length / SIZE));
  const current = Math.min(page, pages);
  const latest = data.currentAlpha || data.currentVersion;
  const date = (value: string) =>
    new Intl.DateTimeFormat(pt ? "pt-BR" : "en", {
      dateStyle: "medium",
      timeZone: "UTC",
    }).format(new Date(value));
  return (
    <Layout
      title={pt ? "Versões do WhatsApp" : "WhatsApp Versions"}
      description={
        pt
          ? "Explore o histórico de versões do WhatsApp Web."
          : "Explore the WhatsApp Web version registry."
      }
    >
      <main className={styles.page}>
        <header className="portal-intro">
          <span className="portal-eyebrow">
            {pt ? "REGISTRO DE VERSÕES" : "VERSION REGISTRY"}
          </span>
          <h1>
            WhatsApp Web.
            <br />
            {pt ? "Cada versão, em um lugar." : "Every version, one place."}
          </h1>
          <p>
            {pt
              ? "Consulte os lançamentos, compare os canais e encontre a versão que você precisa para sua integração."
              : "Browse releases, compare channels, and find the version you need for your integration."}
          </p>
        </header>
        <section
          className={styles.latest}
          aria-label={pt ? "Versão atual" : "Current version"}
        >
          <div>
            <span className="portal-eyebrow">
              {pt ? "ALPHA ATUAL" : "CURRENT ALPHA"}
            </span>
            <h2>{latest}</h2>
            <p>
              {pt
                ? "Dados do registro público wa-version."
                : "From the public wa-version registry."}
            </p>
          </div>
          <a
            className="portal-button"
            href={`https://web.whatsapp.com/?v=${encodeURIComponent(latest)}`}
          >
            {pt ? "Abrir WhatsApp Web" : "Open WhatsApp Web"}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </section>
        <section aria-labelledby="registry-heading">
          <div className={styles.sectionTitle}>
            <h2 id="registry-heading">
              {pt ? "Histórico de versões" : "Release history"}
            </h2>
            <a href="https://github.com/wppconnect-team/wa-version">
              {pt ? "Ver fonte no GitHub" : "View source on GitHub"}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className={styles.toolbar}>
            <div className={styles.search}>
              <Search size={19} aria-hidden="true" />
              <label className="sr-only" htmlFor="version-search">
                {pt ? "Buscar versão" : "Search versions"}
              </label>
              <input
                id="version-search"
                type="search"
                placeholder={
                  pt ? "Buscar uma versão..." : "Search for a version..."
                }
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(1);
                }}
              />
            </div>
            <label className={styles.filter}>
              {pt ? "Canal" : "Channel"}
              <select
                value={filter}
                onChange={(e) => {
                  setFilter(e.target.value);
                  setPage(1);
                }}
              >
                <option value="all">
                  {pt ? "Todos os canais" : "All channels"}
                </option>
                <option value="alpha">Alpha</option>
                <option value="beta">Beta</option>
                <option value="stable">{pt ? "Estável" : "Stable"}</option>
              </select>
            </label>
          </div>
          <p className={styles.count} role="status">
            {versions.length} {pt ? "versões encontradas" : "versions found"}
          </p>
          <div className={styles.grid}>
            {versions
              .slice((current - 1) * SIZE, current * SIZE)
              .map((item) => (
                <article key={item.version} className={styles.card}>
                  <div className={styles.cardTop}>
                    <span className={styles.channel}>
                      {channel(item.version, item.beta)}
                    </span>
                    {item.version === latest && (
                      <span className={styles.current}>
                        {pt ? "Atual" : "Current"}
                      </span>
                    )}
                  </div>
                  <h3>
                    <a
                      href={`https://web.whatsapp.com/?v=${encodeURIComponent(item.version)}`}
                    >
                      {item.version}
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  </h3>
                  <dl>
                    <div>
                      <dt>{pt ? "Lançamento" : "Released"}</dt>
                      <dd>
                        <time dateTime={item.released}>
                          {date(item.released)}
                        </time>
                      </dd>
                    </div>
                    <div>
                      <dt>{pt ? "Expiração" : "Expires"}</dt>
                      <dd>
                        <time dateTime={item.expire}>{date(item.expire)}</time>
                      </dd>
                    </div>
                  </dl>
                  {now !== null && now > Date.parse(item.expire) && (
                    <span className={styles.expired}>
                      {pt ? "Expirada" : "Expired"}
                    </span>
                  )}
                </article>
              ))}
          </div>
          {!versions.length && (
            <div className="portal-note">
              <strong>
                {pt ? "Nenhuma versão encontrada." : "No versions found."}
              </strong>
              <p>
                {pt
                  ? "Tente outro número ou selecione todos os canais."
                  : "Try another version number or select all channels."}
              </p>
              <button
                className="portal-button"
                onClick={() => {
                  setQuery("");
                  setFilter("all");
                  setPage(1);
                }}
              >
                {pt ? "Limpar filtros" : "Clear filters"}
              </button>
            </div>
          )}
          {pages > 1 && (
            <nav
              className={styles.pagination}
              aria-label={pt ? "Paginação das versões" : "Version pagination"}
            >
              <button
                disabled={current === 1}
                onClick={() => setPage(current - 1)}
              >
                {pt ? "Anterior" : "Previous"}
              </button>
              <span aria-live="polite">
                {current} / {pages}
              </span>
              <button
                disabled={current === pages}
                onClick={() => setPage(current + 1)}
              >
                {pt ? "Próxima" : "Next"}
              </button>
            </nav>
          )}
        </section>
        <aside className="portal-note">
          <strong>
            {pt ? "Pronto para integrar?" : "Ready to integrate?"}
          </strong>
          <p>
            {pt
              ? "Escolha uma ferramenta do ecossistema e siga o guia de instalação."
              : "Choose a tool from the ecosystem and follow the installation guide."}
          </p>
          <Link to="/docs/projects">
            {pt ? "Explorar projetos" : "Explore projects"}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </aside>
      </main>
    </Layout>
  );
}
