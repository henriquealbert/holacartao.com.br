import * as S from './styled';
import { BasicPrice, StandardPrice, CinquecentoPrice } from '../PricingOptions';
import PricingRadio from '../PricingRadio';

export default function Payment() {
  return (
    <S.Wrapper>
      <div>
        <ul>
          <li>01 Pacotes</li>
          <li>02 Entrega</li>
          <li>03 Check Out</li>
        </ul>
      </div>
      <h2>Escolha um pacote:</h2>
      <S.PrincingOptionsWrapper>
        <S.OptionItem>
          <BasicPrice>
            <PricingRadio id="basic" value="79.90" />
          </BasicPrice>
        </S.OptionItem>
        <S.OptionItem>
          <StandardPrice>
            <PricingRadio id="standard" value="89.90" checked />
          </StandardPrice>
        </S.OptionItem>
        <S.OptionItem>
          <CinquecentoPrice>
            <PricingRadio id="cinquecento" value="119.90" />
          </CinquecentoPrice>
        </S.OptionItem>
      </S.PrincingOptionsWrapper>
      <S.ClientInfoWrapper>
        <form>
          <S.FormGroup>
            <S.FormItem>
              <label htmlFor="firstName">Nome</label>
              <input type="text" name="firstName" id="firstName" />
            </S.FormItem>
            <div>
              <label htmlFor="lastName">Sobrenome</label>
              <input type="text" name="lastName" id="lastName" />
            </div>
          </S.FormGroup>
          <S.FormGroup>
            <S.FormItem>
              <label htmlFor="cpf">CPF</label>
              <input type="doc" name="cpf" id="cpf" />
            </S.FormItem>
            <div>
              <label htmlFor="telefone">Telefone</label>
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{5}-[0-9]{4}"
                name="telefone"
                id="telefone"
                placeholder="(00) 9 9999-9999"
              />
            </div>
          </S.FormGroup>
        </form>
        <button>Próximo Passo</button>
      </S.ClientInfoWrapper>
    </S.Wrapper>
  );
}
