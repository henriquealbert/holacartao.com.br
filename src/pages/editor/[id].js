import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import Router from 'next/router';

import { auth } from '@/Contexts/AppContext';
import serverClient from '@/graphql/serverClient';
import GET_CARD_MODEL from '@/graphql/admin/GetCardModel';
import GET_SINGLE_SAVED_CARD from '@/graphql/queries/GetSingleSavedCard';

import LoadingEditor from '@/Editor/Loading';
import useWindowDimensions from '@/utils/getWindowDimensions';

const options = {
  ssr: false,
  loading: LoadingEditor
};
const EditorComponent = dynamic(() => import('@/Editor/index'), options);

export default function UserEditor({ data }) {
  const { isMobile } = useWindowDimensions();
  if (isMobile) Router.push('/modelos/');
  return (
    <>
      <NextSeo
        noindex={true}
        title="Edite seu Modelo de Cartão - Hola Cartão"
      />

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
