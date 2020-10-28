import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 5rem;

  label {
    display: block;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 23px;
    margin-bottom: 8px;
  }
  input {
    display: block;
    border: 1px solid #9f9595;
    border-radius: 5px;
    width: 380px;
    padding: 11px 15px;
    font-family: 'Montserrat';
    font-size: 13px;
    line-height: 23px;
    color: var(--black);
  }
`;

export const FormGroup = styled.div`
  display: flex;
  margin: 22px 0;
`;

export const FormItem = styled.div`
  margin-right: 3.375rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
`;
