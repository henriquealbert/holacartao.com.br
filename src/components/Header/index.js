import Link from 'next/link';

import Menu from '../Menu';

import * as S from './styled';

export default function Header() {
  return (
    <S.HeaderWrapper id="top">
      <S.HeaderContainer>
        <Link href="/">
          <a>
            <img src="/images/hola-cartao.png" alt="Hola Cartão" />
          </a>
        </Link>
        <Menu />
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
}
