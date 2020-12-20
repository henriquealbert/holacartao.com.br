import Head from 'next/head';

import { authAdmin } from '@/Contexts/AdminContext';
import AdminHeader from '@/components/AdminHeader';
import AdminSearch from '@/components/AdminSearch';
import AdminTrello from '@/components/AdminTrello';

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard - Admin - Hola Cartão</title>
      </Head>
      <AdminHeader />
      <AdminSearch />
      <AdminTrello />
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

  return {
    props: {} // will be passed to the page component as props
  };
}
