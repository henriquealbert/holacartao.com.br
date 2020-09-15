import styled from 'styled-components';

export const EditorContainer = styled.section`
  width: 80%;
  display: flex;
  margin: 0 auto;
  padding-top: 70px;
`;

export const EditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  position: relative;

  animation: flip-in-ver-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @keyframes flip-in-ver-left {
    0% {
      transform: rotateY(80deg);
      opacity: 0;
    }
    100% {
      transform: rotateY(0);
      opacity: 1;
    }
  }

  #frente-cartao {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const EditorWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  grid-column: 2/3;
  margin-top: 4rem;

  #verso-cartao {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  .verso-card {
    position: absolute;
    z-index: 1;
  }
`;
