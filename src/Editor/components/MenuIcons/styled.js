import styled from '@emotion/styled';
import { ColorFill, ImageAdd, Shapes } from '@emotion-icons/boxicons-solid';
import { Texture } from '@emotion-icons/material/Texture';
import { Text } from '@emotion-icons/evaicons-solid/Text';

export const EditorSidebar = styled.div`
  background: #000000;
  border-radius: 0px 10px 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 2;
  position: relative;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0;

    li {
      display: flex;
      flex-direction: column;
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.7rem;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 1rem;
    }
  }
`;

export const ColorIcon = styled(ColorFill)`
  width: 40px;
  height: 40px;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #33df6e;
  }
  &.active {
    color: #33df6e;
  }
`;

export const FundoIcon = styled(Texture)`
  width: 40px;
  height: 40px;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #33df6e;
  }
  &.active {
    color: #33df6e;
  }
`;

export const ImageAddIcon = styled(ImageAdd)`
  width: 40px;
  height: 40px;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #33df6e;
  }
  &.active {
    color: #33df6e;
  }
`;

export const TextIcon = styled(Text)`
  width: 40px;
  height: 40px;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #33df6e;
  }
  &.active {
    color: #33df6e;
  }
`;

export const ShapesIcon = styled(Shapes)`
  width: 40px;
  height: 40px;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #33df6e;
  }
  &.active {
    color: #33df6e;
  }
`;
