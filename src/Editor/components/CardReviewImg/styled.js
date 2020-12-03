import styled from '@emotion/styled';

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
