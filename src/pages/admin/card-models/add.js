import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';

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
      <NextSeo
        noindex={true}
        title="Adicionar Modelo de Cartão - Admin - Hola Cartão"
      />

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
