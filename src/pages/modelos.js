import Head from 'next/head';

import serverClient from '../graphql/serverClient';
import GET_CARD_MODELS from '../graphql/queries/GetCardModels';

import Layout from '../components/Layout';
// import StepsTwo from '../components/StepsTwo';
import ModelosList from '../components/ModelosList';

export default function Modelos({ data }) {
  return (
    <>
      <Head>
        <title>Modelos de Cartão - Hola Cartão</title>
      </Head>
      <Layout>
        {/* <StepsTwo /> */}
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
    } // will be passed to the page component as props
  };
}
