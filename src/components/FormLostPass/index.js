import * as S from './styled';

export default function FormLostPass() {
  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <S.Wrapper>
      <h1>Esqueceu sua senha?</h1>
      <p>Digite o e-mail atrelado a sua conta para recuperar sua senha.</p>

      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Digite seu e-mail" />
        <S.BtnSubmit type="submit">Enviar e-mail</S.BtnSubmit>
      </form>
    </S.Wrapper>
  );
}
