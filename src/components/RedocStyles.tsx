import React from "react";

// Redocusaurus emits these style tags only on the server. Keep the container
// opaque during hydration so React 19 does not reconcile its server-only children.
// Redoc inserts its client styles through styled-components after mounting.
export function ServerStyles() {
  return (
    <div
      className="redocusaurus-styles"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: "" }}
    />
  );
}
