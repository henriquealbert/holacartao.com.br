import dynamic from 'next/dynamic';
import Head from 'next/head';

import { authAdmin } from '@/Contexts/AdminContext';
import LoadingEditor from '@/Editor/Loading';

const options = {
  ssr: false,
  loading: LoadingEditor
};
const EditorComponent = dynamic(() => import('@/Editor/index'), options);

export default function CardModelAdd() {
  return (
    <>
      <Head>
        <title>Adicionar Modelo de Cartão - Admin - Hola Cartão</title>
      </Head>
      <EditorComponent />
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
