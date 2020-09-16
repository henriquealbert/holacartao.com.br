import styled from 'styled-components';

export const BeforeSaveModalWrapper = styled.div``;

export const ModalContent = styled.div`
  padding: 2rem;
`;

export const ButtonsModal = styled.div`
  display: flex;
  justify-content: space-between;

  button:first-child {
    border: none;
    background: none;
  }

  button:last-child {
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    border: none;
    background: var(--green);
    font-weight: bold;
  }
`;
