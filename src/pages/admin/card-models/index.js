import { NextSeo } from 'next-seo';

import { authAdmin } from '@/Contexts/AdminContext';
import AdminHeader from '@/components/AdminHeader';
import AdminCardTable from '@/components/AdminCardTable';

export default function CardModels() {
  return (
    <>
      <NextSeo noindex={true} title="Modelos de Cartão - Admin - Hola Cartão" />

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
