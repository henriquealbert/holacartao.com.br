import { NextSeo } from 'next-seo';
import { auth } from '@/Contexts/AppContext';

// Components
import Layout from '@/components/Layout';
import MyAccDataEdit from '@/components/MyAccDataEdit';
import MyAccLayout from '@/components/MyAccLayout';

export default function MinhaContaDadosEdit() {
  return (
    <>
      <NextSeo noindex={true} title="Editar Meus Dados - Hola Cartão" />

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
