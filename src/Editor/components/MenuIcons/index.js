import * as S from './styled';

export default function MenuIcons({
  setOpenItem1,
  setOpenItem2,
  setOpenItem3,
  setOpenItem4,
  setOpenItem5,
  openItem1,
  openItem2,
  openItem3,
  openItem4,
  openItem5
}) {
  return (
    <S.EditorSidebar>
      <ul>
        <li>
          <S.ColorIcon
            onClick={() => {
              setOpenItem1(!openItem1);
              setOpenItem2(false);
              setOpenItem3(false);
              setOpenItem4(false);
              setOpenItem5(false);
            }}
            className={openItem1 !== true ? '' : 'active'}
          />
          Cor
        </li>
        <li>
          <S.TextIcon
            onClick={() => {
              setOpenItem2(!openItem2);
              setOpenItem1(false);
              setOpenItem3(false);
              setOpenItem4(false);
              setOpenItem5(false);
            }}
            className={openItem2 !== true ? '' : 'active'}
          />
          Texto
        </li>
        <li>
          <S.ShapesIcon
            onClick={() => {
              setOpenItem3(!openItem3);
              setOpenItem1(false);
              setOpenItem2(false);
              setOpenItem4(false);
              setOpenItem5(false);
            }}
            className={openItem3 !== true ? '' : 'active'}
          />
          Elementos
        </li>
        <li>
          <S.ImageAddIcon
            onClick={() => {
              setOpenItem4(!openItem4);
              setOpenItem1(false);
              setOpenItem2(false);
              setOpenItem3(false);
              setOpenItem5(false);
            }}
            className={openItem4 !== true ? '' : 'active'}
          />
          Imagem
        </li>
        <li>
          <S.FundoIcon
            onClick={() => {
              setOpenItem5(!openItem5);
              setOpenItem1(false);
              setOpenItem2(false);
              setOpenItem3(false);
              setOpenItem4(false);
            }}
            className={openItem5 !== true ? '' : 'active'}
          />
          Fundo
        </li>
      </ul>
    </S.EditorSidebar>
  );
}
