import * as S from './styled';

export function OiEditor() {
  return (
    <S.InfosWrapper>
      <h2>Oi, vamos começar?</h2>
      <p>
        Hora de editar seu cartão! Para começar, clique nos ícones na barra ao
        lado.
      </p>
      <img src="/images/arrow-left.svg" alt="Arrow Left" />
    </S.InfosWrapper>
  );
}

export function WarningsEditor() {
  return (
    <S.WarningsEditor>
      <p>
        *Mantenha suas informações dentro da linha <strong>vermelha</strong>.
      </p>
      <p>**Arraste os itens dentro da imagem abaixo para organizar.</p>
    </S.WarningsEditor>
  );
}

export function FrenteEditor() {
  return (
    <S.FrenteEditorWrapper>
      <p>Frente</p>
    </S.FrenteEditorWrapper>
  );
}

export function VersoEditor() {
  return (
    <S.VersoEditorWrapper>
      <p>Verso</p>
    </S.VersoEditorWrapper>
  );
}
