import * as S from './styled';

export default function Navbar({ menu }) {
  return (
    <S.Wrapper>
      <ul>
        <li className={menu === '01' ? 'active' : ''}>01 Pacotes</li>
        <li className={menu === '02' ? 'active' : ''}>02 Entrega</li>
        <li className={menu === '03' ? 'active' : ''}>03 Check Out</li>
      </ul>
    </S.Wrapper>
  );
}
