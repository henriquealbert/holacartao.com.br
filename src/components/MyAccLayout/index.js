import PropTypes from 'prop-types';

import MyAccMenu from '../MyAccMenu';

import * as S from './styled';

export default function MyAccLayout({ children }) {
  return (
    <S.MyAccContainer>
      <h1>Minha Conta</h1>

      <S.MyAccWrapper>
        <MyAccMenu />
        {children}
      </S.MyAccWrapper>
    </S.MyAccContainer>
  );
}

MyAccLayout.propTypes = {
  children: PropTypes.node.isRequired
};
