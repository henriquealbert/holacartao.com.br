import styled from 'styled-components';
import { File } from '@styled-icons/boxicons-regular/File';

export const TermsWrapper = styled.section`
  margin: 5rem auto;
  width: 90%;
  @media (min-width: 450px) {
    width: 80%;
  }

  h1 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.125rem;
    line-height: 1.5;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  ol {
    list-style: decimal;
    line-height: 1.5;
    font-size: 1.125rem;
    margin-left: 1.2rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  ul {
    margin-top: 0.5rem;
    margin-left: 1rem;
    list-style: disc;
  }
`;

export const FileIcon = styled(File)`
  width: 35px;
  height: 35px;
  color: var(--green);
  margin-right: 1rem;
`;
