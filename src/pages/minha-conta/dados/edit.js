import { auth } from '@/Contexts/AppContext';

// Components
import Head from 'next/head';
import Layout from '@/components/Layout';
import MyAccDataEdit from '@/components/MyAccDataEdit';
import MyAccLayout from '@/components/MyAccLayout';

export default function MinhaContaDadosEdit() {
  return (
    <>
      <Head>
        <title>Editar Meus Dados - Hola Cartão</title>
      </Head>
      <Layout>
        <MyAccLayout>
          <MyAccDataEdit />
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
