import { auth } from '@/Contexts/AppContext';
// Components
import Head from 'next/head';
import Layout from '@/components/Layout';
import MyAcc from '@/components/MyAcc';
import MyAccLayout from '@/components/MyAccLayout';

export default function MinhaConta() {
  return (
    <>
      <Head>
        <title>Minha Conta - Hola Cartão</title>
      </Head>
      <Layout>
        <MyAccLayout>
          <MyAcc />
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
