import styled from 'styled-components';

export const MyAccDataEditWrapper = styled.div`
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

  form {
    label {
      display: block;
      font-size: 1rem;
      line-height: 1.2;
      padding-bottom: 0.5rem;
    }
    div {
      margin-bottom: 1.5rem;
      input {
        background: #c4c4c4;
        border-radius: 25px;
        width: 100%;
        height: 35px;
        display: block;
        border: none;
        padding: 0.5rem 1rem;
        color: #000;
        font-weight: bold;

        &::placeholder {
          font-weight: normal;
        }
      }
      span {
        display: block;
        color: #fe0e38;
        margin: 0;
        font-size: 0.75rem;
      }
    }
  }
`;

export const SolidBtn = styled.button`
  align-self: flex-end;
  padding: 0.5rem 0.75rem;
  display: inline-block;
  color: #fff;
  background: var(--green);
  border: 2px solid var(--green);
  border-radius: 5px;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.2;
  transition: all 250ms ease-in-out;
  margin-bottom: 2rem;
  cursor: pointer;

  &:hover {
    background: var(--dark-green);
    border: 2px solid var(--dark-green);
  }
`;
