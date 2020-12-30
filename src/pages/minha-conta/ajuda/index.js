import { NextSeo } from 'next-seo';
import { auth } from '@/Contexts/AppContext';
// Components
import Layout from '@/components/Layout';
import MyAccHelp from '@/components/MyAccHelp';
import MyAccLayout from '@/components/MyAccLayout';

export default function MinhaContaAjuda() {
  return (
    <>
      <NextSeo noindex={true} title="Ajuda - Hola Cartão" />

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
