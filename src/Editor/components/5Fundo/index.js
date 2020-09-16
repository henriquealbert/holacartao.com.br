import * as S from './styled';
import { SketchPicker } from 'react-color';
import axios from 'axios';
import { nanoid } from 'nanoid';

export default function Item5({ openItem5, editorStore }) {
  const { setStore, store, colorBG, setColorBG, setImageBG } = editorStore;

  // change bg color
  const changeColorBG = () => {
    const bg = store.filter((element) => element.type === 'bg');
    bg[0].fill = colorBG;
    const elements = store.filter((element) => element.id !== bg[0].id);
    elements.push(bg[0]);
    setStore(elements);
  };

  // get all img-bg
  const imgsbgs = store.filter((element) => element.type === 'image-bg');

  const handleChange = async (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append('files', file);
    const upload_res = await axios({
      method: 'POST',
      url: 'http://localhost:1337/upload',
      data
    });
    const url = `http://localhost:1337${upload_res.data[0].url}`;
    const imgObject = {
      url: url,
      id: String(nanoid() + Date.now()),
      type: 'image-bg',
      x: 0,
      y: 0,
      width: 640,
      height: 361
    };
    setImageBG(imgObject);
    // adding to store
    setStore([...store, imgObject]);
  };

  const removeImage = () => {
    setImageBG('');
  };

  // Change image based on the ones that have already been uploaded
  const setImgBG = (id) => {
    const clickedImg = imgsbgs.filter((element) => element.id === id);
    setImageBG(clickedImg[0]);
  };

  return (
    <S.SidebarMenuWrapper5 className={openItem5 !== true ? '' : 'open'}>
      <S.ContentWrapperFundo>
        <h3>Cor de Fundo</h3>

        <SketchPicker
          color={colorBG}
          disableAlpha={true}
          onChange={(color) => {
            setColorBG(color.hex);
          }}
          onChangeComplete={changeColorBG}
          presetColors={[]}
        />

        <S.AddImageFundo>
          <input
            type="file"
            name="files"
            id="image-upload"
            onChange={handleChange}
          />
          <label htmlFor="image-upload">
            <S.UploadIconBG />
            Faça o Upload de uma Imagem
          </label>
        </S.AddImageFundo>

        <S.RemoveImgFundo>
          <button onClick={removeImage}>Remover imagem de fundo</button>
        </S.RemoveImgFundo>
        <S.ListofAllImgsBgs>
          <h4>Fundos já carregados:</h4>
          <ul>
            {imgsbgs.length === 0 ? (
              <small>Não há nenhuma imagem carregada.</small>
            ) : (
              imgsbgs?.map((imgbg) => {
                return (
                  <li key={imgbg.id} onClick={() => setImgBG(imgbg.id)}>
                    <img src={imgbg.url} />
                  </li>
                );
              })
            )}
          </ul>
        </S.ListofAllImgsBgs>
      </S.ContentWrapperFundo>
    </S.SidebarMenuWrapper5>
  );
}
