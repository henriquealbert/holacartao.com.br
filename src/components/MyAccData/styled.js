import styled from '@emotion/styled';

export const MyAccData = styled.div`
  width: 750px;

  h2 {
    font-size: 1.5rem;
    font-weight: normal;
    line-height: 1.2;
    margin-bottom: 1.875rem;

    &:before {
      display: block;
      content: '';
      width: 32px;
      height: 3px;
      border-radius: 10px;
      background: #000;
      margin-bottom: 0.625rem;
    }
  }

  ul {
    overflow-x: scroll;
    width: 100%;
    display: table;
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    color: #7d7d7d;
    border-collapse: collapse;
    border-spacing: 2px;
    border-color: grey;

    li {
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);

      span {
        font-weight: bold;
        padding: 0.625rem 0 0.625rem 0;
        display: inline-block;
        width: 200px;
      }
    }
  }
  div {
    display: flex;
    flex-direction: column;
  }
`;

export const OutlineBtn = styled.a`
  align-self: flex-end;
  padding: 0.5rem 0.75rem;
  display: inline-block;
  color: var(--green);
  border: 2px solid var(--green);
  border-radius: 5px;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.2;
  transition: all 250ms ease-in-out;
  margin-bottom: 2rem;
  cursor: pointer;
  background: #fff;

  &:hover {
    background: var(--green);
    color: #ffffff;
  }
`;
