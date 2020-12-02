import dynamic from 'next/dynamic';
import { auth } from '@/Contexts/AppContext';
import Head from 'next/head';

import serverClient from '@/graphql/serverClient';
import GET_CARD_MODEL from '@/graphql/admin/GetCardModel';
import GET_SINGLE_SAVED_CARD from '@/graphql/queries/GetSingleSavedCard';

import LoadingEditor from '@/Editor/Loading';

const options = {
  ssr: false,
  loading: LoadingEditor
};
const EditorComponent = dynamic(() => import('@/Editor'), options);

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

  if (!token) {
    return {
      props: {}
    };
  }

  if (ctx.query.saved_card) {
    const data = await serverClient(token).request(GET_SINGLE_SAVED_CARD, {
      id: ctx.query.card
    });

    return {
      props: { data } // will be passed to the page component as props
    };
  }

  if (!ctx.query.saved_card) {
    const data = await serverClient(token).request(GET_CARD_MODEL, {
      id: ctx.query.card
    });

    return {
      props: { data } // will be passed to the page component as props
    };
  }
}
