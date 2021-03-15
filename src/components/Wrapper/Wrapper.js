import React from 'react';
import PropTypes from 'prop-types';
import './Wrapper.scss';

const Wrapper = ({ children }) => <main className='main'>{children}</main>;

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Wrapper;
