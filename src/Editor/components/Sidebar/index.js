import { useState } from 'react';

import MenuIcons from '../MenuIcons';
import Item1 from '../1Cor';
import Item2 from '../2Texto';
import Item3 from '../3Elementos';
import Item4 from '../4Imagem';
import Item5 from '../5Fundo';

import * as S from './styled';

export default function Sidebar({ editorStore }) {
  // Menu
  const [openMenu, setOpenMenu] = useState('');

  return (
    <S.SidebarContainer>
      <MenuIcons openMenu={openMenu} setOpenMenu={setOpenMenu} />

      <S.MenuToolsContainer>
        <Item1 openMenu={openMenu} editorStore={editorStore} />
        <Item2 openMenu={openMenu} editorStore={editorStore} />
        <Item3 openMenu={openMenu} editorStore={editorStore} />
        <Item4 openMenu={openMenu} editorStore={editorStore} />
        <Item5 openMenu={openMenu} editorStore={editorStore} />
      </S.MenuToolsContainer>
    </S.SidebarContainer>
  );
}
