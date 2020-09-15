import * as S from './styled';
import { useEditorStoreVerso } from '../../../Store';
import { SketchPicker } from 'react-color';
import { useState } from 'react';

export default function Item1({ openItem1 }) {
  // Context
  const { selectedId, setStore, store } = useEditorStoreVerso();
  const [color, setColor] = useState('#000000');

  const changeColor = (color) => {
    if (selectedId === null) {
      return;
    }
    const found = store.filter((element) => element.id === selectedId);
    found[0].fill = color;
    const elements = store.filter((element) => element.id !== selectedId);
    elements.push(found[0]);
    setStore(elements);
  };

  return (
    <S.SidebarMenuWrapper1 className={openItem1 !== true ? '' : 'open'}>
      <S.ContentWrapperColor>
        <h3>Cor do Elemento ou Texto</h3>
        <SketchPicker
          color={color}
          disableAlpha={true}
          onChange={(color) => {
            setColor(color.hex);
            changeColor(color.hex);
          }}
          presetColors={[]}
        />
      </S.ContentWrapperColor>
    </S.SidebarMenuWrapper1>
  );
}
