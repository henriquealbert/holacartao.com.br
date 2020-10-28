import Button from '../../Button';

import * as S from './styled';

export default function Form1({ setMenu1, setMenu2, setMenu3 }) {
  const handleClick = () => {
    setMenu1(false);
    setMenu2(true);
    setMenu3(false);
  };

  return (
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
      <S.ButtonWrapper>
        <Button onClick={handleClick}>Próximo Passo</Button>
      </S.ButtonWrapper>
    </S.ClientInfoWrapper>
  );
}
