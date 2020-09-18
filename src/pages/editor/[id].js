import dynamic from 'next/dynamic';
import Head from 'next/head';

import { auth } from '../../Contexts/AppContext';
import serverClient from '../../graphql/serverClient';
import GET_CARD_MODEL from '../../graphql/admin/GetCardModel';
import LoadingEditor from '../../Editor/Loading';

const options = {
  ssr: false,
  loading: LoadingEditor
};
const EditorComponent = dynamic(() => import('../../Editor'), options);

export default function UserEditor({ data }) {
  return (
    <>
      <Head>
        <title>Edite seu Modelo de Cartão - Hola Cartão</title>
      </Head>
      <EditorComponent data={data} user />
    </>
  );
}

export async function getServerSideProps(ctx) {
  const token = auth(ctx);
  const { id } = await ctx.query;
  const parsedId = id.split('_').pop();
  const data = await serverClient(token).request(GET_CARD_MODEL, {
    id: parsedId
  });
  return {
    props: { data } // will be passed to the page component as props
  };
}
