import * as S from './styled';
import PrimaryButton from '../PrimaryButton';

export default function Pricing() {
  return (
    <S.PricingWrapper id="tabela-precos">
      <h2>Tabela de preços</h2>
      <p>
        Todos os nossos modelos são tamanho: 9x5 cm, feitos com papel Couché
        300g.
      </p>
      <span>🔒 compra segura</span>

      <S.Card>
        <S.ItemOne>
          <strong>100 unidades</strong>
          <p>por apenas R$ 79,90</p>
        </S.ItemOne>

        <img src="/images/badge.svg" alt="Badge" />
        <span>melhor custo benefício! 🌟</span>
        <S.Items>
          <strong>250 unidades</strong>
          <p>por apenas R$ 89,90</p>
          <strong>500 unidades</strong>
          <p>por apenas R$ 119,90</p>
        </S.Items>
      </S.Card>
      <PrimaryButton href="/criar-conta">Fazer meu cartão agora!</PrimaryButton>
    </S.PricingWrapper>
  );
}
