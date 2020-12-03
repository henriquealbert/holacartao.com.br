import styled from '@emotion/styled';
import { SearchAlt2 } from '@styled-icons/boxicons-regular/SearchAlt2';

export const SeachWrapper = styled.div`
  margin: 2rem;
  display: flex;
  position: relative;
`;

export const SearchIcon = styled(SearchAlt2)`
  width: 20px;
  height: 20px;
  margin-right: 0.25rem;
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #e5e5e5;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 0.5rem;

  input {
    width: 210px;
    height: 1rem;
    background: #e5e5e5;
    border: none;
    padding-left: 1rem;
  }
`;

export const DropdownList = styled.div`
  width: 250px;
  position: absolute;
  padding: 0.5rem;
  border-radius: 15px;
  background: #fff;
  top: 2.25rem;
  z-index: 2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const UserInfo = styled.div`
  margin: 0.5rem 0;
  background: var(--lighter-grey);
  border-radius: 15px;
  transition: all 150ms ease-in-out;

  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }

  ul {
    padding: 0.5rem;
    li {
      display: flex;
      font-weight: bold;
      color: #000;
      span {
        color: var(--darker-grey);
        margin-left: 0.35rem;
        font-weight: normal;
      }
    }
  }
`;
