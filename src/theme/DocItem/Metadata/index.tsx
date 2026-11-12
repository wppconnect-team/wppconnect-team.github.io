import React from "react";
import OriginalMetadata from "@theme-original/DocItem/Metadata";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import EnglishFallbackMetadata from "@site/src/components/EnglishFallbackMetadata";

export default function DocItemMetadata() {
  const { metadata } = useDoc();
  return (
    <>
      <OriginalMetadata />
      <EnglishFallbackMetadata source={metadata.source} />
    </>
  );
}
