import styled from '@emotion/styled';

export const PrimaryButton = styled.button`
  border: none;
  margin: 0 auto;
  display: block;
  border-radius: 20px;

  a {
    display: block;
    padding: 1rem 2rem;
    text-align: center;
    color: #000;
    font-size: 16px;
    font-weight: bold;
    background: #acdd4f;
    border-radius: 20px;
    justify-content: center;
    text-transform: uppercase;
    transition: all 300ms;
  }
  a:hover {
    background: #99c446;
  }
`;
