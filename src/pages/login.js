import { NextSeo } from 'next-seo';

import FormLogin from '@/components/FormLogin';
import Layout from '@/components/Layout';

export default function Login() {
  return (
    <>
      <NextSeo title="Bem Vindo Novamente - Hola Cartão" />

      <Layout>
        <FormLogin />
      </Layout>
    </>
  );
}
