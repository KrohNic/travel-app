import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Wrapper from '../components/Wrapper/Wrapper';
import Map from '../components/Map';
import appStore from '../store/app';
import { useSelector } from 'react-redux';
import Video from '../components/Video/Video';

const CountryPage = (props) => {
  const route = props.match.params.id || '';
  const countries = useSelector(appStore.selectors.getCountries);
  const data = countries.find((item) => item.route === route);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) return <div>Error</div>;

  return (
    <React.Fragment>
      <Header />
      <Wrapper>
        <Map coord={data['coordinates']} />
        <Video src={data['video']} />
      </Wrapper>
    </React.Fragment>
  );
};

CountryPage.propTypes = {
  match: PropTypes.object,
};

export default CountryPage;
