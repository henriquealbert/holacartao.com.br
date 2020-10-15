import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Canva from '../components/Canva';
import { OiEditor, WarningsEditor, FrenteEditor } from '../components/Infos';
import ChangeSide from '../components/ChangeSide';
import { useEditorStoreFrente } from './Store';

import * as S from './styled';

export default function EditorFrente({ user }) {
  const storeFrente = useEditorStoreFrente();

  return (
    <S.EditorWrapper>
      <Header editorStore={storeFrente} user={user} />
      <Sidebar editorStore={storeFrente} />

      <S.Container>
        <OiEditor />
        <S.Wrapper>
          <WarningsEditor />
          <FrenteEditor />
          <Canva editorStore={storeFrente} BgId={'bg-frente'} />
          <ChangeSide frente={true} editorStore={storeFrente} />
        </S.Wrapper>
      </S.Container>
    </S.EditorWrapper>
  );
}
