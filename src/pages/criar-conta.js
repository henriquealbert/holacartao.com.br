import { NextSeo } from 'next-seo';

import Layout from '@/components/Layout';

import FormCreate from '@/components/FormCreate';

export default function CriarConta() {
  return (
    <>
      <NextSeo title="Cadastre-se - Hola Cartão" />

      <Layout>
        <FormCreate />
      </Layout>
    </>
  );
}
