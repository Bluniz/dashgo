import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SideBarDrawerProvider } from "../contexts/SideBarDrawerContext";
import { makeServer } from "../services/mirage";
import { QueryClient, QueryClientProvider } from "react-query";

//! Por padrão o Chakra vem com o CSSReset como true.

function MyApp({ Component, pageProps }: AppProps) {
  // Essa variavel é setada automaticamente pelo Next
  if (process.env.NODE_ENV === "development") {
    makeServer();
  }

  //! Definindo cliente e provider
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SideBarDrawerProvider>
          <Component {...pageProps} />
        </SideBarDrawerProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
