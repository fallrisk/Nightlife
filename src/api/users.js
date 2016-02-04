/**
 * Created by Justin on 2016-02-03.
 */

import fs from 'fs';
import { join } from 'path';
import { Router } from 'express';
import Promise from 'bluebird';
import lineReader from 'readline';
import passport from 'passport';
import Attendees from '../core/attendees';

var debug = require('debug')('api:users');

const router = new Router();

// Array of foul words we don't part of a username.
var _foulWords = [];

// User DB.
var _users = [
  {username: 'dandy', password: 'space'}
];

// Load the list of foul words from the file and store them in an array.
var foulWordsIn = lineReader.createInterface({
  input: fs.createReadStream(join(__dirname, 'public/SwearWords.txt'))
});

foulWordsIn.on('line', (line) => {
  _foulWords.push(line);
});

function isUsernameAvailable(username) {
  return true;
}

function isUsernameSwearWord(username) {
  return false;
}

function processRegisterCommand(req, res) {
  var p = Promise((resolve, reject) => {
    if (req.body.command === 'isValidUsername') {
      if (isUsernameAvailable(req.body.username) && !isUsernameSwearWord()) {
        res.status(200).json({isValidUsername: true});
      } else {
        res.status(200).json({isValidUsername: false});
      }
      resolve();
    }
    res.status(200).json({error: 'Invalid command.', errorCode: 1});
    resolve();
  });
  return p;
}

function createNewUser(req, res) {
  debug(req.body);
  _users.push({username: req.body.username, password: req.body.password});
  res.status(200).json({response: 'New user created.'}
  );
}

// -----------------------------------------------------------------------------

router.post('/check', async (req, res) => {
  debug('Checking if user is signed in.');
  if (req.hasOwnProperty('user')) {
    res.status(200).json({username: req.user.username});
    debug('User is signed in.');
  }
  res.status(200).json({error: 'Not signed in.', errorCode: 1});
  debug('User is not signed in.');
});

router.post('/register', async (req, res) => {
  // Here we register the user or send an error back because the form had an error.
  if (req.query.command) {
    return processRegisterCommand(req, res);
  } else {
    // Handle creating the new user.
    debug('Creating user.');
    createNewUser(req, res);
  }
});

router.get('/foulList', (req, res) => {
  res.status(200).json(_foulWords);
});

router.post('/signin', async (req, res, next) => {
  debug('/signin');
  passport.authenticate('local', (err, user, info) => {

    debug(err, user, info);

    if (err) {
      return next(err);
    }

    if (user) {
      req.logIn(user, {}, err => {
        if (err) {
          return next(err);
        }
        return res.status(200).json({isLoginSuccessful: true});
      });
    } else {
      return res.status(200).json({isLoginSuccessful: false, reason: info.message});
    }
  })(req, res, next);
});

router.get('/signout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.status(200).json({result: 'logged out'});
});

router.get('/attending/:businessId', (req, res) => {
  // If the user is not signed in then we send an "Unauthorized status."
  if (!req.user) {
    return res.status(401);
  }

  let businessId = req.params.businessId;
  if (businessId) {
    Attendees.add(businessId, user.username);
  } else {
    return res.status(200).json({error: 'No business Id provided.'});
  }
});

export default {
  router: router,
  findUserById: (id) => {

  },
  findUserByUsername: (username, cb) => {
    for (var i = 0; i < _users.length; i++) {
      if (username === _users[i].username) {
        debug('Found user ' + username);
        cb(false, _users[i]);
        return;
      }
    }
    debug('Did not find user ' + username);
    cb(false, false);
  },
  isCorrectPassword: (user, passwordToCheck) => {
    if (user.password === passwordToCheck) {
      return true;
    }
    return false;
  }
};
