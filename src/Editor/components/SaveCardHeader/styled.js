import styled from '@emotion/styled';

export const ActionButton = styled.button`
  margin-left: ${(props) => props.marginLeft};
  color: #171923;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    display: block;
    margin: 0;
  }

  &:hover {
    text-decoration: underline;
    color: #2d3748;

    svg {
      color: #2d3748;
    }
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
