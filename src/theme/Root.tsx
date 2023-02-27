import React from 'react';

import ServerStyle from './ServerStyle';

function Root({ children }: { children: React.Component }): JSX.Element {
  return (
    <>
      <ServerStyle from={children} />
      {children}
    </>
  );
}

export default Root;