import React from 'react';

export interface IStaticContext {
  notFound?: boolean;
  url?: string;
}

const NotFound = ({ staticContext }: { staticContext: IStaticContext }) => {
  if (staticContext) {
    staticContext.notFound = true;
  }
  return (
    <div>
      <h1>Page not found</h1>
    </div>
  );
}

export default {
  component: NotFound,
}