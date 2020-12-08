import styled from '@emotion/styled';

export const StepWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StepItem = styled.div`
  display: flex;
  margin: 3rem 2.5rem 3rem 0;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: var(--green);
  text-align: center;
  width: 4rem;
  height: 4rem;

  span:first-of-type {
    font-weight: 900;
    font-size: 3rem;
  }
`;

export const StepItemInactive = styled.div`
  display: flex;
  margin: 3rem 2.5rem 3rem 0;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #c4c4c4;
  text-align: center;
  width: 2.5rem;
  height: 2.5rem;

  &:last-child {
    margin: 3rem 0;
  }

  span:first-of-type {
    font-weight: 900;
    font-size: 1.5rem;
    color: #a19898;
  }
`;
