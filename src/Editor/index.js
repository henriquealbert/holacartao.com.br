import { useEffect } from 'react';
import { useEditorUtilsContext } from './Context/EditorUtilsContext';
import { useEditorStoreFrente } from './Frente/Store';
import { useEditorStoreVerso } from './Verso/Store';
import EditorFrente from './Frente';
import EditorVerso from './Verso';

export default function EditorComponent({ data, user }) {
  const {
    frente,
    setSaveCardHeader,
    resetUtilsState
  } = useEditorUtilsContext();

  const {
    setStore: setStoreFrente,
    resetState: resetStateFrente
  } = useEditorStoreFrente();

  const {
    setStore: setStoreVerso,
    resetState: resetStateVerso
  } = useEditorStoreVerso();

  // reset all data

  useEffect(() => {
    resetUtilsState();
    resetStateFrente();
    resetStateVerso();
  }, []);

  // load store from the backend
  useEffect(() => {
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
  }, [setStoreFrente, setStoreVerso, data, setSaveCardHeader]);

  return (
    <>
      {frente ? (
        <EditorFrente user={user} frente={frente} />
      ) : (
        <EditorVerso user={user} infoCard={data} frente={frente} />
      )}
    </>
  );
}
