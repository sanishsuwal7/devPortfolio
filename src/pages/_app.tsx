import Layout from '@/components/Layout';
import App, { AppContext, AppInitialProps, AppProps } from 'next/app';
import '../styles/styles.css';
import styles from '@/styles/style.module.scss';
import { ChakraBaseProvider } from '@chakra-ui/react';

type AppOwnProps = { example: string };

export default function MyApp({
  Component,
  pageProps,
}: AppProps & AppOwnProps) {
  return (
    <div className={styles.wrapper}>
      <ChakraBaseProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraBaseProvider>
    </div>
  );
}

MyApp.getInitialProps = async (
  context: AppContext,
): Promise<AppOwnProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context);

  return { ...ctx, example: 'data' };
};
