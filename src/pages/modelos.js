import { NextSeo } from 'next-seo';

import serverClient from '@/graphql/serverClient';
import GET_CARD_MODELS from '@/graphql/queries/GetCardModels';

import Layout from '@/components/Layout';
import ModelosList from '@/components/ModelosList';

export default function Modelos({ data }) {
  const title = 'Modelos de Cartão de Visita - Hola Cartão';
  const description =
    'Diversos modelos de cartão de visitas prontos para você customizar.';
  const SEO = {
    title,
    description,
    openGraph: {
      title,
      description
    }
  };
  return (
    <>
      <NextSeo {...SEO} />
      <Layout>
        <ModelosList data={data} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const res = await serverClient().request(GET_CARD_MODELS);
  return {
    props: {
      data: res
    },
    revalidate: 1
  };
}
