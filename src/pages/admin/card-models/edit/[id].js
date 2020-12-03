import dynamic from 'next/dynamic';
import Head from 'next/head';

import { authAdmin } from '@/Contexts/AdminContext';
import serverClient from '@/graphql/serverClient';
import GET_CARD_MODEL from '@/graphql/admin/GetCardModel';
import LoadingEditor from '@/Editor/Loading';

const options = {
  ssr: false,
  loading: LoadingEditor
};
const EditorComponent = dynamic(() => import('@/Editor/index'), options);

export default function CardModelEdit({ data }) {
  return (
    <>
      <Head>
        <title>Editar Modelo de Cartão - Admin - Hola Cartão</title>
      </Head>

      <EditorComponent data={data} />
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
  const parsedId = id.split('_').pop();
  const data = await serverClient(adminToken).request(GET_CARD_MODEL, {
    id: parsedId
  });

  return {
    props: { data } // will be passed to the page component as props
  };
}
