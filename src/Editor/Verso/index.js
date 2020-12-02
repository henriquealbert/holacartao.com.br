import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Canva from '@/components/Canva';
import OpenModalButton from '@/components/OpenModalButton';
import { InfoVerso, WarningsEditor, VersoEditor } from '@/components/Infos';
import ChangeSide from '@/components/ChangeSide';
import BeforeSaveModal from '@/components/BeforeSaveModal';

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
