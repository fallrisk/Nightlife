
import { Router } from 'express';
import Promise from 'bluebird';
import fetchYelp from '../core/yelp';

const router = new Router();

router.get('/', async (req, res, next) => {
  var results = await fetchYelp('Rocklin, CA');
  res.status(200).json(results);
});

export default router;
