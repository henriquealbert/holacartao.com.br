import * as S from './styled';
import { SketchPicker } from 'react-color';
import axios from 'axios';
import { nanoid } from 'nanoid';

export default function Item5({ openItem5, editorStore }) {
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

  const handleChangeInputs = (e, option) => {
    if (!imageBG.id) {
      return;
    }

    const found = store.filter((element) => element.id === imageBG.id);

    function updateStore() {
      const elements = store.filter((element) => element.id !== imageBG.id);
      elements.push(found[0]);
      setStore(elements);
      setImageBG(found[0]);
    }

    if (option === 'height') {
      found[0].height = Number(e.target.value);
      updateStore();
    }
    if (option === 'width') {
      found[0].width = Number(e.target.value);
      updateStore();
    }
    if (option === 'x') {
      found[0].x = Number(e.target.value);
      updateStore();
    }
    if (option === 'y') {
      found[0].y = Number(e.target.value);
      updateStore();
    }
    if (option === 'rotation') {
      found[0].rotation = Number(e.target.value);
      updateStore();
    }
  };
  console.log('store', store);

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

        <S.Resize>
          <div>
            <label htmlFor="altura">Altura</label>
            <input
              type="number"
              name="altura"
              id="altura"
              value={imageBG.height}
              onChange={(e) => handleChangeInputs(e, 'height')}
            />
          </div>
          <div>
            <label htmlFor="largura">Largura</label>
            <input
              type="number"
              name="largura"
              id="largura"
              value={imageBG.width}
              onChange={(e) => handleChangeInputs(e, 'width')}
            />
          </div>
          <div>
            <label htmlFor="x">x</label>
            <input
              type="number"
              name="x"
              id="x"
              value={imageBG.x}
              onChange={(e) => handleChangeInputs(e, 'x')}
            />
          </div>
          <div>
            <label htmlFor="y">y</label>
            <input
              type="number"
              name="y"
              id="y"
              value={imageBG.y}
              onChange={(e) => handleChangeInputs(e, 'y')}
            />
          </div>
          <div>
            <label htmlFor="girar">girar</label>
            <input
              type="number"
              name="girar"
              id="girar"
              value={imageBG.rotation}
              onChange={(e) => handleChangeInputs(e, 'rotation')}
              min="-360"
              max="360"
            />
          </div>
        </S.Resize>
      </S.ContentWrapperFundo>
    </S.SidebarMenuWrapper5>
  );
}
