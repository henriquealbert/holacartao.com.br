import Head from 'next/head';
import Layout from '@/components/Layout';
import FormLostPass from '@/components/FormLostPass';

export default function FogotPass() {
  return (
    <>
      <Head>
        <title>Esqueceu sua senha? - Hola Cartão</title>
      </Head>
      <Layout>
        <FormLostPass />
      </Layout>
    </>
  );
}
