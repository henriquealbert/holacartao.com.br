import styled from '@emotion/styled';

export const AddBtnWrapper = styled.div`
  align-self: flex-end;
  button {
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    border: none;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #fff;
    background: #000;
    font-size: 1.35rem;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);
    transition: all 300ms ease-in-out;

    &:hover {
      box-shadow: none;
    }
  }
  a {
    color: #fff;
  }
`;
