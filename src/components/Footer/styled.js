import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: #000;
  color: #fff;
  padding: 1rem;
  text-align: center;

  ul {
    list-style: none;
    margin-bottom: 1rem;

    li {
      font-size: 1rem;
      font-weight: bold;
      line-height: 1.5;

      a {
        color: #fff;

        &:hover {
          color: #c4c4c4;
        }
      }
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

export const Copyright = styled.span`
  margin-top: 2rem;
  display: block;
`;
