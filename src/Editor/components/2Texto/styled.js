import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  background: #eeeeee;
  border-radius: 10px;
  transform: translateX(-200%);
  transition: all 350ms ease-in-out;
  overflow-x: hidden;
  visibility: hidden;
  position: absolute;
  top: auto;
  bottom: auto;
  width: 316px;
  margin-left: 1rem;

  &.open {
    transform: translateX(0%);
    visibility: visible;
  }
`;

export const SelectFont = styled.div`
  margin-bottom: 1rem;
  div[id^='font-picker'] {
    width: 100% !important;
    border-radius: 20px;
  }
  div[id^='font-picker'] .dropdown-button:hover,
  div[id^='font-picker'] .dropdown-button:focus {
    background-color: #e1e1e1 !important;
    border-radius: 20px;
    padding: 12px 20px;
  }
  div[id^='font-picker'] .dropdown-button {
    background-color: #e1e1e1 !important;
    border-radius: 20px;
    padding: 12px 20px;
    height: 38px;
  }

  div[id^='font-picker'].expanded ul {
    max-height: 180px !important;
  }
`;
