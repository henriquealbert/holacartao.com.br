import styled from '@emotion/styled';
import {
  Square,
  Circle,
  Envelope as EnvelopeSolid,
  Phone
} from '@styled-icons/boxicons-solid';
import { Triangle } from '@styled-icons/ionicons-solid/Triangle';
import { HexagonFill, StarFill } from '@styled-icons/bootstrap';
import {
  Globe,
  Envelope,
  Mobile,
  PaperPlane,
  UserCircle,
  Directions,
  Map as MapIcon,
  At,
  Home
} from '@styled-icons/boxicons-regular';
import {
  Whatsapp,
  Skype,
  LinkedinSquare,
  Instagram,
  InstagramAlt,
  FacebookCircle,
  Facebook,
  FacebookSquare,
  Twitter,
  Youtube
} from '@styled-icons/boxicons-logos/';

export const SidebarMenuWrapper3 = styled.div`
  display: flex;
  flex-direction: column;
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

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 1rem;

  h3 {
    text-align: left;
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
  }

  h4 {
    text-align: left;
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
    margin-top: 1rem;
  }
`;

export const SquareIcon = styled(Square)`
  width: 50px;
  height: 50px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    color: var(--grey);
  }
`;

export const CircleIcon = styled(Circle)`
  width: 50px;
  height: 50px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    color: var(--grey);
  }
`;

export const TriangleIcon = styled(Triangle)`
  width: 50px;
  height: 50px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    color: var(--grey);
  }
`;

export const HexagonFillIcon = styled(HexagonFill)`
  width: 50px;
  height: 50px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    color: var(--grey);
  }
`;

export const StarFillIcon = styled(StarFill)`
  width: 50px;
  height: 50px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    color: var(--grey);
  }
`;

export const GlobeIcon = styled(Globe)`
  width: 30px;
  height: 30px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin: 0.3rem;

  &:hover {
    color: var(--grey);
  }
`;

export const EnvelopeIcon = styled(Envelope)`
  width: 30px;
  height: 30px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin: 0.3rem;

  &:hover {
    color: var(--grey);
  }
`;

export const EnvelopeSolidIcon = styled(EnvelopeSolid)`
  width: 30px;
  height: 30px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin: 0.3rem;

  &:hover {
    color: var(--grey);
  }
`;

export const PhoneIcon = styled(Phone)`
  width: 30px;
  height: 30px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin: 0.3rem;

  &:hover {
    color: var(--grey);
  }
`;

export const MobileIcon = styled(Mobile)`
  width: 30px;
  height: 30px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin: 0.3rem;

  &:hover {
    color: var(--grey);
  }
`;

export const PaperPlaneIcon = styled(PaperPlane)`
  width: 30px;
  height: 30px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin: 0.3rem;

  &:hover {
    color: var(--grey);
  }
`;

export const UserCircleIcon = styled(UserCircle)`
  width: 30px;
  height: 30px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin: 0.3rem;

  &:hover {
    color: var(--grey);
  }
`;

export const DirectionsIcon = styled(Directions)`
  width: 30px;
  height: 30px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin: 0.3rem;

  &:hover {
    color: var(--grey);
  }
`;

export const MapIconIcon = styled(MapIcon)`
  width: 30px;
  height: 30px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin: 0.3rem;

  &:hover {
    color: var(--grey);
  }
`;

export const WhatsappIcon = styled(Whatsapp)`
  width: 30px;
  height: 30px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin: 0.3rem;

  &:hover {
    color: var(--grey);
  }
`;

export const SkypeIcon = styled(Skype)`
  width: 30px;
  height: 30px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin: 0.3rem;

  &:hover {
    color: var(--grey);
  }
`;

export const LinkedinSquareIcon = styled(LinkedinSquare)`
  width: 30px;
  height: 30px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin: 0.3rem;

  &:hover {
    color: var(--grey);
  }
`;

export const InstagramIcon = styled(Instagram)`
  width: 30px;
  height: 30px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin: 0.3rem;

  &:hover {
    color: var(--grey);
  }
`;

export const InstagramAltIcon = styled(InstagramAlt)`
  width: 30px;
  height: 30px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin: 0.3rem;

  &:hover {
    color: var(--grey);
  }
`;

export const FacebookCircleIcon = styled(FacebookCircle)`
  width: 30px;
  height: 30px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin: 0.3rem;

  &:hover {
    color: var(--grey);
  }
`;

export const FacebookIcon = styled(Facebook)`
  width: 30px;
  height: 30px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin: 0.3rem;

  &:hover {
    color: var(--grey);
  }
`;

export const FacebookSquareIcon = styled(FacebookSquare)`
  width: 30px;
  height: 30px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin: 0.3rem;

  &:hover {
    color: var(--grey);
  }
`;

export const TwitterIcon = styled(Twitter)`
  width: 30px;
  height: 30px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin: 0.3rem;

  &:hover {
    color: var(--grey);
  }
`;

export const YoutubeIcon = styled(Youtube)`
  width: 30px;
  height: 30px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin: 0.3rem;

  &:hover {
    color: var(--grey);
  }
`;

export const HomeIcon = styled(Home)`
  width: 30px;
  height: 30px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin: 0.3rem;

  &:hover {
    color: var(--grey);
  }
`;

export const AtIcon = styled(At)`
  width: 30px;
  height: 30px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin: 0.3rem;

  &:hover {
    color: var(--grey);
  }
`;
