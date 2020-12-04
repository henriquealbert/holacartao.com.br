import * as S from './styled';
import { SketchPicker } from 'react-color';
import axios from 'axios';
import { nanoid } from 'nanoid';

export default function Item5({ openMenu, editorStore }) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const {
    setStore,
    store,
    colorBG,
    setColorBG,
    setImageBG,
    imageBG
  } = editorStore;

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
      url: `${API_URL}/upload`,
      data
    });
    const url = `${API_URL}${upload_res.data[0].url}`;
    const imgObject = {
      url: url,
      id: String(nanoid() + Date.now()),
      type: 'image-bg',
      x: 320,
      y: 180.5,
      width: 640,
      height: 361,
      rotation: 0
    };
    setImageBG(imgObject);
    // adding to store
    setStore([...store, imgObject]);
  };

  const removeImage = () => {
    if (imgsbgs.length > 0) {
      setImageBG('');
      const elements = store.filter((element) => element.id !== imgsbgs[0].id);
      setStore(elements);
    }
  };

  const handleChangeInputs = (value, option) => {
    if (!imageBG.id) {
      return;
    }

    if (option === 'height') {
      const found = store.filter((element) => element.id === imageBG.id);
      found[0].height = Number(value);
      const elements = store.filter((element) => element.id !== imageBG.id);
      elements.push(found[0]);
      setStore(elements);
      setImageBG(found[0]);
    }
    if (option === 'width') {
      const found = store.filter((element) => element.id === imageBG.id);
      found[0].width = Number(value);
      const elements = store.filter((element) => element.id !== imageBG.id);
      elements.push(found[0]);
      setStore(elements);
      setImageBG(found[0]);
    }
    if (option === 'x') {
      const found = store.filter((element) => element.id === imageBG.id);
      found[0].x = Number(value);
      const elements = store.filter((element) => element.id !== imageBG.id);
      elements.push(found[0]);
      setStore(elements);
      setImageBG(found[0]);
    }
    if (option === 'y') {
      const found = store.filter((element) => element.id === imageBG.id);
      found[0].y = Number(value);
      const elements = store.filter((element) => element.id !== imageBG.id);
      elements.push(found[0]);
      setStore(elements);
      setImageBG(found[0]);
    }
    if (option === 'rotation') {
      const found = store.filter((element) => element.id === imageBG.id);
      found[0].rotation = Number(value);
      const elements = store.filter((element) => element.id !== imageBG.id);
      elements.push(found[0]);
      setStore(elements);
      setImageBG(found[0]);
    }
  };

  return (
    <S.SidebarMenuWrapper5 className={openMenu === 'fundo' ? 'open' : ''}>
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

        <S.Resize>
          <div>
            <label htmlFor="altura">Altura</label>
            <input
              type="number"
              name="altura"
              id="altura"
              value={imageBG.height}
              onChange={({ target }) =>
                handleChangeInputs(target.value, 'height')
              }
            />
          </div>
          <div>
            <label htmlFor="largura">Largura</label>
            <input
              type="number"
              name="largura"
              id="largura"
              value={imageBG.width}
              onChange={({ target }) =>
                handleChangeInputs(target.value, 'width')
              }
            />
          </div>
          <div>
            <label htmlFor="x">x</label>
            <input
              type="number"
              name="x"
              id="x"
              value={imageBG.x}
              onChange={({ target }) => handleChangeInputs(target.value, 'x')}
            />
          </div>
          <div>
            <label htmlFor="y">y</label>
            <input
              type="number"
              name="y"
              id="y"
              value={imageBG.y}
              onChange={({ target }) => handleChangeInputs(target.value, 'y')}
            />
          </div>
          <div>
            <label htmlFor="girar">girar</label>
            <input
              type="number"
              name="girar"
              id="girar"
              value={imageBG.rotation}
              onChange={({ target }) =>
                handleChangeInputs(target.value, 'rotation')
              }
              min="-360"
              max="360"
            />
          </div>
        </S.Resize>
      </S.ContentWrapperFundo>
    </S.SidebarMenuWrapper5>
  );
}
