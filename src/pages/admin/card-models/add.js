import Head from 'next/head';
import dynamic from 'next/dynamic';

import { authAdmin } from '../../../Contexts/AdminContext';
import LoadingEditor from '../../../Editor/Loading';

const options = {
  ssr: false,
  loading: LoadingEditor
};
const EditorComponent = dynamic(() => import('../../../Editor'), options);

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
  return {
    props: { adminToken } // will be passed to the page component as props
  };
}
