"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const ReactQueryProviders = ({ children }: { children: React.ReactNode }) => {
  const [queryCLient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 3,
          },
        },
      }),
  );
  return (
    <QueryClientProvider client={queryCLient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProviders;
