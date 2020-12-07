import styled from '@emotion/styled';
import {
  BsOctagonFill,
  BsStarFill,
  BsFillTriangleFill,
  BsSquareFill,
  BsCircleFill
} from 'react-icons/bs';

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
  margin-left: 80px;

  &.open {
    transform: translateX(0%);
    visibility: visible;
  }
`;

export const SquareIcon = styled(BsSquareFill)`
  margin: 2px;
  width: 33px;
  display: inline-block;
  height: 33px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    color: var(--grey);
  }
`;

export const CircleIcon = styled(BsCircleFill)`
  margin: 2px;
  width: 33px;
  display: inline-block;
  height: 33px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    color: var(--grey);
  }
`;

export const TriangleIcon = styled(BsFillTriangleFill)`
  margin: 2px;
  width: 33px;
  display: inline-block;
  height: 33px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    color: var(--grey);
  }
`;

export const HexagonFillIcon = styled(BsOctagonFill)`
  margin: 2px;
  width: 33px;
  display: inline-block;
  height: 33px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    color: var(--grey);
  }
`;

export const StarFillIcon = styled(BsStarFill)`
  margin: 2px;
  width: 33px;
  display: inline-block;
  height: 33px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    color: var(--grey);
  }
`;
