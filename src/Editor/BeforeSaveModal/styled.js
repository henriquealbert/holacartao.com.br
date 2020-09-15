import styled from 'styled-components';

export const BeforeSaveModalWrapper = styled.div``;

export const ModalContent = styled.div`
  padding: 2rem;
`;

export const CardReviewImg = styled.div`
  display: flex;
  margin: 2rem 0;

  img {
    width: 600px;
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2);
    margin-right: 2rem;
  }

  div + div > img {
    margin: 0;
  }

  span {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: var(--darker-grey);
  }
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
