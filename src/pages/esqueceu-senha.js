import { NextSeo } from 'next-seo';
import Layout from '@/components/Layout';
import FormLostPass from '@/components/FormLostPass';

export default function FogotPass() {
  return (
    <>
      <NextSeo title="Esqueceu sua senha? - Hola Cartão" />

      <Layout>
        <FormLostPass />
      </Layout>
    </>
  );
}
