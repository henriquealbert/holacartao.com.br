import styled from 'styled-components';
import { Envelope, HelpCircle } from '@styled-icons/boxicons-solid';
import { Link as ScrollLink } from 'react-scroll';

export const HelpPageWrapper = styled.section`
  width: 90%;
  @media (min-width: 450px) {
    width: 80%;
  }

  margin: 5rem auto;
  h1 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.125rem;
    line-height: 1.5;
  }

  h4 {
    font-size: 1.125rem;
    font-weight: normal;
    text-align: center;
  }
`;

export const FAQLinks = styled.div`
  margin: 2rem 0;
  h2 {
    font-size: 1.5rem;
  }

  ul {
    list-style: initial;
    color: #375bd6;
    margin-left: 2rem;
    margin-top: 1rem;
  }
`;

export const FAQLinkItem = styled(ScrollLink)`
  color: #375bd6;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  line-height: 1.5;
  font-size: 1.125rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const EnvelopeIcon = styled(Envelope)`
  width: 35px;
  height: 35px;
  color: var(--green);
  margin-right: 1rem;
`;

export const HelpIcon = styled(HelpCircle)`
  width: 35px;
  height: 35px;
  color: var(--green);
  margin-right: 1rem;
`;

export const AnswerFAQ = styled.div`
  margin: 2rem 0;
  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  p,
  li {
    line-height: 1.5;
    font-size: 1.125rem;
  }
  ul {
    margin-top: 0.5rem;
    margin-left: 1rem;
    list-style: disc;
  }

  ol {
    list-style: decimal;
    line-height: 1.5;
    font-size: 1.125rem;
    margin-left: 1.2rem;
    li {
      line-height: 1.8;
      font-size: 1.125rem;
      p {
        margin-left: 1rem;
      }
      ol {
        margin-left: 2rem;
      }
    }
  }

  a {
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ImageDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem auto;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 1rem;
    margin: 1rem;
    max-width: 270px;
  }
`;
