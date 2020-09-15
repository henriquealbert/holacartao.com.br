import PropTypes from 'prop-types';
import Link from 'next/link';

import * as S from './styled';

const PrimaryButton = ({ href, children }) => {
  return (
    <S.PrimaryButton>
      <Link href={`${href}`}>
        <a>{children}</a>
      </Link>
    </S.PrimaryButton>
  );
};

export default PrimaryButton;

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
};
