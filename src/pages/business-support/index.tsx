import React from "react";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Translate from "@docusaurus/Translate";
import { ArrowRight, Check, Clock3, ShieldCheck } from "lucide-react";
import styles from "./index.module.scss";

const DISCORD_URL = "https://discord.gg/JU5JGGKGNG";

type TierProps = {
  name: string;
  price: string;
  response: React.ReactNode;
  mitigation: React.ReactNode;
  features: React.ReactNode[];
  featured?: boolean;
};

function Tier({ name, price, response, mitigation, features, featured }: TierProps) {
  return (
    <article className={`${styles.tier} ${featured ? styles.featured : ""}`}>
      {featured && (
        <span className={styles.pill}>
          <Translate id="businessSupport.enterpriseBadge">Fastest response</Translate>
        </span>
      )}
      <Heading as="h2">{name}</Heading>
      <p className={styles.price}>
        {price}
        <span>
          <Translate id="businessSupport.perMonth">/month</Translate>
        </span>
      </p>
      <dl className={styles.targets}>
        <div>
          <dt><Translate id="businessSupport.initialResponse">Initial response</Translate></dt>
          <dd>{response}</dd>
        </div>
        <div>
          <dt><Translate id="businessSupport.mitigationTarget">Mitigation target</Translate></dt>
          <dd>{mitigation}</dd>
        </div>
      </dl>
      <ul>
        {features.map((feature, index) => (
          <li key={index}><Check size={18} aria-hidden />{feature}</li>
        ))}
      </ul>
      <a className={styles.button} href={DISCORD_URL} target="_blank" rel="noreferrer">
        <Translate id="businessSupport.apply">Apply for the pilot</Translate>
        <ArrowRight size={18} aria-hidden />
      </a>
    </article>
  );
}

export default function BusinessSupport(): JSX.Element {
  return (
    <Layout
      title="Business Support"
      description="Priority incident response and mitigation targets for companies running WPPConnect in production."
    >
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.eyebrow}>
              <ShieldCheck size={17} aria-hidden />
              <Translate id="businessSupport.pilot">Limited B2B pilot</Translate>
            </span>
            <Heading as="h1">
              <Translate id="businessSupport.title">Production incidents deserve a direct path to maintainers.</Translate>
            </Heading>
            <p className={styles.lead}>
              <Translate id="businessSupport.subtitle">
                Priority triage and documented mitigation targets for reproducible WA-JS and WPPConnect regressions that stop production.
              </Translate>
            </p>
            <div className={styles.availability}>
              <Clock3 size={18} aria-hidden />
              <Translate id="businessSupport.hours">
                Coverage: Monday–Friday, 09:00–18:00 BRT, excluding Brazilian national holidays.
              </Translate>
            </div>
          </div>
        </section>

        <section className={`container ${styles.content}`}>
          <div className={styles.notice}>
            <strong><Translate id="businessSupport.enrollmentTitle">Enrollment status</Translate></strong>
            <p>
              <Translate id="businessSupport.enrollmentBody">
                The organization sponsorship profile is being prepared. Pilot applications are handled through the official Discord until organization billing is available.
              </Translate>
            </p>
          </div>

          <div className={styles.grid}>
            <Tier
              name="Pro"
              price="US$ 250"
              response={<Translate id="businessSupport.proResponse">Up to 8 business hours</Translate>}
              mitigation={<Translate id="businessSupport.proMitigation">48 hours after confirmation</Translate>}
              features={[
                <Translate id="businessSupport.logo">Company logo in the project README</Translate>,
                <Translate id="businessSupport.privateIssue">Private incident intake and priority triage</Translate>,
                <Translate id="businessSupport.webhookIncluded">Compatibility webhook included when available</Translate>,
              ]}
            />
            <Tier
              name="Enterprise"
              price="US$ 500"
              featured
              response={<Translate id="businessSupport.enterpriseResponse">Up to 2 business hours</Translate>}
              mitigation={<Translate id="businessSupport.enterpriseMitigation">24 hours after confirmation</Translate>}
              features={[
                <Translate id="businessSupport.logo">Company logo in the project README</Translate>,
                <Translate id="businessSupport.channel">Dedicated private Discord channel</Translate>,
                <Translate id="businessSupport.webhookIncluded">Compatibility webhook included when available</Translate>,
              ]}
            />
          </div>

          <section className={styles.terms}>
            <Heading as="h2"><Translate id="businessSupport.howItWorks">How the service target works</Translate></Heading>
            <div className={styles.termGrid}>
              <div>
                <Heading as="h3"><Translate id="businessSupport.covered">Covered</Translate></Heading>
                <p><Translate id="businessSupport.coveredBody">Reproducible regressions in supported WA-JS or WPPConnect versions that interrupt an existing production flow.</Translate></p>
              </div>
              <div>
                <Heading as="h3"><Translate id="businessSupport.mitigation">Mitigation</Translate></Heading>
                <p><Translate id="businessSupport.mitigationBody">A patch, compatible version, version pin, feature flag, or documented workaround that restores the affected flow.</Translate></p>
              </div>
              <div>
                <Heading as="h3"><Translate id="businessSupport.excluded">Not covered</Translate></Heading>
                <p><Translate id="businessSupport.excludedBody">Account bans, Meta policy enforcement, customer infrastructure, unsupported versions, custom code, or incorrect integration.</Translate></p>
              </div>
            </div>
            <p className={styles.disclaimer}>
              <Translate id="businessSupport.disclaimer">
                Targets begin after the issue is reproduced and confirmed. They are response and mitigation targets, not a guarantee that third-party platform changes can always be reversed.
              </Translate>
            </p>
          </section>

          <section className={styles.pilotCta}>
            <div>
              <Heading as="h2"><Translate id="businessSupport.threeCompanies">Three companies, then we measure.</Translate></Heading>
              <p><Translate id="businessSupport.threeCompaniesBody">The first cohort is limited to two Pro companies and one Enterprise company so the team can validate capacity and publish real service-level results.</Translate></p>
            </div>
            <a className={styles.button} href={DISCORD_URL} target="_blank" rel="noreferrer">
              <Translate id="businessSupport.talk">Talk to the team</Translate>
              <ArrowRight size={18} aria-hidden />
            </a>
          </section>
        </section>
      </main>
    </Layout>
  );
}
