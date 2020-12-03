import styled from '@emotion/styled';

export const Wrapper = styled.div`
  .accordion__item {
    border: 2px solid var(--white-3);
    border-radius: 20px;
    background: var(--white-2);
  }

  .accordion__item + .accordion__item {
    margin-top: 1.5rem;
  }

  .accordion__button {
    background: var(--white-2);
    border-radius: 20px;
    cursor: pointer;
    padding: 2rem;
    width: 100%;
    text-align: left;
    border: none;
    position: relative;
  }

  .accordion__button:before {
    display: inline-block;
    position: absolute;
    right: 34px;
    top: 40%;
    content: '';
    height: 10px;
    width: 10px;
    border-bottom: 2px solid var(--gray);
    border-right: 2px solid var(--gray);
    transform: rotate(-45deg);
  }

  .accordion__button[aria-expanded='true']::before,
  .accordion__button[aria-selected='true']::before {
    transform: rotate(45deg);
  }

  [hidden] {
    display: none;
  }

  .accordion__panel {
    padding: 20px;
    animation: fadein 0.35s ease-in;
  }

  /* -------------------------------------------------- */
  /* ---------------- Animation part ------------------ */
  /* -------------------------------------------------- */

  @keyframes fadein {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  h2 {
    margin-top: 0;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.02em;
    margin-bottom: 12px;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.02em;
    color: var(--gray-2);
  }
`;
