import Header from '@/Editor/components/Header';
import Sidebar from '@/Editor/components/Sidebar';
import Canva from '@/Editor/components/Canva';
import {
  OiEditor,
  WarningsEditor,
  FrenteEditor
} from '@/Editor/components/Infos';
import ChangeSide from '@/Editor/components/ChangeSide';
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
