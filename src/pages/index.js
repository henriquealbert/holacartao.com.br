import Head from 'next/head';

import Layout from '@/components/Layout';
import HomeHero from '@/components/HomeHero';
import HomeDescription from '@/components/HomeDescription';

export default function Index() {
  return (
    <>
      <Head>
        <title>Início - Hola Cartão</title>
      </Head>
      <Layout home>
        <HomeHero />
        <HomeDescription />
      </Layout>
    </>
  );
}
