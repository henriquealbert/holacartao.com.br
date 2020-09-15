import styled from 'styled-components';
import { ShutDown } from '@styled-icons/remix-line/ShutDown';
import { LinkExternal } from '@styled-icons/boxicons-regular/LinkExternal';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 2rem;
  align-items: center;
  width: 100%;

  div {
    display: flex;
    align-items: center;
  }
  img {
    height: 50px;
  }

  strong {
    margin-left: 2rem;
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

export const Profile = styled.div`
  color: #000;
  div {
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: start;
    margin-left: 1rem;
    margin-right: 2rem;
  }
  p {
    font-size: 1.375rem;
    font-weight: bold;
  }
  span {
    display: block;
  }
`;

export const IconLogout = styled(ShutDown)`
  width: 50px;
  height: 50px;
  color: #fff;
  background: #000;
  padding: 0.7rem;
  border-radius: 50%;
  cursor: pointer;
`;

export const AdminHeaderMenu = styled.ul`
  display: flex;
  margin-left: 2rem;

  li:first-child {
    margin-right: 1rem;
  }

  li {
    a {
      color: #000;
      font-weight: bold;

      &:hover {
        color: var(--green);
        text-decoration: underline;
        svg {
          color: var(--green);
        }
      }
    }
  }

  li:last-child {
    margin-left: 1rem;
  }
`;

export const LinkExternalIcon = styled(LinkExternal)`
  width: 1rem;
  height: 1rem;
  color: #000;
`;
