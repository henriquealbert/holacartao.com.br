import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: absolute;
  border-bottom: 2px solid #c4c4c4;
  top: -55px;
  right: 0;
  width: 640px;
  display: flex;
  justify-content: space-between;

  &.left {
    top: -70px;
    width: 360px;
  }
`;

export const LabelTop = styled.div`
  position: relative;
  padding-bottom: 0.5rem;
  color: #737373;
  font-family: 'Varela';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;

  &.middle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &.last {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const Point = styled.div`
  width: 10px;
  height: 10px;
  background-color: #c4c4c4;
  position: absolute;
  bottom: -5px;
  border-radius: 50%;
`;

export const WrapperLeft = styled.div`
  position: absolute;
  transform: rotate(-90deg);
`;
