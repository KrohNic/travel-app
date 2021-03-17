import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Wrapper from '../components/Wrapper/Wrapper';
import CountryInfo from '../containers/CountryInfo/CountryInfo';

const CountryPage = ({ match }) => {
  const route = match.params.id || '';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Wrapper>
        <CountryInfo country={route} />
      </Wrapper>
    </React.Fragment>
  );
};

CountryPage.propTypes = {
  match: PropTypes.object,
};

export default CountryPage;
