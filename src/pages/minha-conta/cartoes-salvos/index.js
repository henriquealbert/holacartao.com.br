import { auth } from '../../../Contexts/AppContext';
// Components
import Head from 'next/head';
import Layout from '../../../components/Layout';
import MyAccSavedCards from '../../../components/MyAccSavedCards';
import MyAccLayout from '../../../components/MyAccLayout';
import serverClient from '../../../graphql/serverClient';
import GET_ME from '../../../graphql/queries/GetMe';
import GET_SAVED_CARDS from '../../../graphql/queries/GetSavedCards';

export default function MinhaContaCartoesSalvos({ initialData }) {
  return (
    <>
      <Head>
        <title>Meus Cartões Salvos - Hola Cartão</title>
      </Head>
      <Layout>
        <MyAccLayout>
          <MyAccSavedCards initialData={initialData} />
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

  const user = await serverClient(token).request(GET_ME);

  const savedCards = await serverClient(token).request(GET_SAVED_CARDS, {
    id: user.me.id
  });

  return {
    props: { initialData: { user, savedCards } } // will be passed to the page component as props
  };
}
