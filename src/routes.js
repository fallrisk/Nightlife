/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Router from 'react-routing/src/Router';
import fetch from './core/fetch';
import App from './components/App';
import ContentPage from './components/ContentPage';
import RegisterPage from './components/RegisterPage';
import NotFoundPage from './components/NotFoundPage';
import ErrorPage from './components/ErrorPage';
import MainPage from './components/MainPage';
import SearchResults from './components/SearchResults';
import BusinessPage from './components/BusinessPage';
import SigninPage from './components/SigninPage';

const router = new Router(on => {

  on('*', async (state, next) => {
    let user = {
      username: null,
      isSignedin: false,
    };

    // Must set the user object in state before calling "component = await next()".
    await fetch('/api/users/check', {
        method: 'post',
        credentials: 'same-origin'
    }).then(response => {
      return response.json();
    }).then(json => {
      //console.log(json);
      if (json.hasOwnProperty('error')) {
        user.username = null;
        user.isSignedin = false;
      } else {
        user.username = json.username;
        user.isSignedin = true;
      }
    });

    state.user = user;
    let location = (typeof state.query.l !== 'undefined') ? state.query.l : '';

    const component = await next();
    return component && <App context={state.context} user={state.user} location={location}>{component}</App>;
  });

  on('/', async (state) => {
    if (typeof state.query.l !== 'undefined') {
      return <SearchResults l={state.query.l} user={state.user} />
    } else {
      return <MainPage />;
    }
  });

  on('/signin', async () => <SigninPage />);

  on('/register', async () => <RegisterPage />);

  on('/business/:businessId', async (state, next) => {
    return <BusinessPage businessId={state.params.businessId}/>
  });

  on('*', async (state) => {
    const response = await fetch(`/api/content?path=${state.path}`);
    const content = await response.json();
    return response.ok && content && <ContentPage {...content} />;
  });

  on('error', (state, error) => state.statusCode === 404 ?
    <App context={state.context} error={error}><NotFoundPage /></App> :
    <App context={state.context} error={error}><ErrorPage /></App>
  );
});

export default router;
