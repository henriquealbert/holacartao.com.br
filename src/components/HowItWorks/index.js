import * as S from './styled';
import PrimaryButton from '../PrimaryButton';

export default function HowItWorks() {
  return (
    <S.Wrapper id="como-funciona">
      <h2>Como funciona?</h2>
      <h3>
        <strong>Cartões de visita</strong> em apenas 3 passos.
        <span>Escolheu. Pediu. Chegou.</span>
      </h3>
      <S.ItemList>
        <span>1</span>
        <p>Após fazer login, escolha um modelo de cartão para editar.</p>
      </S.ItemList>
      <S.ItemList>
        <span>2</span>
        <p>Adicione suas informações no modelo de cartão.</p>
      </S.ItemList>
      <S.ItemList>
        <span>3</span>
        <p>Por fim, informe os dados de pagamento e entrega.</p>
      </S.ItemList>
      <S.Frete>
        <span>🚛</span>
        <h3>frete grátis</h3>
        <p>Receba seus cartões em casa!</p>
        <PrimaryButton href="/criar-conta">
          fazer meu cartão agora!
        </PrimaryButton>
        <S.PriceBtn to="tabela-precos" smooth={true} duration={1000}>
          VER PREÇOS
        </S.PriceBtn>
      </S.Frete>
      <S.BenefitWrapper>
        <span>🏆</span>
        <h3>melhor custo benefício</h3>
        <p>
          Mais barato do que um profissional e uma gráfica, e é o melhor serviço
          aliado ao produto com qualidade premium.
        </p>
      </S.BenefitWrapper>
    </S.Wrapper>
  );
}
