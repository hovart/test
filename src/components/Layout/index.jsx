import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

// import Header from './Header';

import s from './styles.module.scss';

function Layout({ children, background }) {
  const theme = useTheme();

  return (
    <Box
      className={s.root}
      width={1}
      height="100vh"
      bgcolor={theme.background[background]}
    >
      <Box className={s.wrapper}>
        {/*<Header />*/}
        <Box className={s.content}>{children}</Box>
      </Box>
    </Box>
  );
}

Layout.defaultProps = {
  background: 'primary',
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.oneOf(['primary', 'secondary']),
};

export default Layout;
