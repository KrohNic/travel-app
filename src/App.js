import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import CountryPage from './pages/CountryPage';
import MainPage from './pages/MainPage/';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/:id' component={CountryPage} />
        <Redirect to='/' />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
