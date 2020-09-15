import Layout from '../components/Layout';
import TermsPage from '../components/TermsPage';
import serverClient from '../graphql/serverClient';
import GET_TERMS from '../graphql/queries/GetTermsPage';
import nextCookie from 'next-cookies';

export default function PoliticaPrivacidade({ data }) {
  return (
    <Layout>
      <TermsPage data={data} />
    </Layout>
  );
}

export async function getStaticProps(ctx) {
  const { token } = nextCookie(ctx);

  const res = await serverClient(token).request(GET_TERMS);
  return {
    props: {
      data: res
    } // will be passed to the page component as props
  };
}
