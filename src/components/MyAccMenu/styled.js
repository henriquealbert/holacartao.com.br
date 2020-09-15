import styled from 'styled-components';

export const MyAccMenu = styled.nav`
  display: flex;
  flex-direction: column;
  width: 150px;
  background: #282a2d;
  border-radius: 4px;
  color: #fff;
  height: 100%;
  margin-right: 2rem;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      border-radius: 4px;

      a {
        font-size: 1.125rem;
        font-weight: normal;
        line-height: 1.2;
        padding: 0.75rem;
        display: block;
        color: #ffffff;
        border-radius: 4px;
        cursor: pointer;

        &:hover,
        &.active {
          background: var(--green);
          border-radius: 4px;
          color: #000;
        }
      }
    }
  }
`;
