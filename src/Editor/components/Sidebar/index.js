import { useState } from 'react';
import { Flex, Box } from '@chakra-ui/react';

import MenuIcons from '../MenuIcons';
import Item1 from '../1Cor';
import Item2 from '../2Texto';
import Item3 from '../3Elementos';
import Item4 from '../4Imagem';
import Item5 from '../5Fundo';

export default function Sidebar({ editorStore }) {
  const [openMenu, setOpenMenu] = useState('');

  return (
    <Flex as="aside" position="fixed" mt="28px" ml="50px">
      <MenuIcons openMenu={openMenu} setOpenMenu={setOpenMenu} />

      <Box>
        <Item1 openMenu={openMenu} editorStore={editorStore} />
        <Item2 openMenu={openMenu} editorStore={editorStore} />
        <Item3 openMenu={openMenu} editorStore={editorStore} />
        <Item4 openMenu={openMenu} editorStore={editorStore} />
        <Item5 openMenu={openMenu} editorStore={editorStore} />
      </Box>
    </Flex>
  );
}
