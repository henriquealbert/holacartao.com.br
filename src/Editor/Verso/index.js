import { Box, Flex } from '@chakra-ui/react';

import Header from '@/Editor/components/Header';
import Sidebar from '@/Editor/components/Sidebar';
import Canva from '@/Editor/components/Canva';
import { InfoEditor, VersoEditor } from '@/Editor/components/Infos';
import ChangeSide from '@/Editor/components/ChangeSide';
import BeforeSaveModal from '@/Editor/components/BeforeSaveModal';

import { useEditorStoreVerso } from './Store';

import * as S from './styled';

export default function EditorVerso({ infoCard, user }) {
  const storeVerso = useEditorStoreVerso();

  return (
    <Box as="main" bg="rgba(0, 0, 0, 0.01)" minH="100vh">
      <Box maxW="90%" m="0 auto">
        <Header editorStore={storeVerso} user={user} />

        <Flex justifyContent="space-between">
          <Sidebar editorStore={storeVerso} />

          <InfoEditor />

          <S.Wrapper>
            <Box>
              <VersoEditor />
              <Canva editorStore={storeVerso} BgId={'bg-verso'} />
              <ChangeSide editorStore={storeVerso} />
            </Box>
            <Flex alignSelf="flex-end" mr="-42px" mt="2rem">
              <BeforeSaveModal
                infoCard={infoCard}
                user={user}
                editorStore={storeVerso}
              />
            </Flex>
          </S.Wrapper>
        </Flex>
      </Box>
    </Box>
  );
}
