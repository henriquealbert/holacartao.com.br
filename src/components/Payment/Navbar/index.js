import * as S from './styled';

export default function Navbar({
  menu1,
  menu2,
  menu3,
  setMenu1,
  setMenu2,
  setMenu3
}) {
  const menu1Click = () => {
    setMenu1(true);
    setMenu2(false);
    setMenu3(false);
  };

  const menu2Click = () => {
    setMenu1(false);
    setMenu2(true);
    setMenu3(false);
  };

  const menu3Click = () => {
    setMenu1(false);
    setMenu2(false);
    setMenu3(true);
  };

  return (
    <S.Wrapper>
      <ul>
        <li className={menu1 ? 'active' : ''} onClick={menu1Click}>
          01 Pacotes
        </li>
        <li className={menu2 ? 'active' : ''} onClick={menu2Click}>
          02 Entrega
        </li>
        <li className={menu3 ? 'active' : ''} onClick={menu3Click}>
          03 Check Out
        </li>
      </ul>
    </S.Wrapper>
  );
}
