import styled from '@emotion/styled';

export const SidebarMenuWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  background: #e5e5e5;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  transform: translateX(-200%);
  transition: all 350ms ease-in-out;
  overflow-x: hidden;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  position: absolute;
  top: auto;
  bottom: auto;
  left: 95px;
  width: 220px;

  &.open {
    transform: translateX(0%);
    visibility: visible;
  }

  .slider-picker {
    margin: 1rem 0;
    width: 200px;
    height: 40px;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 1rem;

  h3 {
    text-align: left;
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
  }
`;

export const TextStyle = styled.div`
  button:first-child {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-style: italic;
  }
  button:last-child {
    margin: 0;
    text-decoration: underline;
  }
  button {
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
    border: none;
    background: var(--darker-grey);
    margin-bottom: 1rem;
    color: #fff;
    border-radius: 0.5rem;
    transition: all 200ms ease-in-out;
    &:hover {
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
      background: var(--grey);
      color: #000;
    }
  }
  .active {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    background: var(--grey);
    color: #000;
  }
`;

export const AddTxt = styled.button`
  border: none;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  background: var(--darker-grey);
  color: #fff;
  border-radius: 0.5rem;
  transition: all 200ms ease-in-out;

  &:hover {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    background: var(--grey);
    color: #000;
  }
`;

export const SelectFont = styled.div`
  margin-bottom: 1rem;
  div[id^='font-picker'] {
    width: 188px !important;
  }

  div[id^='font-picker'].expanded ul {
    max-height: 180px !important;
  }
`;

export const SizeFont = styled.input`
  border: none;
  padding: 0.5rem 1rem;
  width: 5rem;
  background: var(--darker-grey);
  color: #fff;
  border-radius: 0.5rem;
  transition: all 200ms ease-in-out;
  &::-webkit-inner-spin-button {
    opacity: 1;
  }
`;

export const ChangeTextWrapper = styled.div`
  textarea {
    font-family: 'Roboto', sans-serif;
    border: none;
    padding: 0.5rem 1rem;
    width: 5rem;
    background: var(--grey);
    color: #000;
    border-radius: 0.5rem;
    transition: all 200ms ease-in-out;
    display: block;
    width: 100%;
    margin-bottom: 0.5rem;
  }
  button {
    border: none;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    background: var(--darker-grey);
    color: #fff;
    border-radius: 0.5rem;
    transition: all 200ms ease-in-out;

    &:hover {
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
      color: #000;
    }
  }
`;

export const Align = styled.div``;
