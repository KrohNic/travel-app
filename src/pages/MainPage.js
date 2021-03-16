import React from 'react';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import Wrapper from '../components/Wrapper/Wrapper';
import CountriesList from '../containers/CountriesList/CountriesList';

const MainPage = () => (
  <React.Fragment>
    <Header>
      <Search />
    </Header>
    <Wrapper>
      <CountriesList />
    </Wrapper>
  </React.Fragment>
);

export default MainPage;
