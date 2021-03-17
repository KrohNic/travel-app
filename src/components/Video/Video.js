import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ src }) => {
  return (
    <iframe
      width='560'
      height='315'
      src={src}
      frameBorder='0'
      allow='accelerometer; clipboard-write; encrypted-media; gyroscope;'
      allowFullScreen
    ></iframe>
  );
};

Video.propTypes = {
  src: PropTypes.string,
};

export default React.memo(Video);
