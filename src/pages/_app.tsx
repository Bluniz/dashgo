import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SideBarDrawerProvider } from "../contexts/SideBarDrawerContext";
import { makeServer } from "../services/mirage";

//! Por padrão o Chakra vem com o CSSReset como true.

function MyApp({ Component, pageProps }: AppProps) {
  // Essa variavel é setada automaticamente pelo Next
  if (process.env.NODE_ENV === "development") {
    makeServer();
  }

  return (
    <ChakraProvider theme={theme}>
      <SideBarDrawerProvider>
        <Component {...pageProps} />
      </SideBarDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
