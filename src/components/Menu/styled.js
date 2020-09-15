import styled from 'styled-components';
import media from 'styled-media-query';
import { Menu } from '@styled-icons/entypo/Menu';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

export const MenuContainer = styled.div`
  button {
    border: none;
    transition: all 1s;
  }
  ${media.greaterThan('medium')`
    button {
      display: none;
    }
  `}
`;

export const MenuWrapper = styled.div`
  color: #fff;
  width: 175px;
  position: fixed;
  right: 0;
  top: 66px;
  background: #000000;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.5);
  transform: translateX(110%);
  transition: all 0.5s;
  overflow-x: hidden;
  border-radius: 0 0 0 20px;

  &.open {
    transform: translateX(0);
  }

  li {
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    padding: 0.9rem;
    text-align: right;
  }

  li:last-child {
    padding-top: 10px;
    border-top: 3px solid #fff;
    margin-left: 3rem;
    margin-right: 0.9rem;
    padding: 0.9rem 0 0.9rem 0.9rem;
  }

  li {
    a {
      color: #fff;

      &:hover {
        color: #acdd4f;
        border-bottom: 2px solid #acdd4f;
      }

      &.active {
        color: #acdd4f;
        border-bottom: 2px solid #acdd4f;
      }
    }
  }

  ${media.greaterThan('medium')`
    height: initial;
    width: initial;
    background: initial;
    position: initial;
    display: initial;

    nav {
      ul {
        display: flex;

        li {
          text-transform: uppercase;
          font-weight: bold;
        }
        li:last-child {
          border-top: none;
          margin: 0;
        }
      }
    }
  `};
`;

export const OpenMenu = styled(Menu)`
  height: 50px;
  width: 50px;
  background: #000;
  color: #fff;
  border: none;
`;

export const CloseMenu = styled(CloseOutline)`
  height: 50px;
  width: 50px;
  background: #000;
  color: #fff;
  border: none;
`;

export const LogoutMenuA = styled.a`
  cursor: pointer;
`;
