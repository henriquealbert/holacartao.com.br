import styled from 'styled-components';

export const OrderObsHistory = styled.div`
  h3 {
    font-weight: normal;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
`;

export const ObsItem = styled.div`
  background: #e5e5e5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    line-height: 1.5;
  }

  small {
    color: #8e8e8e;
  }
`;
