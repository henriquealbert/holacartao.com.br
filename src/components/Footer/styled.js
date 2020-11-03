import styled from 'styled-components';
import { InstagramAlt } from '@styled-icons/boxicons-logos';

export const Container = styled.footer`
  background: var(--black);
  color: var(--white);
`;

export const Wrapper = styled.div`
  padding: 2rem 0;
  @media (min-width: 900px) {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`;

export const InfoWrapper = styled.div`
  @media (min-width: 900px) {
    display: flex;
  }
`;

export const LinksWrapper = styled.div`
  @media (min-width: 900px) {
    margin-right: 5rem;
    a {
      text-align: left;
    }
  }

  a {
    color: var(--white);
    display: block;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 30px;
    text-align: center;

    &:hover {
      color: var(--white-3);
      text-decoration: underline;
    }
  }
`;

export const Social = styled.a`
  margin-top: 1rem;
  color: var(--white);
  display: block;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;
  cursor: pointer;

  &:hover {
    color: var(--white-3);
    text-decoration: underline;

    svg {
      color: var(--white-3);
    }
  }
`;

export const EmailWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 30px;
  text-align: center;
  margin-top: 2rem;

  @media (min-width: 900px) {
    text-align: left;
    margin-top: 0;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  @media (min-width: 900px) {
    display: block;
    margin-top: 0;
  }
`;

export const Instagram = styled(InstagramAlt)`
  width: 35px;
  height: 35px;
  color: var(--white);
  margin-right: 0.25rem;
`;
