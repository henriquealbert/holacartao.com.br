import Button from '../../Button';

import * as S from './styled';

export default function Form2({ setMenu }) {
  const handleClick = () => {
    setMenu('03');
  };
  return (
    <S.Wrapper>
      <form>
        <S.FormGroup>
          <S.FormItem>
            <label htmlFor="logradouro">Logradouro (rua, avenida e etc.)</label>
            <input type="text" name="logradouro" id="logradouro" />
          </S.FormItem>
          <div>
            <label htmlFor="numero">Número</label>
            <input type="number" name="numero" id="numero" />
          </div>
        </S.FormGroup>
        <S.FormGroup>
          <S.FormItem>
            <label htmlFor="referencia">Referência</label>
            <input type="text" name="referencia" id="referencia" />
          </S.FormItem>
          <div>
            <label htmlFor="complemento">Complemento</label>
            <input type="text" name="complemento" id="complemento" />
          </div>
        </S.FormGroup>
        <S.FormGroup>
          <S.FormItem>
            <label htmlFor="cep">CEP</label>
            <input type="text" name="cep" id="cep" />
          </S.FormItem>
          <div>
            <label htmlFor="bairro">Bairro</label>
            <input type="text" name="bairro" id="bairro" />
          </div>
        </S.FormGroup>
        <S.FormGroup>
          <S.FormItem>
            <label htmlFor="cidade">Cidade</label>
            <input type="text" name="cidade" id="cidade" />
          </S.FormItem>
          <div>
            <label htmlFor="estado">Estado</label>
            <input type="text" name="estado" id="estado" />
          </div>
        </S.FormGroup>
      </form>
      <S.ButtonWrapper>
        <Button onClick={handleClick}>Próximo Passo</Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
