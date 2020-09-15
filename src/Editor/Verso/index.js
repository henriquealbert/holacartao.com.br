import EditorHeaderVerso from './Header';
import EditorSidebarVerso from './Sidebar';
import EditorCanvaVerso from './Canva';
import ButtonSave from './ButtonSave';

import * as S from './styled';

export default function EditorVerso() {
  return (
    <S.EditorVersoWrapper>
      <EditorHeaderVerso />
      <EditorSidebarVerso />
      <EditorCanvaVerso />
      <ButtonSave />
    </S.EditorVersoWrapper>
  );
}
