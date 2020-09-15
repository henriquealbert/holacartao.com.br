import styled from 'styled-components';
import { ArrowBack } from '@styled-icons/boxicons-regular/ArrowBack';

export const OrderContainer = styled.section`
  width: 95%;
  margin: 1rem auto;
`;

export const OrderContent = styled.div`
  width: 80%;
  margin: 1rem auto;
`;

export const ArrowBackIcon = styled(ArrowBack)`
  width: 2rem;
  height: 2rem;
  display: block;
  cursor: pointer;
  color: #000;
  margin-right: 0.5rem;
`;

export const BackButton = styled.div`
  display: flex;
  align-items: center;
  color: #000;
`;

export const OrderClientData = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
`;
