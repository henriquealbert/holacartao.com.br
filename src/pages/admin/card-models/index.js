import { authAdmin } from '@/Contexts/AdminContext';

import AdminHeader from '@/components/AdminHeader';
import AdminCardTable from '@/components/AdminCardTable';
import Head from 'next/head';

export default function CardModels() {
  return (
    <>
      <Head>
        <title>Modelos de Cartão - Admin - Hola Cartão</title>
      </Head>
      <AdminHeader />
      <AdminCardTable />
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
