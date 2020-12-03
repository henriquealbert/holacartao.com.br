import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  width: 100%;
  background: var(--white);
  height: 66px;
  z-index: 100;
`;

export const HeaderContainer = styled.div`
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  width: 90%;

  img {
    height: 50px;
  }
`;
