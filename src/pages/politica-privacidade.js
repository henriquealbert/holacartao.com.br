import Layout from '@/components/Layout';
import TermsPage from '@/components/TermsPage';
import serverClient from '@/graphql/serverClient';
import GET_TERMS from '@/graphql/queries/GetTermsPage';

export default function PoliticaPrivacidade({ data }) {
  return (
    <Layout>
      <TermsPage data={data} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await serverClient().request(GET_TERMS);
  return {
    props: {
      data: res
    },
    revalidate: 60
  };
}
