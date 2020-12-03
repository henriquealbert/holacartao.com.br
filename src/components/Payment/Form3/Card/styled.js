import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  display: flex;
`;

export const CardContainer = styled.div`
  margin-right: 2rem;
`;

export const FormWrapper = styled.form`
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
    padding: 11px 15px;
    font-family: 'Montserrat';
    font-size: 13px;
    line-height: 23px;
    color: var(--black);
    background: inherit;
  }
`;
export const Input = styled.input`
  width: 300px;
  margin-right: 2rem;
  margin-bottom: 1rem;
`;

export const MiniInput = styled.input`
  width: 150px;
`;

export const FormGroup = styled.div`
  display: flex;
`;
