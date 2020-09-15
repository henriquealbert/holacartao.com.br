import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';

import * as S from './styled';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <S.MainContainer>{children}</S.MainContainer>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
