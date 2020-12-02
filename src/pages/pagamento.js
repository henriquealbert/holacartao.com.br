/* eslint-disable no-undef */
import Layout from '@/components/Layout';
import Payment from '@/components/Payment';
import Head from 'next/head';

export default function Pagamento() {
  return (
    <>
      <Head>
        <title>Finalize e Imprima o seu Cartão - Hola Cartão</title>
      </Head>
      <Layout>
        <Payment />
      </Layout>
    </>
  );
}
