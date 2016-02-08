
import { Router } from 'express';
import Promise from 'bluebird';
import fetchYelp from '../core/yelp';
import Attendees from '../core/attendees';

const router = new Router();

function appendUserAttending(yelpData, username) {
  console.log('Appending user attending: ' + username);
  let promise = new Promise((resolve, reject) => {
    let i = 0;
    for (var biz of yelpData.businesses) {
      yelpData.businesses[i].isUserAttending = Attendees.isUserAttending(biz.id, username);
      i += 1;
    }
    resolve(yelpData);
  });
  return promise;
}

router.get('/', async (req, res, next) => {
  var results = await fetchYelp(req.query.l);
  // Now append the attendees for the results.
  var results = await Attendees.appendAttendees(results);
  let username = null;
  if (typeof req.user !== 'undefined') {
    username = req.user.username;
  }
  var results = await appendUserAttending(results, username);
  res.status(200).json(results);
});

export default router;
