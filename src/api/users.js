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
import bcrypt from 'bcrypt';

var debug = require('debug')('api:users');

const router = new Router();

const _salt = bcrypt.genSaltSync(10);

// Array of foul words we don't part of a username.
var _foulWords = [];

// User DB.
var _users = [
  {username: 'dandy', password: bcrypt.hashSync('space', _salt)}
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
  debug('Register');
  debug(req.query, req.body, req.params);

  if (typeof req.body.username === 'undefined'
      || typeof  req.body.password  === 'undefined') {
    res.status(200).json({
      apiVersion: "1.0",
      error: {
        code: 1,
        message: "Username or password not provided.",
        errors: {
          domain: "user",
          reason: "InvalidUsernameOrPasswordException",
          message: "Username or password not provided.",
        }
      }
    });
    return;
  }

  let username = req.body.username;
  let password = req.body.password;

  if (username === '' || password === '') {
    res.status(200).json({
      apiVersion: "1.0",
      error: {
        code: 1,
        message: "Username or password cannot be empty.",
        errors: {
          domain: "user",
          reason: "InvalidUsernameOrPasswordException",
          message: "Username or password not provided.",
        }
      }
    });
    return;
  }

  let passwordHash = bcrypt.hashSync(password, _salt);

  _users.push({
    username: username,
    password: passwordHash,
  });

  res.status(200).json({
    apiVersion: "1.0",
    data: {
      registrationComplete: true,
    }
  })
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
    return res.status(401).json({success: false, error: 'You do not have permission to perform this action.'});;
  }

  let businessId = req.params.businessId;
  if (businessId) {
    if (Attendees.isUserAttending(businessId, req.user.username)) {
      debug('Removing user "' + req.user.username + '" from business "' + businessId + '."');
      Attendees.remove(req.user.username, businessId);
      return res.status(200).json({success: true, businessId: businessId});
    } else {
      debug('Adding user "' + req.user.username + '" to business "' + businessId + '."');
      Attendees.add(businessId, req.user.username);
      return res.status(200).json({success: true, businessId: businessId});
    }
  } else {
    return res.status(200).json({success: false, error: 'No business Id provided.'});
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
    if (bcrypt.compareSync(passwordToCheck, user.password, _salt)) {
      return true;
    }
    return false;
  }
};
