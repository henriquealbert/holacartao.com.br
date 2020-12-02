import { auth } from '@/Contexts/AppContext';

// Components
import Head from 'next/head';
import Layout from '@/components/Layout';
import MyAccData from '@/components/MyAccData';
import MyAccLayout from '@/components/MyAccLayout';
import serverClient from '@/graphql/serverClient';
import GET_ME from '@/graphql/queries/GetMe';
import GET_USER from '@/graphql/queries/GetUser';

export default function MinhaContaDados({ initialData }) {
  return (
    <>
      <Head>
        <title>Meus Dados - Hola Cartão</title>
      </Head>
      <Layout>
        <MyAccLayout>
          <MyAccData initialData={initialData} />
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

  const userID = user !== undefined ? user.me.id : -1;
  const data = await serverClient(token).request(GET_USER, {
    id: userID
  });

  return {
    props: { initialData: { user, data } } // will be passed to the page component as props
  };
}
