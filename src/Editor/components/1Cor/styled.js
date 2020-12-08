import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  background: #eeeeee;
  border-radius: 10px;
  transform: translateX(-200%);
  transition: all 350ms ease-in-out;
  overflow-x: hidden;
  visibility: hidden;
  position: absolute;
  top: auto;
  bottom: auto;
  width: 316px;
  margin-left: 1rem;

  &.open {
    transform: translateX(0%);
    visibility: visible;
  }
  .sketch-picker {
    max-width: 250px;
  }
`;
