import styled from 'styled-components';
import media from 'styled-media-query';

export const HeaderWrapper = styled.header`
  width: 100%;
  background: #000;
  height: 66px;
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
