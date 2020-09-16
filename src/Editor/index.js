import { useEffect } from 'react';
import { useEditorUtilsContext } from './Context/EditorUtilsContext';
import { useEditorStoreFrente } from './Frente/Store';
import { useEditorStoreVerso } from './Verso/Store';
import EditorFrente from './Frente';
import EditorVerso from './Verso';

export default function EditorComponent({ data, user }) {
  const { frente } = useEditorUtilsContext();
  const { setStore: setStoreFrente } = useEditorStoreFrente();
  const { setStore: setStoreVerso } = useEditorStoreVerso();

  // load store from the backed
  useEffect(() => {
    setStoreFrente(data.cardModel.frontal_card);
    setStoreVerso(data.cardModel.back_card);
  }, [
    data.cardModel.frontal_card,
    data.cardModel.back_card,
    setStoreFrente,
    setStoreVerso
  ]);

  return (
    <>
      {frente ? (
        <EditorFrente user={user} />
      ) : (
        <EditorVerso user={user} infoCard={data} />
      )}
    </>
  );
}
