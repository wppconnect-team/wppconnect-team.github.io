import React from "react";

import ServerStyle from "./ServerStyle";
import LenisProvider from "@site/src/components/ui/LenisProvider";
import ScrollProgress from "@site/src/components/ui/ScrollProgress";
import NoiseTexture from "@site/src/components/ui/NoiseTexture";

function Root({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <>
      <ServerStyle from={children} />
      <LenisProvider>
        <ScrollProgress />
        <NoiseTexture />
        {children}
      </LenisProvider>
    </>
  );
}

export default Root;
