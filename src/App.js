import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import CountryPage from './pages/CountryPage';
import MainPage from './pages/MainPage';
import appStore from './store/app';
import { getLocale } from './store/app/app.selectors';

const App = () => {
  const dispatch = useDispatch();
  const { code: localeCode } = useSelector(getLocale);

  useEffect(() => {
    dispatch(appStore.actions.fetchCountries(localeCode));
  }, [localeCode]);

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
