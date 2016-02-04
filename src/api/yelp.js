
import { Router } from 'express';
import Promise from 'bluebird';
import fetchYelp from '../core/yelp';
import Attendees from '../core/attendees';

const router = new Router();

router.get('/', async (req, res, next) => {
  var results = await fetchYelp(req.query.l);
  // Now append the attendees for the results.
  var results = await Attendees.appendAttendees(results);
  res.status(200).json(results);
});

export default router;
