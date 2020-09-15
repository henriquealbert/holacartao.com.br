import styled from 'styled-components';

export const BannerWrapper = styled.section`
  background: #ececec;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;

  h2 {
    width: 120px;
    font-weight: 900;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #000000;
    border-bottom: 3px solid #acdd4f;
    margin: 1rem;
    padding-bottom: 0.5rem;
  }

  ul {
    list-style: none;
    margin: 1rem;
    li {
      color: #484040;
      font-weight: bold;
      font-size: 16px;
      line-height: 23px;
      padding-bottom: 6px;
    }
  }
`;
