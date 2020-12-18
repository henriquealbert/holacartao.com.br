import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  min-height: 830px;

  h2 {
    font-size: 18px;
    line-height: 33px;
    letter-spacing: 0.01em;
    color: var(--black);
    font-weight: normal;
    margin-top: 2rem;
    font-family: 'Varela', sans-serif;
  }
`;

export const Container = styled.div`
  margin-left: 4rem;
  max-width: 800px;
`;

export const Content = styled.div``;

export const BackButton = styled.button`
  font-family: 'Montserrat';
`;
