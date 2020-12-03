import Header from '@/Editor/components/Header';
import Sidebar from '@/Editor/components/Sidebar';
import Canva from '@/Editor/components/Canva';
import OpenModalButton from '@/Editor/components/OpenModalButton';
import {
  InfoVerso,
  WarningsEditor,
  VersoEditor
} from '@/Editor/components/Infos';
import ChangeSide from '@/Editor/components/ChangeSide';
import BeforeSaveModal from '@/Editor/components/BeforeSaveModal';

import { useEditorStoreVerso } from './Store';

import * as S from './styled';

export default function EditorVerso({ infoCard, user }) {
  const storeVerso = useEditorStoreVerso();

  return (
    <S.EditorWrapper>
      <Header editorStore={storeVerso} user={user} />
      <Sidebar editorStore={storeVerso} />

      <S.Container>
        <InfoVerso />
        <S.Wrapper>
          <WarningsEditor />
          <VersoEditor />
          <Canva editorStore={storeVerso} BgId={'bg-verso'} />
          <ChangeSide editorStore={storeVerso} />
        </S.Wrapper>
      </S.Container>

      <OpenModalButton user={user} editorStore={storeVerso} />
      <BeforeSaveModal infoCard={infoCard} user={user} />
    </S.EditorWrapper>
  );
}
