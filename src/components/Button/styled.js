import styled from '@emotion/styled';

export const Wrapper = styled.button`
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.11) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #050505;
  border-radius: 20px;
  border: none;
  padding: 15px 45px;
  color: #fff;
  font-family: 'Varela', sans-serif;
  font-size: 15px;
  line-height: 23px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  &:hover {
    background: linear-gradient(
        180deg,
        rgba(252, 252, 252, 0.5) 13.54%,
        rgba(255, 255, 255, 0) 100%
      ),
      #0e0e0d;
  }
`;
