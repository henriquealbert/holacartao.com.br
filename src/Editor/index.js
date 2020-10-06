import { useEffect } from 'react';
import { useEditorUtilsContext } from './Context/EditorUtilsContext';
import { useEditorStoreFrente } from './Frente/Store';
import { useEditorStoreVerso } from './Verso/Store';
import EditorFrente from './Frente';
import EditorVerso from './Verso';
import { nanoid } from 'nanoid';

export default function EditorComponent({ data, user, add }) {
  const { frente, setSaveCardHeader } = useEditorUtilsContext();
  const { setStore: setStoreFrente } = useEditorStoreFrente();
  const { setStore: setStoreVerso } = useEditorStoreVerso();

  // load store from the backend
  useEffect(() => {
    if (add) {
      const whiteBackgroundFrente = {
        id: String(nanoid() + Date.now()),
        type: 'bg',
        fill: '#FFFFFF',
        width: 640,
        height: 360.0123494905835,
        x: 0,
        y: 0
      };
      const whiteBackgroundVerso = {
        id: String(nanoid() + Date.now()),
        type: 'bg',
        fill: '#FFFFFF',
        width: 640,
        height: 360.0123494905835,
        x: 0,
        y: 0
      };
      setStoreFrente([whiteBackgroundFrente]);
      setStoreVerso([whiteBackgroundVerso]);
    }
    if (data?.cardModel) {
      setStoreFrente(data.cardModel.frontal_card);
      setStoreVerso(data.cardModel.back_card);
      setSaveCardHeader(null);
    }
    if (data?.savedCard) {
      setStoreFrente(data.savedCard.front_card);
      setStoreVerso(data.savedCard.back_card);
      setSaveCardHeader(data.savedCard);
    }
  }, [add, setStoreFrente, setStoreVerso, data, setSaveCardHeader]);

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
