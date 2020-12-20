import Head from 'next/head';

import FormLogin from '@/components/FormLogin';
import Layout from '@/components/Layout';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login - Hola Cartão</title>
      </Head>
      <Layout>
        <FormLogin />
      </Layout>
    </>
  );
}
