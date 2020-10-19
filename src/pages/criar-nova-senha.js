import Head from 'next/head';
import Layout from '../components/Layout';
import FormRecoveryPass from '../components/FormRecoveryPass';

export default function CreateNewPass({ query }) {
  return (
    <>
      <Head>
        <title>Crie sua nova senha - Hola Cartão</title>
      </Head>
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
