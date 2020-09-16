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
  const [openItem1, setOpenItem1] = useState(false);
  const [openItem2, setOpenItem2] = useState(false);
  const [openItem3, setOpenItem3] = useState(false);
  const [openItem4, setOpenItem4] = useState(false);
  const [openItem5, setOpenItem5] = useState(false);
  //

  return (
    <S.SidebarContainer>
      <MenuIcons
        setOpenItem1={setOpenItem1}
        setOpenItem2={setOpenItem2}
        setOpenItem3={setOpenItem3}
        setOpenItem4={setOpenItem4}
        setOpenItem5={setOpenItem5}
        openItem1={openItem1}
        openItem2={openItem2}
        openItem3={openItem3}
        openItem4={openItem4}
        openItem5={openItem5}
      />

      <S.MenuToolsContainer>
        <Item1 openItem1={openItem1} editorStore={editorStore} />
        <Item2 openItem2={openItem2} editorStore={editorStore} />
        <Item3 openItem3={openItem3} editorStore={editorStore} />
        <Item4 openItem4={openItem4} editorStore={editorStore} />
        <Item5 openItem5={openItem5} editorStore={editorStore} />
      </S.MenuToolsContainer>
    </S.SidebarContainer>
  );
}
