import styled from '@emotion/styled';

export const SidebarMenuWrapper1 = styled.div`
  display: flex;
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
  width: 252px;

  &.open {
    transform: translateX(0%);
    visibility: visible;
  }

  input {
    border-radius: 4px;
  }
`;

export const ContentWrapperColor = styled.div`
  width: 100%;
  padding: 1rem;

  .chrome-picker {
    box-shadow: none !important;
  }

  h3 {
    text-align: left;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
`;
