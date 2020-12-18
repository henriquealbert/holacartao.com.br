import Head from 'next/head';

import Layout from '@/components/Layout';
import Hero from '@/components/Hero';

export default function Index() {
  return (
    <>
      <Head>
        <title>Início - Hola Cartão</title>
      </Head>
      <Layout home>
        <Hero />
      </Layout>
    </>
  );
}
