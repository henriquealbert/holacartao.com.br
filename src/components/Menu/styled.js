import styled from '@emotion/styled';
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
  background: var(--white);
  transform: translateX(110%);
  transition: all 0.5s;
  overflow-x: hidden;
  border-radius: 0 0 0 20px;
  z-index: 50;

  &.open {
    transform: translateX(0);
  }

  li {
    text-align: center;
    padding: 0.9rem;
    text-align: right;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
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
      color: var(--black);
      font-weight: 500;

      &:hover {
        font-weight: 800;
      }

      &.active {
        font-weight: 800;
      }
    }
  }

  @media (min-width: 768px) {
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
          font-weight: 500;
          font-size: 13px;
          line-height: 23px;
          letter-spacing: 0.02em;
        }
        li:last-child {
          border-top: none;
          margin: 0;
        }
      }
    }
  }
`;

export const OpenMenu = styled(Menu)`
  height: 50px;
  width: 50px;
  background: var(--white);
  color: var(--black);
  border: none;
`;

export const CloseMenu = styled(CloseOutline)`
  height: 50px;
  width: 50px;
  background: var(--white);
  color: var(--black);
  border: none;
`;

export const LogoutMenuA = styled.a`
  cursor: pointer;
`;
