import styled from 'styled-components';
import { CloudUpload } from '@styled-icons/boxicons-regular/CloudUpload';

export const SidebarMenuWrapper4 = styled.div`
  display: flex;
  background: #e5e5e5;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  transform: translateX(-200%);
  transition: all 350ms ease-in-out;
  overflow-x: hidden;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  position: absolute;
  top: auto;
  bottom: auto;
  left: 95px;
  width: 220px;

  &.open {
    transform: translateX(0%);
    visibility: visible;
  }
`;

export const ContentWrapper4 = styled.div`
  width: 100%;
  padding: 1rem;

  h3 {
    text-align: left;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.85rem;
    color: var(--darker-grey);
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
    margin-bottom: 1rem;
    background: var(--darker-grey);
    color: #fff;
    border-radius: 0.5rem;
    transition: all 200ms ease-in-out;
    cursor: pointer;

    &:hover {
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
      background: var(--grey);
      color: #000;
      svg {
        color: #000;
      }
    }
  }
`;

export const UploadIcon = styled(CloudUpload)`
  width: 1.5rem;
  height: 1.5rem;
  color: #fff;
  transition: all 200ms ease-in-out;
`;

export const ListofAllImgsUploaded = styled.div`
  h4 {
    margin-top: 0.5rem;
    margin-bottom: 0.25rem;
  }
  ul {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    justify-content: center;

    li {
      width: 5rem;
      height: 3.25rem;
      cursor: pointer;
      margin: 0.25rem;
      border: none;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        max-width: 5rem;
        max-height: 3.25rem;
        border: none;
      }
    }
  }
`;
