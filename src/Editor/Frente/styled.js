import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-right: 100px;

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
`;
