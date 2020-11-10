import * as S from './styled';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function HelpPage({ data }) {
  const helpPage = data?.centralDeAjuda;
  return (
    <S.HelpPageWrapper>
      <h1>
        <S.EnvelopeIcon />
        Central de Ajuda
      </h1>
      <div dangerouslySetInnerHTML={{ __html: helpPage?.infoContato }} />
      <S.FAQLinks>
        <h2>
          <S.HelpIcon />
          Dúvidas Frequentes
        </h2>
        <ul>
          {helpPage?.navLinks.map((navLink) => {
            return (
              <li key={navLink.id}>
                <S.FAQLinkItem
                  to={navLink.link}
                  smooth={true}
                  duration={1000}
                  title={navLink.title}
                >
                  {navLink.title}
                </S.FAQLinkItem>
              </li>
            );
          })}
        </ul>
      </S.FAQLinks>
      {helpPage?.sections.map((section) => {
        return (
          <S.AnswerFAQ id={section.link} key={section.id}>
            <h3>{section.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: section.content }} />
            <S.ImageDiv>
              {section.images.map((image) => {
                return (
                  <img
                    key={image.id}
                    src={`${API_URL}${image.url}`}
                    alt={image.alternativeText}
                    loading="lazy"
                  />
                );
              })}
            </S.ImageDiv>
          </S.AnswerFAQ>
        );
      })}

      <h4>
        Não encontrou uma resposta para sua dúvida, entre em contato com *******
        e vamos conversar!
      </h4>
    </S.HelpPageWrapper>
  );
}
