import { authAdmin } from '@/Contexts/AdminContext';

// Components
import Head from 'next/head';
import serverClient from '@/graphql/serverClient';
import GET_SINGLE_ORDER from '@/graphql/admin/GetSingleOrder';
import AdminHeader from '@/components/AdminHeader';
import AdminSingleOrder from '@/components/AdminSingleOrder';

export default function AdminDashboardPedidosID({ order }) {
  return (
    <>
      <Head>
        <title>Pedido #2020{order.order.id} - Admin - Hola Cartão</title>
      </Head>
      <AdminHeader />
      <AdminSingleOrder initialData={order} />
    </>
  );
}

export async function getServerSideProps(ctx) {
  const adminToken = authAdmin(ctx);
  if (!adminToken) {
    return {
      props: {}
    };
  }
  const { id } = await ctx.query;
  const orderID = id.replace('2020', '');

  const order = await serverClient(adminToken).request(GET_SINGLE_ORDER, {
    id: orderID
  });

  return {
    props: { order }
  };
}
