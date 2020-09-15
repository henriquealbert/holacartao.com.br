import {} from '../Contexts/AppContext';
// Components
import Layout from '../components/Layout';
import ThankYou from '../components/ThankYou';
import Head from 'next/head';
import nextCookie from 'next-cookies';
import serverClient from '../graphql/serverClient';
import GET_ME from '../graphql/queries/GetMe';
import GET_OBRIGADO from '../graphql/queries/GetObrigado';

function Obrigado({ initialData }) {
  return (
    <>
      <Head>
        <title>Obrigado! - Hola Cartão</title>
      </Head>
      <Layout>
        <ThankYou initialData={initialData} />
      </Layout>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { token } = nextCookie(ctx);

  const user = await serverClient(token).request(GET_ME);

  const userID = user !== undefined ? user.me.id : -1;
  const data = await serverClient(token).request(GET_OBRIGADO, {
    id: userID
  });

  return {
    props: { initialData: { user, data } } // will be passed to the page component as props
  };
}

export default Obrigado;
