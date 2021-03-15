import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import LocaleSelectContainer from './containers/LocaleSelectContainer/';
import CountryPage from './pages/CountryPage';
import MainPage from './pages/MainPage/';

const App = () => {
  return (
    <BrowserRouter>
      <LocaleSelectContainer />

      <main className='main'>
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/countries/:id' component={CountryPage} />
          <Redirect to='/' />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
