import React, { ReactNode, ComponentType } from "react";

type Provider = ComponentType<{ children: ReactNode }>;

export const buildProviderTree = (providers: Provider[]): Provider => {
  if (providers.length === 1) {
    return providers[0];
  }
  const A = providers.shift() as Provider;
  const B = providers.shift() as Provider;

  return buildProviderTree([
    ({ children }) => (
      <A>
        <B>{children}</B>
      </A>
    ),
    ...providers,
  ]);
};
