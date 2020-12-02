import { auth } from '@/Contexts/AppContext';
// Components
import Head from 'next/head';
import Layout from '@/components/Layout';
import MyAccHelp from '@/components/MyAccHelp';
import MyAccLayout from '@/components/MyAccLayout';

export default function MinhaContaAjuda() {
  return (
    <>
      <Head>
        <title>Ajuda - Hola Cartão</title>
      </Head>
      <Layout>
        <MyAccLayout>
          <MyAccHelp />
        </MyAccLayout>
      </Layout>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const token = auth(ctx);
  if (!token) {
    return {
      props: {}
    };
  }
  return {
    props: {} // will be passed to the page component as props
  };
}
