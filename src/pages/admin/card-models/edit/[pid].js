import { authAdmin } from '../../../../Contexts/AdminContext';

import Head from 'next/head';
import dynamic from 'next/dynamic';
import LoadingEditor from '../../../../components/AdminCardModelEdit/Loading';
import { EditorUtilsProvider } from '../../../../components/AdminCardModelEdit/Context/EditorUtilsContext';
import { EditorProviderFrente } from '../../../../components/AdminCardModelEdit/Frente/Store';
import { EditorProviderVerso } from '../../../../components/AdminCardModelEdit/Verso/Store';
import serverClient from '../../../../graphql/serverClient';
import GET_CARD_MODEL from '../../../../graphql/admin/GetCardModel';

const options = {
  ssr: false,
  loading: LoadingEditor
};

const EditorComponentAdminEdit = dynamic(
  () => import('../../../../components/AdminCardModelEdit'),
  options
);

export default function CardModelEdit({ data }) {
  return (
    <>
      <Head>
        <title>Editar Modelo de Cartão - Admin - Hola Cartão</title>
      </Head>
      <EditorUtilsProvider>
        <EditorProviderFrente>
          <EditorProviderVerso>
            <EditorComponentAdminEdit data={data} />
          </EditorProviderVerso>
        </EditorProviderFrente>
      </EditorUtilsProvider>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const adminToken = authAdmin(ctx);
  const { pid } = await ctx.query;
  const parsedId = pid.split('_').pop();
  const data = await serverClient(adminToken).request(GET_CARD_MODEL, {
    id: parsedId
  });

  return {
    props: { data } // will be passed to the page component as props
  };
}
