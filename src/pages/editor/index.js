import dynamic from 'next/dynamic';
import Head from 'next/head';
import Router from 'next/router';

import { auth } from '@/Contexts/AppContext';
import LoadingEditor from '@/Editor/Loading';
import useWindowDimensions from '@/utils/getWindowDimensions';

const options = {
  ssr: false,
  loading: LoadingEditor
};
const EditorComponent = dynamic(() => import('@/Editor/index'), options);

export default function Editor() {
  const { isMobile } = useWindowDimensions();
  if (isMobile) Router.push('/modelos/');

  return (
    <>
      <Head>
        <title>Crie seu Modelo de Cartão - Hola Cartão</title>
      </Head>
      <EditorComponent user />
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

  return {
    props: {} // will be passed to the page component as props
  };
}
