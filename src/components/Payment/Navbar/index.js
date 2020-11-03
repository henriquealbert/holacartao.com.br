import * as S from './styled';

export default function Navbar({ menu, setMenu }) {
  const menu1Click = () => {
    setMenu('01');
  };

  const menu2Click = () => {
    setMenu('02');
  };

  const menu3Click = () => {
    setMenu('03');
  };

  return (
    <S.Wrapper>
      <ul>
        <li className={menu === '01' ? 'active' : ''} onClick={menu1Click}>
          01 Pacotes
        </li>
        <li className={menu === '02' ? 'active' : ''} onClick={menu2Click}>
          02 Entrega
        </li>
        <li className={menu === '03' ? 'active' : ''} onClick={menu3Click}>
          03 Check Out
        </li>
      </ul>
    </S.Wrapper>
  );
}
