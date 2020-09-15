import { useState } from 'react';

import * as S from './styled';
import StepsThree from '../StepsThree';

export default function Payment() {
  const [price, setPrice] = useState('0.00');

  function handleClick(e) {
    setPrice(e.target.value);
  }

  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <S.PaymentWrapper>
      <StepsThree />

      <h1>Quantos cartões você precisa?</h1>

      <form onSubmit={handleSubmit}>
        <S.PaymentPricing>
          <S.PaymentPricingItem1>
            <p>100</p>
            <p>unidades por</p>
            <div>
              <span>R$ </span>
              <strong>79.90</strong>
            </div>
            <input
              type="radio"
              name="price"
              id="79.90"
              value="79.90"
              onClick={handleClick}
            />
          </S.PaymentPricingItem1>
          <S.PaymentPricingItem2>
            <S.PricingBadge>
              <span>melhor custo benefício</span>
            </S.PricingBadge>
            <p>250</p>
            <p>unidades por</p>
            <div>
              <span>R$ </span>
              <strong>89.90</strong>
            </div>
            <input
              type="radio"
              name="price"
              id="89.90"
              value="89.90"
              onClick={handleClick}
            />
          </S.PaymentPricingItem2>
          <S.PaymentPricingItem3>
            <p>500</p>
            <p>unidades por</p>
            <div>
              <span>R$ </span>
              <strong>119.90</strong>
            </div>
            <input
              type="radio"
              name="price"
              id="119.90"
              value="119.90"
              onClick={handleClick}
            />
          </S.PaymentPricingItem3>
        </S.PaymentPricing>

        <S.PaymentFrete>Frete Grátis</S.PaymentFrete>
        <S.CartaoInfo>
          Tamanho:9x5 cm | Papel Couché 300g Frente e verso | Colorido | Verniz
          total frente
        </S.CartaoInfo>

        <S.PaymentUserDetails>
          <div className="name">
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" id="name" />
          </div>

          <div className="lastName">
            <label htmlFor="lastName">Sobrenome:</label>
            <input type="text" name="lastName" id="lastName" />
          </div>

          <div className="cpf">
            <label htmlFor="cpf">CPF:</label>
            <input type="text" name="cpf" id="cpf" />
          </div>

          <div className="telefone">
            <label htmlFor="telefone">Telefone:</label>
            <input
              type="text"
              name="telefone"
              id="telefone"
              placeholder="(00)00000-0000"
            />
          </div>

          <div className="cep">
            <label htmlFor="cep">CEP:</label>
            <input type="text" name="cep" id="cep" placeholder="00000-000" />
          </div>

          <div className="rua">
            <label htmlFor="rua">Rua/Avenida:</label>
            <input
              type="text"
              name="rua"
              id="rua"
              placeholder="Ex. Rua Logo Ali"
            />
          </div>

          <div className="numero">
            <label htmlFor="numero">Número:</label>
            <input type="number" name="numero" id="numero" />
          </div>

          <div className="referencia">
            <label htmlFor="referencia">Referência</label>
            <input
              type="text"
              name="referencia"
              id="referencia"
              placeholder="Ex. Sobrado - Perto da Padaria"
            />
          </div>

          <div className="bairro">
            <label htmlFor="bairro">Bairro:</label>
            <input type="text" name="bairro" id="bairro" />
          </div>

          <div className="cidade">
            <label htmlFor="cidade">Cidade/Estado:</label>
            <input
              className="disable"
              type="text"
              name="cidade"
              id="cidade"
              value="Curitiba/PR"
              disabled
            />
          </div>
        </S.PaymentUserDetails>

        <S.PaymentTotalTable>
          <tbody>
            <tr>
              <td>Produto:</td>
              <td>R$ {price}</td>
            </tr>
            <tr>
              <td>Frete:</td>
              <td>R$ 0.00</td>
            </tr>
            <tr>
              <td>
                <strong>TOTAL:</strong>
              </td>
              <td>
                <strong>R$ {price}</strong>
              </td>
            </tr>
          </tbody>
        </S.PaymentTotalTable>

        <S.PaymentCardInfoContainer>
          <p>Pagamento Cartão de Crédito</p>
          <span>Compra Segura</span>
          <S.PaymentCardInfoWrapper>
            <div>
              <label htmlFor="cardNumber">Número do Cartão</label>
              <input type="number" name="cardNumber" id="cardNumber" />
            </div>

            <div>
              <label htmlFor="cardName">Nome no Cartão</label>
              <input type="text" name="cardName" id="cardName" />
            </div>

            <div>
              <label htmlFor="cardValid">Validade</label>
              <div className="validade">
                <input
                  type="number"
                  name="cardValidMonth"
                  id="cardValid"
                  placeholder="Mês"
                />
                <input
                  type="number"
                  name="cardValidYear"
                  id="cardValid"
                  placeholder="Ano"
                />
              </div>
            </div>

            <div>
              <label htmlFor="cardCvc">Código CVC</label>
              <input
                type="number"
                name="cardCvc"
                id="cardCvc"
                pattern="[0-9][3]"
              />
            </div>

            <div>
              <label htmlFor="parcelas">Parcelas:</label>
              <select name="parcelas" id="parcelas">
                <option value="1x">1x R$ {Number(price).toFixed(2)}</option>
                <option value="1x">2x R$ {Number(price / 2).toFixed(2)}</option>
                <option value="1x">3x R$ {Number(price / 3).toFixed(2)}</option>
                <option value="1x">4x R$ {Number(price / 4).toFixed(2)}</option>
                <option value="1x">5x R$ {Number(price / 5).toFixed(2)}</option>
                <option value="1x">6x R$ {Number(price / 6).toFixed(2)}</option>
                <option value="1x">7x R$ {Number(price / 7).toFixed(2)}</option>
                <option value="1x">8x R$ {Number(price / 8).toFixed(2)}</option>
                <option value="1x">9x R$ {Number(price / 9).toFixed(2)}</option>
                <option value="1x">
                  10x R$ {Number(price / 10).toFixed(2)}
                </option>
              </select>
            </div>
          </S.PaymentCardInfoWrapper>
        </S.PaymentCardInfoContainer>

        <button type="submit">Concluir</button>
      </form>
    </S.PaymentWrapper>
  );
}
