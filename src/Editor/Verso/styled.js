import styled from 'styled-components';

export const EditorWrapper = styled.main`
  background: rgba(0, 0, 0, 0.01);
  height: 100vh;
`;

export const Container = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;
  padding-top: 70px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  position: relative;

  animation: flip-in-ver-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @keyframes flip-in-ver-right {
    0% {
      transform: rotateY(-80deg);
      opacity: 0;
    }
    100% {
      transform: rotateY(0);
      opacity: 1;
    }
  }
`;
