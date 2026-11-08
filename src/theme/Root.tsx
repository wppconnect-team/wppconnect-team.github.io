import React from "react";
import ServerStyle from "./ServerStyle";
export default function Root({children}: {children: React.ReactNode}): React.JSX.Element {
  return <><ServerStyle from={children} />{children}</>;
}
