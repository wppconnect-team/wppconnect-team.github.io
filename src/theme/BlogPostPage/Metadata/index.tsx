import React from "react";
import OriginalMetadata from "@theme-original/BlogPostPage/Metadata";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";
import EnglishFallbackMetadata from "@site/src/components/EnglishFallbackMetadata";

export default function BlogPostPageMetadata() {
  const { metadata } = useBlogPost();
  return (
    <>
      <OriginalMetadata />
      <EnglishFallbackMetadata source={metadata.source} />
    </>
  );
}
