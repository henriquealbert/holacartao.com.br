import { authAdmin } from '../../../Contexts/AdminContext';
import serverClient from '../../../graphql/serverClient';
import GET_ALL_ORDERS from '../../../graphql/admin/GetAllOrders';

import AdminHeader from '../../../components/AdminHeader';
import AdminSearch from '../../../components/AdminSearch';
import AdminTrello from '../../../components/AdminTrello';

import Head from 'next/head';

export default function Dashboard({ orders }) {
  return (
    <>
      <Head>
        <title>Dashboard - Admin - Hola Cartão</title>
      </Head>
      <AdminHeader />
      <AdminSearch initialData={orders} />
      <AdminTrello initialData={orders} />
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

  const orders = await serverClient(adminToken).request(GET_ALL_ORDERS);

  return {
    props: { orders } // will be passed to the page component as props
  };
}
