import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import LocaleSelectContainer from './containers/LocaleSelectContainer/';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <LocaleSelectContainer />

      <main>
        <Switch>
          <Route path='/' exact>
            <MainPage />
          </Route>
          <Route path='/country'>
            <MainPage />
          </Route>
          <Redirect to='/' />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
