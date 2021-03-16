import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Wrapper from '../components/Wrapper/Wrapper';

const CountryPage = (props) => {
  // const countryQuery = props.match.params.id || '';

  console.log(props);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Wrapper>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube-nocookie.com/embed/niO13sM0-Ew'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </Wrapper>
    </React.Fragment>
  );
};

CountryPage.propTypes = {
  match: PropTypes.object,
};

export default CountryPage;
