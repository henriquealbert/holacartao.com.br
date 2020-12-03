import styled from '@emotion/styled';
import {
  BsOctagonFill,
  BsStarFill,
  BsFillTriangleFill,
  BsSquareFill,
  BsCircleFill
} from 'react-icons/bs';
import {
  FaEnvelope,
  FaWhatsapp,
  FaSkype,
  FaLinkedin,
  FaInstagramSquare,
  FaInstagram,
  FaFacebookSquare,
  FaFacebook,
  FaFacebookF,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa';
import {
  BiEnvelope,
  BiGlobe,
  BiMobile,
  BiPaperPlane,
  BiUserCircle,
  BiDirections,
  BiMap,
  BiAt,
  BiHome
} from 'react-icons/bi';
import { AiFillPhone } from 'react-icons/ai';

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

export const SquareIcon = styled(BsSquareFill)`
  margin: 2px;
  width: 33px;
  display: inline-block;
  height: 33px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    color: var(--grey);
  }
`;

export const CircleIcon = styled(BsCircleFill)`
  margin: 2px;
  width: 33px;
  display: inline-block;
  height: 33px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    color: var(--grey);
  }
`;

export const TriangleIcon = styled(BsFillTriangleFill)`
  margin: 2px;
  width: 33px;
  display: inline-block;
  height: 33px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    color: var(--grey);
  }
`;

export const HexagonFillIcon = styled(BsOctagonFill)`
  margin: 2px;
  width: 33px;
  display: inline-block;
  height: 33px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    color: var(--grey);
  }
`;

export const StarFillIcon = styled(BsStarFill)`
  margin: 2px;
  width: 33px;
  display: inline-block;
  height: 33px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    color: var(--grey);
  }
`;

export const GlobeIcon = styled(BiGlobe)`
  display: inline-block;
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

export const EnvelopeIcon = styled(BiEnvelope)`
  display: inline-block;
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

export const EnvelopeSolidIcon = styled(FaEnvelope)`
  display: inline-block;
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

export const PhoneIcon = styled(AiFillPhone)`
  display: inline-block;
  width: 30px;
  height: 30px;
  color: var(--darker-grey);
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin: 0.3rem;
  rotate: rotate(90deg);

  &:hover {
    color: var(--grey);
  }
`;

export const MobileIcon = styled(BiMobile)`
  display: inline-block;
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

export const PaperPlaneIcon = styled(BiPaperPlane)`
  display: inline-block;
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

export const UserCircleIcon = styled(BiUserCircle)`
  display: inline-block;
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

export const DirectionsIcon = styled(BiDirections)`
  display: inline-block;
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

export const MapIconIcon = styled(BiMap)`
  display: inline-block;
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

export const WhatsappIcon = styled(FaWhatsapp)`
  display: inline-block;
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

export const SkypeIcon = styled(FaSkype)`
  display: inline-block;
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

export const LinkedinSquareIcon = styled(FaLinkedin)`
  display: inline-block;
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

export const InstagramIcon = styled(FaInstagram)`
  display: inline-block;
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

export const InstagramAltIcon = styled(FaInstagramSquare)`
  display: inline-block;
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

export const FacebookCircleIcon = styled(FaFacebook)`
  display: inline-block;
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

export const FacebookIcon = styled(FaFacebookF)`
  display: inline-block;
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

export const FacebookSquareIcon = styled(FaFacebookSquare)`
  display: inline-block;
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

export const TwitterIcon = styled(FaTwitter)`
  display: inline-block;
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

export const YoutubeIcon = styled(FaYoutube)`
  display: inline-block;
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

export const HomeIcon = styled(BiHome)`
  display: inline-block;
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

export const AtIcon = styled(BiAt)`
  display: inline-block;
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
