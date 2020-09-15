import * as S from './styled';
import { useEditorStoreVerso } from '../../../Store';
import axios from 'axios';
import { nanoid } from 'nanoid';

export default function Item4({ openItem4 }) {
  const {
    setStore,
    store,
    imageLibrary,
    setImageLibrary
  } = useEditorStoreVerso();

  // get all images
  const imgs = store.filter((element) => element.type === 'image');

  // add new image from file
  const addImage = async (e) => {
    const file = e.target.files[0];
    if (file === undefined) {
      return;
    }
    const data = new FormData();
    data.append('files', file);
    const upload_res = await axios({
      method: 'POST',
      url: 'http://localhost:1337/upload',
      data
    });

    const url = `http://localhost:1337${upload_res.data[0].url}`;

    const width =
      upload_res.data[0].width <= 50
        ? upload_res.data[0].width
        : upload_res.data[0].width / 2;

    const height =
      upload_res.data[0].height <= 50
        ? upload_res.data[0].height
        : upload_res.data[0].height / 2;

    const imgObject = {
      url: url,
      id: String(nanoid() + Date.now()),
      type: 'image',
      x: 0,
      y: 0,
      width: width,
      height: height
    };
    // adding to store
    setStore([...store, imgObject]);
    // adding to user Imagelibrary
    setImageLibrary((prev) => [...prev, imgObject]);
  };

  // Add new image based on the ones that have already been uploaded
  const addImgUploaded = (element) => {
    const newClickedImg = { ...element, id: nanoid(), x: 0, y: 0 };
    setStore([...store, newClickedImg]);
  };

  return (
    <S.SidebarMenuWrapper4 className={openItem4 !== true ? '' : 'open'}>
      <S.ContentWrapper4>
        <h3>Imagem</h3>
        <S.AddImg>
          <label htmlFor="images-upload">
            <S.UploadIcon />
            Faça o Upload de uma Imagem
          </label>
          <input
            type="file"
            name="files"
            id="images-upload"
            onChange={addImage}
          />
        </S.AddImg>
        <p>Para logos, utilize imagens PNG com fundo transparente.</p>

        <S.ListofAllImgsUploaded>
          <h4>Imagens já carregadas:</h4>
          <ul>
            {imageLibrary.length === 0 ? (
              <small>Não há nenhuma imagem carregada.</small>
            ) : (
              imageLibrary.map((img) => {
                return (
                  <li key={img.id} onClick={() => addImgUploaded(img)}>
                    <img src={img.url} />
                  </li>
                );
              })
            )}
          </ul>
        </S.ListofAllImgsUploaded>
      </S.ContentWrapper4>
    </S.SidebarMenuWrapper4>
  );
}
