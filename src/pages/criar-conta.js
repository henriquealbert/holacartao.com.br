import Head from 'next/head';

import Layout from '@/components/Layout';

import FormCreate from '@/components/FormCreate';

export default function CriarConta() {
  return (
    <>
      <Head>
        <title>Cadastre-se - Hola Cartão</title>
      </Head>
      <Layout>
        <FormCreate />
      </Layout>
    </>
  );
}
