import styled from '@emotion/styled';
import { BiCloudUpload } from 'react-icons/bi';

export const SidebarMenuWrapper5 = styled.div`
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

  .sketch-picker {
    max-width: 250px;
  }
`;

export const AddImg = styled.form`
  input[type='file'] {
    display: none;
  }
  label {
    border: none;
    display: inline-block;
    text-align: center;
    padding: 0.5rem 1rem;
    background: #1db954;
    color: #fff;
    border-radius: 20px;
    transition: all 200ms ease-in-out;
    cursor: pointer;
    font-family: 'Roboto';
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
    line-height: 1;

    &:hover {
      box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
      background: #17ab4b;
    }
  }
`;
export const UploadIcon = styled(BiCloudUpload)`
  width: 1.5rem;
  height: 1.5rem;
  color: #fff;
  transition: all 200ms ease-in-out;
  display: inline-block;
  margin-right: 0.25rem;
`;
