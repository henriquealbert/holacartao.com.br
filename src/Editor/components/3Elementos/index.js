import { nanoid } from 'nanoid';

import * as Icon from './iconsList';

import * as S from './styled';

export default function Item3({ openItem3, editorStore }) {
  // Context
  const {
    addRect,
    addCircle,
    addTriangle,
    addHexagon,
    addStar,
    setStore,
    store
  } = editorStore;

  const addIcon = (Icon) => {
    const newIcon = { ...Icon, id: String(nanoid() + Date.now()) };
    setStore([...store, newIcon]);
  };

  return (
    <S.SidebarMenuWrapper3 className={openItem3 !== true ? '' : 'open'}>
      <S.ContentWrapper>
        <h3>Formas</h3>
        <S.SquareIcon onClick={addRect} />
        <S.CircleIcon onClick={addCircle} />
        <S.TriangleIcon onClick={addTriangle} />
        <S.HexagonFillIcon onClick={addHexagon} />
        <S.StarFillIcon onClick={addStar} />
        <h4>Ícones</h4>
        <S.GlobeIcon onClick={() => addIcon(Icon.newGlobe)} />
        <S.DirectionsIcon onClick={() => addIcon(Icon.newDirections)} />
        <S.UserCircleIcon onClick={() => addIcon(Icon.newUserCircle)} />
        <S.MapIconIcon onClick={() => addIcon(Icon.newMap)} />
        <S.MobileIcon onClick={() => addIcon(Icon.newMobile)} />
        <S.PaperPlaneIcon onClick={() => addIcon(Icon.newPaperPlane)} />
        <S.EnvelopeIcon onClick={() => addIcon(Icon.newEnvelope)} />
        <S.InstagramIcon onClick={() => addIcon(Icon.newInstagram)} />
        <S.InstagramAltIcon onClick={() => addIcon(Icon.newInstagramAlt)} />
        <S.FacebookCircleIcon onClick={() => addIcon(Icon.newFacebookCircle)} />
        <S.FacebookIcon onClick={() => addIcon(Icon.newFacebook)} />
        <S.FacebookSquareIcon onClick={() => addIcon(Icon.newFacebookSquare)} />
        <S.LinkedinSquareIcon onClick={() => addIcon(Icon.newLinkedinSquare)} />
        <S.SkypeIcon onClick={() => addIcon(Icon.newSkype)} />
        <S.TwitterIcon onClick={() => addIcon(Icon.newTwitter)} />
        <S.WhatsappIcon onClick={() => addIcon(Icon.newWhatsapp)} />
        <S.YoutubeIcon onClick={() => addIcon(Icon.newYoutube)} />
        <S.PhoneIcon onClick={() => addIcon(Icon.newPhone)} />
        <S.HomeIcon onClick={() => addIcon(Icon.newHome)} />
        <S.AtIcon onClick={() => addIcon(Icon.newAt)} />
      </S.ContentWrapper>
    </S.SidebarMenuWrapper3>
  );
}
