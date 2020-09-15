import { useState } from 'react';

import MenuIcons from './MenuIcons';
import Item1 from './MenuTools/1Cor';
import Item2 from './MenuTools/2Texto';
import Item3 from './MenuTools/3Elementos';
import Item4 from './MenuTools/4Imagem';
import Item5 from './MenuTools/5Fundo';

import * as S from './styled';

export default function EditorSidebarVerso() {
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
        <Item1 openItem1={openItem1} />
        <Item2 openItem2={openItem2} />
        <Item3 openItem3={openItem3} />
        <Item4 openItem4={openItem4} />
        <Item5 openItem5={openItem5} />
      </S.MenuToolsContainer>
    </S.SidebarContainer>
  );
}
