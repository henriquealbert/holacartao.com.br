import { authAdmin } from '@/Contexts/AdminContext';
import { NextSeo } from 'next-seo';

// Components
import serverClient from '@/graphql/serverClient';
import GET_SINGLE_ORDER from '@/graphql/admin/GetSingleOrder';
import AdminHeader from '@/components/AdminHeader';
import AdminSingleOrder from '@/components/AdminSingleOrder';

export default function AdminDashboardPedidosID({ order }) {
  return (
    <>
      <NextSeo
        noindex={true}
        title={`Pedido #2020${order.order.id} - Admin - Hola Cartão`}
      />

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
