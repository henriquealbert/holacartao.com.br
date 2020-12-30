import { NextSeo } from 'next-seo';
import Layout from '@/components/Layout';
import FormRecoveryPass from '@/components/FormRecoveryPass';

export default function CreateNewPass({ query }) {
  return (
    <>
      <NextSeo title="Crie sua nova senha - Hola Cartão" />

      <Layout>
        <FormRecoveryPass query={query} />
      </Layout>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const query = ctx.query;
  return {
    props: { query } // will be passed to the page component as props
  };
}
