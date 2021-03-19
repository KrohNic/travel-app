import React from 'react';
import Header from '../components/Header/Header';
import Search from '../containers/Search/Search';
import Wrapper from '../components/Wrapper/Wrapper';
import CountriesListWithDataLoader from '../containers/CountriesList/CountriesListWithDataLoader';

const MainPage = () => (
  <React.Fragment>
    <Header>
      <Search />
    </Header>
    <Wrapper>
      <CountriesListWithDataLoader />
    </Wrapper>
  </React.Fragment>
);

export default MainPage;
