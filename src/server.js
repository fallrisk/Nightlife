/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import 'babel-polyfill';
import session from 'express-session';
import path from 'path';
import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Router from './routes';
import Html from './components/Html';
import assets from './assets';
import { port } from './config';
import bodyParser from 'body-parser';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import User from './api/users';
import Attendees from './core/attendees';

var debug = require('debug')('server');

const server = global.server = express();

//
// Register Node.js middleware
// http://expressjs.com/en/advanced/best-practice-security.html
// -----------------------------------------------------------------------------
server.use(express.static(path.join(__dirname, 'public')));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));
server.use(session({
  // TODO JKW: This 'secret' should be pulled from an environment variable.
  secret: '9087dfkj',
  name: 'NightlifeSID',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));
server.use((req, res, next) => {
  debug(req.session);
  next();
});
server.use(passport.initialize());
server.use(passport.session());

Attendees.setSampleData();

//
// Setup Passport session handlers.
// -----------------------------------------------------------------------------

// Called when the user is autheticated successfully.
passport.serializeUser(function(user, done) {
  debug('SerializeUser', user.username);
  done(null, user.username);
});

// Called when subsequent requests are made.
passport.deserializeUser(function(username, done) {
  debug('DeserializeUser', username);
  User.findUserByUsername(username, function(err, user) {
    debug('DeserializedUser', user);
    done(err, user);
  });
});

//
// Setup Passport strategy.
// -----------------------------------------------------------------------------
passport.use(new LocalStrategy(
  function (username, password, done) {
    debug('LocalStrategy username is ' + username);
    User.findUserByUsername(username, function (err, user) {
      debug('User: ' + user);
      if (err) {
        debug('Error' + err);
        return done(err);
      }
      if (!user) {
        debug('Sent this');
        return done(null, false, {message: 'Incorrect username.'});
      }
      if (!User.isCorrectPassword(user, password)) {
        return done(null, false, {message: 'Incorrect password.'});
      }
      debug('Done OK');
      return done(null, user);
    })
  }
));

//
// Register API middleware
// -----------------------------------------------------------------------------
server.use('/api/content', require('./api/content').default);
server.use('/api/yelp', require('./api/yelp').default);
server.use('/api/users', User.router);

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
server.get('*', async (req, res, next) => {
  try {
    let statusCode = 200;
    const data = { title: '', description: '', css: '', body: '', entry: assets.main.js };
    const css = [];
    const context = {
      insertCss: styles => css.push(styles._getCss()),
      onSetTitle: value => data.title = value,
      onSetMeta: (key, value) => data[key] = value,
      onPageNotFound: () => statusCode = 404,
    };

    await Router.dispatch({ path: req.path, query: req.query, context }, (state, component) => {
      data.body = ReactDOM.renderToString(component);
      data.css = css.join('');
    });

    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);
    res.status(statusCode).send(`<!doctype html>\n${html}`);
  } catch (err) {
    next(err);
  }
});

//
// Launch the server
// -----------------------------------------------------------------------------
server.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`The server is running at http://localhost:${port}/`);
});
