import * as S from './styled';

export default function TermsPage({ data }) {
  const termos = data.termosEPolitica;
  return (
    <S.TermsWrapper>
      <h1>
        <S.FileIcon />
        {termos?.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: termos?.content }} />
    </S.TermsWrapper>
  );
}
