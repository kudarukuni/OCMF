import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import HomeLayout from '../components/Layouts/Home.Layout';
import dynamic from 'next/dynamic';
import { theme } from '../config/chakra.config';

require('@solana/wallet-adapter-react-ui/styles.css');

const WalletConnectionProvider: any = dynamic(
  () => import('../context/WalletConnectionProvider'),
  {
    ssr: false,
  }
);
export default function App({ Component, pageProps }: AppProps) {
  return (
    <WalletConnectionProvider>
      <ChakraProvider theme={theme}>
        <HomeLayout>
          <Component {...pageProps} />
        </HomeLayout>
      </ChakraProvider>
    </WalletConnectionProvider>
  );
}
