import * as S from './styled';
import PrimaryButton from '../PrimaryButton';
import Link from 'next/link';

const Hero = () => {
  return (
    <S.HeroWrapper>
      <span>COVID-19: entregas somente na região de curitiba*</span>
      <h1>Dê à vontade o seu cartão de visita.</h1>
      <h2>
        Chega de perder clientes pela falta de um
        <strong> cartão de visita </strong>atraente.
      </h2>

      <PrimaryButton href="/criar-conta">Fazer meu cartão agora!</PrimaryButton>
      <S.SecondaryBtn to="como-funciona" smooth={true} duration={1000}>
        Como funciona?
      </S.SecondaryBtn>
      <S.UnderscoreButton>
        <Link href="/modelos">
          <a>VER MODELOS</a>
        </Link>
      </S.UnderscoreButton>
    </S.HeroWrapper>
  );
};

export default Hero;
