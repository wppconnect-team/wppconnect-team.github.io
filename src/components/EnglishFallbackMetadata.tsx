import React from "react";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useAlternatePageUtils } from "@docusaurus/theme-common/internal";

export default function EnglishFallbackMetadata({ source }: { source: string }) {
  const { i18n: { currentLocale, defaultLocale } } = useDocusaurusContext();
  const { createUrl } = useAlternatePageUtils();
  if (currentLocale === defaultLocale || !/^@site\/(docs|blog)\//.test(source)) {
    return null;
  }
  const url = createUrl({ locale: defaultLocale, fullyQualified: true });
  return (
    <Head>
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />
    </Head>
  );
}
