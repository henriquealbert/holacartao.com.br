import { Box, Flex } from '@chakra-ui/react';

import Header from '@/Editor/components/Header';
import Sidebar from '@/Editor/components/Sidebar';
import Canva from '@/Editor/components/Canva';
import { InfoEditor, FrenteEditor } from '@/Editor/components/Infos';
import ChangeSide from '@/Editor/components/ChangeSide';
import { useEditorStoreFrente } from './Store';

import * as S from './styled';

export default function EditorFrente({ user }) {
  const storeFrente = useEditorStoreFrente();

  return (
    <Box as="main" bg="rgba(0, 0, 0, 0.01)" h="100vh">
      <Box maxW="90%" m="0 auto">
        <Header editorStore={storeFrente} user={user} />

        <Flex justifyContent="space-between">
          <Sidebar editorStore={storeFrente} />

          <InfoEditor />

          <S.Wrapper>
            <FrenteEditor />
            <Canva editorStore={storeFrente} BgId={'bg-frente'} />
            <ChangeSide frente={true} editorStore={storeFrente} />
          </S.Wrapper>
        </Flex>
      </Box>
    </Box>
  );
}
