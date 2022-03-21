import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { AuthProvider } from "../contexts/AuhContext";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
