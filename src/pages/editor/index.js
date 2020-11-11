import dynamic from 'next/dynamic';

import { auth } from '../../Contexts/AppContext';
import LoadingEditor from '../../Editor/Loading';
import LoadFontsComponent from '../../Editor/components/2Texto/LoadFontsComponent';

const options = {
  ssr: false,
  loading: LoadingEditor
};
const EditorComponent = dynamic(() => import('../../Editor'), options);

export default function Editor() {
  return (
    <>
      <LoadFontsComponent title="Crie seu Modelo de Cartão - Hola Cartão" />
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
