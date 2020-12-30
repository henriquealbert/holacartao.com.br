import { NextSeo } from 'next-seo';

import Layout from '@/components/Layout';
import HelpPage from '@/components/HelpPage';
import serverClient from '@/graphql/serverClient';
import GET_HELP_PAGE from '@/graphql/queries/GetHelpPage';

export default function Ajuda({ data }) {
  return (
    <>
      <NextSeo title="Central de Ajuda - Hola Cartão" />

      <Layout>
        <HelpPage data={data} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const res = await serverClient().request(GET_HELP_PAGE);
  return {
    props: {
      data: res
    },
    revalidate: 60
  };
}
