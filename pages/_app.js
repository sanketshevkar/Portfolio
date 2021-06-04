import '../styles/globals.css';
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from '../components/Navbar';
import '../styles/Navbar.css';
import '../styles/About.css';

function MyApp({ Component, pageProps }) {

  return(
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  )}

export default MyApp
