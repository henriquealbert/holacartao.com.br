import { auth } from '@/Contexts/AppContext';
// Components
import Layout from '@/components/Layout';
import MyAcc from '@/components/MyAcc';
import MyAccLayout from '@/components/MyAccLayout';
import { NextSeo } from 'next-seo';

export default function MinhaConta() {
  return (
    <>
      <NextSeo noindex={true} title="Minha Conta - Hola Cartão" />

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
