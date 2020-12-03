import styled from '@emotion/styled';

export const InfosWrapper = styled.div`
  h2 {
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 2.125rem;
    line-height: 1;
    margin-bottom: 1rem;
  }
  p {
    width: 235px;
  }
`;

export const WarningsEditor = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;
  margin-bottom: 1rem;
  p {
    color: var(--darker-grey);
  }
`;

export const SidesWrapper = styled.div`
  p {
    color: var(--darker-grey);
    position: absolute;
    top: 4.5rem;
    left: -3rem;
    transform: rotate(-90deg);
    font-size: 1.25rem;
    font-weight: bold;
  }
`;
