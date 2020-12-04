import styled from '@emotion/styled';

export const ButtonItem = styled.button`
  width: 90px;
  height: 90px;
  background: #ffffff;
  box-shadow: ${(props) =>
    props.active
      ? 'inset 2px 2px 5px rgba(0, 0, 0, 0.15)'
      : '0px 2px 2px rgba(0, 0, 0, 0.15)'};
  border-radius: 20px;
  outline: rgba(0, 0, 0, 0.05);
  margin-bottom: ${(props) => props.marginBottom};

  p {
    padding-top: 11px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: ${(props) => (props.active ? '#1DB954' : '')};
  }

  svg {
    color: ${(props) => (props.active ? '#1DB954' : '')};
  }
`;
