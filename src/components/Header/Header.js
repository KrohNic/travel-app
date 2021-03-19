import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import LocaleSelectContainer from '../../containers/LocaleSelectContainer/';
import { HEADER, HEADER_WRAPPER } from './classNames';
import './Header.scss';

const Header = ({ children }) => {
  return (
    <AppBar className={HEADER}>
      <Toolbar className={HEADER_WRAPPER}>
        <Typography className='title' variant='h6' noWrap>
          TRAVEL APP
        </Typography>
        {children}
        <LocaleSelectContainer />
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
