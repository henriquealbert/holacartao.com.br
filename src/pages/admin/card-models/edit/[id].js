import dynamic from 'next/dynamic';

import { authAdmin } from '../../../../Contexts/AdminContext';
import serverClient from '../../../../graphql/serverClient';
import GET_CARD_MODEL from '../../../../graphql/admin/GetCardModel';
import LoadingEditor from '../../../../Editor/Loading';
import LoadFontsComponent from '../../../../Editor/components/2Texto/LoadFontsComponent';

const options = {
  ssr: false,
  loading: LoadingEditor
};
const EditorComponent = dynamic(() => import('../../../../Editor'), options);

export default function CardModelEdit({ data }) {
  return (
    <>
      <LoadFontsComponent tittle="Editar Modelo de Cartão - Admin - Hola Cartão" />

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
