import styled from '@emotion/styled';

export const Wrapper = styled.nav`
  margin: 3.5rem 0 2rem;

  ul {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #c1bbbb;

    li {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 37px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #c9c3c3;
      padding-right: 2rem;
      cursor: pointer;

      &.active {
        color: var(--black);
        border-bottom: 2px solid var(--black);
      }
    }
  }
`;
