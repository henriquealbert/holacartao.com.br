import { useEditorUtilsContext } from './Context/EditorUtilsContext';
import EditorFrente from './Frente';
import EditorVerso from './Verso';

import BeforeSaveModal from './BeforeSaveModal';

export default function EditorComponentAdmin() {
  const { frente } = useEditorUtilsContext();
  return (
    <>
      {frente ? <EditorFrente /> : <EditorVerso />}
      <BeforeSaveModal />
    </>
  );
}
