import EditorHeaderFrente from './Header';
import EditorSidebarFrente from './Sidebar';
import EditorCanvaFrente from './Canva';

import * as S from './styled';

export default function EditorFrente() {
  return (
    <S.EditorFrenteWrapper>
      <EditorHeaderFrente />
      <EditorSidebarFrente />
      <EditorCanvaFrente />
    </S.EditorFrenteWrapper>
  );
}
