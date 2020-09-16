// import { auth } from '../../Contexts/AppContext';

import dynamic from 'next/dynamic';
import Head from 'next/head';
import LoadingEditor from '../../Editor/Loading';
import { EditorUtilsProvider } from '../../Editor/Context/EditorUtilsContext';

const options = {
  ssr: false,
  loading: LoadingEditor
};

const EditorComponent = dynamic(() => import('../../Editor'), options);

export default function Editor() {
  return (
    <>
      <Head>
        <title>Editar Frente do Cartão - Hola Cartão</title>
      </Head>
      <EditorUtilsProvider>
        <EditorComponent />
      </EditorUtilsProvider>
    </>
  );
}

// export async function getServerSideProps(ctx) {
//   const token = auth(ctx);
//   return {
//     props: { token } // will be passed to the page component as props
//   };
// }
