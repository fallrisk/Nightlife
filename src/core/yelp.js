/**
 * Created by Justin on 2016-02-01.
 */

import oauthSig from 'oauth-signature';
import qs from 'querystring';
import fetch from 'node-fetch';
var request = require('request');

var n = require('nonce')();

// https://arian.io/how-to-use-yelps-api-with-node/

// https://api.yelp.com/v2/search/?term=bar&location=${state.query.q}&offset=0&limit=20&radius_filter=20000`)

// Returns the response that holds all the data or one of the errors.
export default async function fetchYelp(location) {

  //console.log(process.env.YELP_API_CONSUMER_KEY, process.env.YELP_API_TOKEN, process.env.YELP_API_CONSUMER_SECRET);

  const url = 'http://api.yelp.com/v2/search';

  const requiredParams = {
    oauth_consumer_key : process.env.YELP_API_CONSUMER_KEY,
    oauth_token : process.env.YELP_API_TOKEN,
    oauth_nonce : n(),
    oauth_timestamp : n().toString().substr(0,10),
    oauth_signature_method : 'HMAC-SHA1',
    oauth_version : '1.0'
  };

  var query = {
    term: 'bar',
    location: location
  };

  query = Object.assign(query, requiredParams);

  var signature = oauthSig.generate('GET', url, query,
    process.env.YELP_API_CONSUMER_SECRET, process.env.YELP_API_TOKEN_SECRET, {encodeSignature: false});

  //signature = signature.substr(0, signature.length - 1);

  //console.log('sig: ' + signature);

  query = Object.assign(query, {oauth_signature: signature});

  //console.log(query);

  //fetch('http://api.yelp.com/v2/search/?' + querystring.stringify(query))
  //.then(res => {
  //  console.log('Fetch Response!');
  //  console.log(res.text());
  //})
  //.catch(err => {
  //  console.log('request failed', err);
  //})

  var requestUrl = url + '?' + qs.stringify(query);

  var promise = new Promise((resolve, reject) => {
    request(requestUrl, function(error, response, body) {
      if (error) {
        return reject(error);
      }
      resolve(JSON.parse(body));
    });
  });

  return promise;

};
