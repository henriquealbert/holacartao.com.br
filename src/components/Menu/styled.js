import styled from '@emotion/styled';

export const MenuContainer = styled.div`
  button {
    border: none;
    transition: all 1s;
  }
  @media (min-width: 768px) {
    button {
      display: none;
    }
  }
`;

export const MenuWrapper = styled.div`
  color: #fff;
  width: 175px;
  position: fixed;
  padding: 0.9rem;
  right: 0;
  top: 66px;
  background: var(--white);
  transform: translateX(110%);
  transition: all 0.5s;
  overflow-x: hidden;
  border-radius: 20px 0 0 20px;
  z-index: 50;

  &.open {
    transform: translateX(0);
  }

  @media (min-width: 768px) {
    height: initial;
    width: initial;
    background: initial;
    position: initial;
    display: initial;
    padding: 0;

    nav {
      ul {
        display: flex;
        align-items: center;
      }
    }
  }
`;

export const Links = styled.li`
  text-align: center;
  padding: 0.9rem;
  text-align: right;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.02em;

  a {
    color: #000;
  }

  &:last-child {
    padding-top: 10px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0.9rem 0 0.9rem 0.9rem;
  }

  @media (min-width: 768px) {
    font-weight: bold;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.02em;

    a {
      color: ${(props) => (props.home ? '#fff' : props.btn ? '#fff' : '#000')};
      font-weight: bold;

      &:hover {
        color: ${(props) =>
          props.home ? '#000' : props.btn ? '#fff' : '#1db954'};
      }

      &.active {
        color: #1db954;
      }
    }
    &:last-child {
      border-top: none;
      margin: 0;
    }
  }
`;

export const LogoutMenuA = styled.a`
  cursor: pointer;
`;
