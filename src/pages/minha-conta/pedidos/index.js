import { auth } from '../../../Contexts/AppContext';
// Components
import Head from 'next/head';
import Layout from '../../../components/Layout';
import MyAccOrders from '../../../components/MyAccOrders';
import MyAccLayout from '../../../components/MyAccLayout';
import serverClient from '../../../graphql/serverClient';
import GET_ME from '../../../graphql/queries/GetMe';
import GET_ORDERS from '../../../graphql/queries/GetOrders';

export default function MinhaContaPedidos({ initialData }) {
  return (
    <>
      <Head>
        <title>Meus Pedidos - Hola Cartão</title>
      </Head>
      <Layout>
        <MyAccLayout>
          <MyAccOrders initialData={initialData} />
        </MyAccLayout>
      </Layout>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const token = auth(ctx);

  const user = await serverClient(token).request(GET_ME);

  const userID = user !== undefined ? user.me.id : -1;
  const orders = await serverClient(token).request(GET_ORDERS, {
    id: userID
  });

  return {
    props: { initialData: { user, orders } } // will be passed to the page component as props
  };
}
