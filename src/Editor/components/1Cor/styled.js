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
  margin-left: 80px;

  &.open {
    transform: translateX(0%);
    visibility: visible;
  }
`;

export const Content = styled.div`
  padding: 24px;

  .sketch-picker {
    max-width: 250px;
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #6a6666;
    margin-bottom: 18px;
  }
`;
