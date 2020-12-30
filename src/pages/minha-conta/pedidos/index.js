import { NextSeo } from 'next-seo';
import { auth } from '@/Contexts/AppContext';
// Components
import Layout from '@/components/Layout';
import MyAccOrders from '@/components/MyAccOrders';
import MyAccLayout from '@/components/MyAccLayout';
import serverClient from '@/graphql/serverClient';
import GET_ME from '@/graphql/queries/GetMe';
import GET_ORDERS from '@/graphql/queries/GetOrders';

export default function MinhaContaPedidos({ initialData }) {
  return (
    <>
      <NextSeo noindex={true} title="Meus Pedidos - Hola Cartão" />

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

  if (!token) {
    return {
      props: {}
    };
  }

  const user = await serverClient(token).request(GET_ME);

  const orders = await serverClient(token).request(GET_ORDERS, {
    id: user.me.id
  });

  return {
    props: { initialData: { user, orders } } // will be passed to the page component as props
  };
}
