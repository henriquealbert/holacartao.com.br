import styled from 'styled-components';

export const ModelosWrapper = styled.section`
  width: 90%;
  margin: 0 auto;
  min-height: 70vh;
  h1 {
    font-weight: 900;
    font-size: 1.75rem;
    text-align: center;
    text-transform: uppercase;
    margin: 2rem 1rem;
  }
`;

export const TextWrapper = styled.div`
  p {
    font-size: 1.125rem;
  }
  a {
    font-weight: bold;
    text-decoration: underline;
  }
`;

export const SelectModelo = styled.div`
  display: flex;
  margin-top: 2rem;
  align-items: center;
  p {
    font-size: 1.125rem;
  }

  select {
    margin-left: 1rem;
    background: var(--lighter-grey);
    font-weight: bold;
    padding: 0.5rem;
    font-size: 1.125rem;
    border: none;

    option {
      font-size: 1.125rem;
    }
  }
`;

export const ModeloGrid = styled.div`
  display: flex;
  width: 90%;
  margin: 2rem auto;
`;

export const Modelo = styled.div`
  width: 200px;
  height: 100px;
  background: #c4c4c4;
  margin: 0 auto 0.5rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModeloContent = styled.div`
  width: 100%;
  height: 100%;
`;
