import styled from '@emotion/styled';
import { BiArrowBack } from 'react-icons/bi';

export const OrderContainer = styled.section`
  width: 95%;
  margin: 1rem auto;
`;

export const OrderContent = styled.div`
  width: 80%;
  margin: 1rem auto;
`;

export const ArrowBackIcon = styled(BiArrowBack)`
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
