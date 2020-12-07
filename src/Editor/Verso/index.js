import { Box, Flex } from '@chakra-ui/react';

import Header from '@/Editor/components/Header';
import Sidebar from '@/Editor/components/Sidebar';
import Canva from '@/Editor/components/Canva';
import OpenModalButton from '@/Editor/components/OpenModalButton';
import { VersoEditor } from '@/Editor/components/Infos';
import ChangeSide from '@/Editor/components/ChangeSide';
import BeforeSaveModal from '@/Editor/components/BeforeSaveModal';

import { useEditorStoreVerso } from './Store';

import * as S from './styled';

export default function EditorVerso({ infoCard, user }) {
  const storeVerso = useEditorStoreVerso();

  return (
    <Box as="main" bg="rgba(0, 0, 0, 0.01)" h="100vh">
      <Header editorStore={storeVerso} user={user} />

      <Flex justifyContent="space-between" mx="50px">
        <Sidebar editorStore={storeVerso} />

        <S.Wrapper>
          <VersoEditor />
          <Canva editorStore={storeVerso} BgId={'bg-verso'} />
          <ChangeSide editorStore={storeVerso} />

          <OpenModalButton user={user} editorStore={storeVerso} />
          <BeforeSaveModal infoCard={infoCard} user={user} />
        </S.Wrapper>
      </Flex>
    </Box>
  );
}
