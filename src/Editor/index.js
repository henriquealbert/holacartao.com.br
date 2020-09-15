import { useEditorUtilsContext } from './Context/EditorUtilsContext';
import EditorFrente from './Frente';
import { EditorProviderFrente } from './Frente/Store';
import EditorVerso from './Verso';
import { EditorProviderVerso } from './Verso/Store';

import BeforeSaveModal from './BeforeSaveModal';

export default function EditorComponent() {
  const { frente } = useEditorUtilsContext();
  return (
    <EditorProviderFrente>
      <EditorProviderVerso>
        {frente ? <EditorFrente /> : <EditorVerso />}
        <BeforeSaveModal />
      </EditorProviderVerso>
    </EditorProviderFrente>
  );
}
