import * as S from './styled';

export default function CartSidebar() {
  return (
    <S.Wrapper>
      <S.Content>
        <h2>Seu Carrinho</h2>
        <S.CardInfo>
          <img src="/images/sidebar-card.png" alt="Cartão de Visita" />
          <p>
            Cartão de Visita Personalizado, verniz total frente, verso fosco,
            tamanho 9x5cm. Couché 300g.
          </p>
        </S.CardInfo>
        <S.PriceInfo>
          <tbody>
            <tr>
              <td>Subtotal:</td>
              <td>Standard 250un.</td>
              <td>R$ 89,90</td>
            </tr>
            <tr>
              <td>Frete:</td>
              <td></td>
              <td>R$ 00,00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>TOTAL</td>
              <td></td>
              <td>R$ 89,90</td>
            </tr>
          </tfoot>
        </S.PriceInfo>
      </S.Content>
    </S.Wrapper>
  );
}
