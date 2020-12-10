import React from 'react';

import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import s from './styles.module.scss';

const Header = props => {
  const theme = useTheme();

  return (
    <Box xs={12}>
      <Box
        className={s.root}
        width={1}
        height={79}
        display={{ xs: 'none', md: 'flex' }}
        justifyContent="space-between"
        alignItems="center"
        px={5}
        bgcolor={theme.background.primary}
        flexGrow={1}
      >
        <Box display="flex" alignItems="center">
          {/*<Link href="/">*/}
            {/*<img className={s.logo} src="/Logo.svg" alt="logo" />*/}
          {/*</Link>*/}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
