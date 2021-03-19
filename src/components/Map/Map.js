import React from 'react';
import PropTypes from 'prop-types';

const Map = ({ coord }) => {
  const query = `?ll=${coord}&q=${coord}&z=6&ie=UTF8&iwloc=&output=embed`;

  return (
    <iframe
      width='600'
      height='500'
      id='gmap_canvas'
      src={`https://maps.google.com/maps${query}`}
      frameBorder='0'
      scrolling='no'
      marginHeight='0'
      marginWidth='0'
    ></iframe>
  );
};

Map.propTypes = {
  coord: PropTypes.string,
};

export default React.memo(Map);
