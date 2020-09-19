import dynamic from 'next/dynamic';
import Head from 'next/head';

import { auth } from '../../Contexts/AppContext';
import LoadingEditor from '../../Editor/Loading';

const options = {
  ssr: false,
  loading: LoadingEditor
};
const EditorComponent = dynamic(() => import('../../Editor'), options);

export default function Editor() {
  return (
    <>
      <Head>
        <title>Crie seu Modelo de Cartão - Hola Cartão</title>
      </Head>
      <EditorComponent user add />
    </>
  );
}

export async function getServerSideProps(ctx) {
  const token = auth(ctx);
  return {
    props: {} // will be passed to the page component as props
  };
}
