import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';

import { Box } from '@chakra-ui/react';

export default function Layout({ children, home }) {
  return (
    <Box minH="100vh">
      <Header home={home} />
      <Box as="main" h="100%">
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
