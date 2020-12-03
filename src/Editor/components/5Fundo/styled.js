import styled from '@emotion/styled';
import { CloudUpload } from '@emotion-icons/boxicons-regular/CloudUpload';

export const SidebarMenuWrapper5 = styled.div`
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
  width: 252px;

  &.open {
    transform: translateX(0%);
    visibility: visible;
  }

  input {
    border-radius: 4px;
  }
`;

export const UploadIconBG = styled(CloudUpload)`
  width: 1.5rem;
  height: 1.5rem;
  color: #fff;
  transition: all 200ms ease-in-out;
`;

export const ContentWrapperFundo = styled.div`
  width: 100%;
  padding: 1rem;

  .chrome-picker {
    box-shadow: none !important;
  }

  h3 {
    text-align: left;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
`;

export const AddImageFundo = styled.form`
  input[type='file'] {
    display: none;
  }
  label {
    border: none;
    display: inline-block;
    text-align: center;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
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

export const RemoveImgFundo = styled.div`
  margin: 0 auto;
  display: flex;
  button {
    margin: 0.5rem auto;
    border: none;
    background: none;
    text-decoration: underline;
    color: var(--blue);

    &:hover {
      color: var(--red);
    }
  }
`;

export const DeselectImgFundo = styled.div`
  margin: 0 auto;
  display: flex;
  button {
    margin: 0 auto;
    margin-top: 1rem;
    border: none;
    background: none;
    text-decoration: underline;
    color: var(--blue);

    &:hover {
      color: var(--red);
    }
  }
`;

export const ListofAllImgsBgs = styled.div`
  ul {
    display: flex;
    list-style: none;

    li {
      margin: 0.25rem;
      cursor: pointer;
      width: 64px;
      height: 36px;

      &:hover {
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export const Resize = styled.div`
  display: flex;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  label {
    display: block;
  }
  input {
    max-width: 80px;
    padding: 0.5rem;
    border: none;
    margin: 0.25rem;
  }
`;
