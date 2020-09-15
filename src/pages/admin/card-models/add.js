import { authAdmin } from '../../../Contexts/AdminContext';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import LoadingEditor from '../../../components/AdminCardModelAdd/Loading';
import { EditorUtilsProvider } from '../../../components/AdminCardModelAdd/Context/EditorUtilsContext';
import { EditorProviderFrente } from '../../../components/AdminCardModelAdd/Frente/Store';
import { EditorProviderVerso } from '../../../components/AdminCardModelAdd/Verso/Store';

const options = {
  ssr: false,
  loading: LoadingEditor
};

const EditorComponentAdmin = dynamic(
  () => import('../../../components/AdminCardModelAdd'),
  options
);

export default function CardModelAdd() {
  return (
    <>
      <Head>
        <title>Adicionar Modelo de Cartão - Admin - Hola Cartão</title>
      </Head>
      <EditorUtilsProvider>
        <EditorProviderFrente>
          <EditorProviderVerso>
            <EditorComponentAdmin />
          </EditorProviderVerso>
        </EditorProviderFrente>
      </EditorUtilsProvider>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const adminToken = authAdmin(ctx);
  return {
    props: { adminToken } // will be passed to the page component as props
  };
}
