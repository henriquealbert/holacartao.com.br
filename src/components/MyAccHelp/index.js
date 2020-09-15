import * as S from './styled';
import Link from 'next/link';

export default function MyAccHelp() {
  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <S.MyAccHelp>
      <h2>Está com algum problema?</h2>
      <Link href="/ajuda">
        <a>Visitar Central de Ajuda</a>
      </Link>

      <form onSubmit={handleSubmit} id="help-contact">
        <p>Entre em contato conosco:</p>

        <div>
          <input type="text" name="name" id="name" placeholder="Nome" />

          <input type="email" name="email" id="email" placeholder="E-mail" />
        </div>
        <div>
          <textarea
            name="mensagem"
            id="mensagem"
            cols="30"
            rows="5"
            placeholder="Mensagem"
          />
        </div>
        <S.buttonSubmit>
          <button type="submit">Enviar</button>
        </S.buttonSubmit>
      </form>
    </S.MyAccHelp>
  );
}
