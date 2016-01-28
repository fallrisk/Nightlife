/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SearchResults.scss';
import Location from '../../core/Location';

import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';

const title = 'Nightlife';

const _sampleData = {
  "region": {
    "span": {
      "latitude_delta": 0.08118824999999674,
      "longitude_delta": 0.08646285999998327
    },
    "center": {
      "latitude": 38.77320575,
      "longitude": -121.2479777
    }
  },
  "total": 174,
  "businesses": [
    {
      "is_claimed": false,
      "rating": 4.5,
      "mobile_url": "http://m.yelp.com/biz/country-club-saloon-loomis-2?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "rating_img_url": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
      "review_count": 28,
      "name": "Country Club Saloon",
      "rating_img_url_small": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
      "url": "http://www.yelp.com/biz/country-club-saloon-loomis-2?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "categories": [
        [
          "Bars",
          "bars"
        ]
      ],
      "phone": "9166524007",
      "snippet_text": "Country Club is my go too bar after work. The bar is big and the beers are plenty. If you can't find a beer you like here, you don't like beer. The staff...",
      "image_url": "http://s3-media4.fl.yelpcdn.com/bphoto/RZ1LPYC8yoEeuDtzzfEG2w/ms.jpg",
      "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/IjBIwPyFxCnLCACqwTiWfQ/ms.jpg",
      "display_phone": "+1-916-652-4007",
      "rating_img_url_large": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
      "id": "country-club-saloon-loomis-2",
      "is_closed": false,
      "location": {
        "city": "Loomis",
        "display_address": [
          "4007 Taylor Rd",
          "Loomis, CA 95650"
        ],
        "geo_accuracy": 8.0,
        "postal_code": "95650",
        "country_code": "US",
        "address": [
          "4007 Taylor Rd"
        ],
        "coordinate": {
          "latitude": 38.8117393,
          "longitude": -121.2067048
        },
        "state_code": "CA"
      }
    },
    {
      "is_claimed": true,
      "rating": 4.5,
      "mobile_url": "http://m.yelp.com/biz/final-gravity-roseville?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "rating_img_url": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
      "review_count": 111,
      "name": "Final Gravity",
      "rating_img_url_small": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
      "url": "http://www.yelp.com/biz/final-gravity-roseville?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "categories": [
        [
          "Pubs",
          "pubs"
        ]
      ],
      "phone": "9167821166",
      "snippet_text": "Final Gravity continues to impress me every time I visit. From the beer to the atmosphere to the staff, everything is on point. The tap selection generally...",
      "image_url": "http://s3-media1.fl.yelpcdn.com/bphoto/mSocz7U6kvX6-XPaCWvY3A/ms.jpg",
      "snippet_image_url": "http://s3-media3.fl.yelpcdn.com/photo/Tf10wcUcAP6_fy7u3VhJFg/ms.jpg",
      "display_phone": "+1-916-782-1166",
      "rating_img_url_large": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
      "id": "final-gravity-roseville",
      "is_closed": false,
      "location": {
        "city": "Roseville",
        "display_address": [
          "9205 Sierra College Blvd",
          "Ste 100",
          "Roseville, CA 95661"
        ],
        "geo_accuracy": 8.0,
        "postal_code": "95661",
        "country_code": "US",
        "address": [
          "9205 Sierra College Blvd",
          "Ste 100"
        ],
        "coordinate": {
          "latitude": 38.736301,
          "longitude": -121.224884
        },
        "state_code": "CA"
      }
    },
    {
      "is_claimed": true,
      "rating": 4.5,
      "mobile_url": "http://m.yelp.com/biz/perfecto-lounge-roseville?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "rating_img_url": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
      "review_count": 83,
      "name": "Perfecto Lounge",
      "rating_img_url_small": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
      "url": "http://www.yelp.com/biz/perfecto-lounge-roseville?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "categories": [
        [
          "Lounges",
          "lounges"
        ],
        [
          "Tobacco Shops",
          "tobaccoshops"
        ]
      ],
      "phone": "9167832828",
      "snippet_text": "This place is seriously the best! I have come here many times. I have come with my friends who enjoy a good cigar and I have come with those who are smoking...",
      "image_url": "http://s3-media1.fl.yelpcdn.com/bphoto/FfmOsHtfWunMCMe8tfrHjA/ms.jpg",
      "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/Q07VVWxP5fPbYKdK1ydWlg/ms.jpg",
      "display_phone": "+1-916-783-2828",
      "rating_img_url_large": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
      "id": "perfecto-lounge-roseville",
      "is_closed": false,
      "location": {
        "city": "Roseville",
        "display_address": [
          "973 Pleasant Grove Blvd",
          "110",
          "Roseville, CA 95678"
        ],
        "geo_accuracy": 9.5,
        "postal_code": "95678",
        "country_code": "US",
        "address": [
          "973 Pleasant Grove Blvd",
          "110"
        ],
        "coordinate": {
          "latitude": 38.779759,
          "longitude": -121.287279
        },
        "state_code": "CA"
      }
    },
    {
      "is_claimed": false,
      "rating": 3.5,
      "mobile_url": "http://m.yelp.com/biz/lorees-little-shack-rocklin?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "rating_img_url": "http://s3-media1.fl.yelpcdn.com/assets/2/www/img/5ef3eb3cb162/ico/stars/v1/stars_3_half.png",
      "review_count": 52,
      "name": "Loree's Little Shack",
      "rating_img_url_small": "http://s3-media1.fl.yelpcdn.com/assets/2/www/img/2e909d5d3536/ico/stars/v1/stars_small_3_half.png",
      "url": "http://www.yelp.com/biz/lorees-little-shack-rocklin?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "categories": [
        [
          "Diners",
          "diners"
        ],
        [
          "Dive Bars",
          "divebars"
        ]
      ],
      "phone": "9166248686",
      "snippet_text": "Great night out with a friend.  We were waited on by Kevin and a cocktail waitress who's name I fail to remember.  The food was great, like something your...",
      "image_url": "http://s3-media1.fl.yelpcdn.com/bphoto/fRq5NvARU8PwDjIGApdWFg/ms.jpg",
      "snippet_image_url": "http://s3-media3.fl.yelpcdn.com/photo/hEy3AXi-cH8vyD7ksqU_eQ/ms.jpg",
      "display_phone": "+1-916-624-8686",
      "rating_img_url_large": "http://s3-media3.fl.yelpcdn.com/assets/2/www/img/bd9b7a815d1b/ico/stars/v1/stars_large_3_half.png",
      "id": "lorees-little-shack-rocklin",
      "is_closed": false,
      "location": {
        "city": "Rocklin",
        "display_address": [
          "4835 Pacific St",
          "Rocklin, CA 95677"
        ],
        "geo_accuracy": 8.0,
        "postal_code": "95677",
        "country_code": "US",
        "address": [
          "4835 Pacific St"
        ],
        "coordinate": {
          "latitude": 38.7948608,
          "longitude": -121.2324295
        },
        "state_code": "CA"
      }
    },
    {
      "is_claimed": true,
      "rating": 4.5,
      "mobile_url": "http://m.yelp.com/biz/the-monks-cellar-roseville-2?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "rating_img_url": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
      "review_count": 291,
      "name": "The Monk's Cellar",
      "rating_img_url_small": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
      "url": "http://www.yelp.com/biz/the-monks-cellar-roseville-2?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "categories": [
        [
          "Pubs",
          "pubs"
        ],
        [
          "Breweries",
          "breweries"
        ],
        [
          "American (Traditional)",
          "tradamerican"
        ]
      ],
      "phone": "9167866665",
      "snippet_text": "Do I really need to say more than, \"duck fat fries\"? Fracking awesome. Beers aren't too shabby either. Give this place a try.\n\nOnly improvement might be the...",
      "image_url": "http://s3-media1.fl.yelpcdn.com/bphoto/Y_YJBUrzsaSAnE500nR-lQ/ms.jpg",
      "snippet_image_url": "http://s3-media3.fl.yelpcdn.com/photo/sc3mYBnt1gYV7K-QYmZWPQ/ms.jpg",
      "display_phone": "+1-916-786-6665",
      "rating_img_url_large": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
      "id": "the-monks-cellar-roseville-2",
      "is_closed": false,
      "location": {
        "city": "Roseville",
        "display_address": [
          "240 Vernon St",
          "Roseville, CA 95678"
        ],
        "geo_accuracy": 9.5,
        "postal_code": "95678",
        "country_code": "US",
        "address": [
          "240 Vernon St"
        ],
        "coordinate": {
          "latitude": 38.7496666556839,
          "longitude": -121.283257303123
        },
        "state_code": "CA"
      }
    }
  ]
};

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    marginBottom: 24,
  },
};

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class SearchResults extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Search Results</h1>
          <GridList cols={4} cellHeight={200} padding={4} style={styles.gridList}>
            {_sampleData.businesses.map(business => (
              <GridTile key={business.name} title={business.name} titlePosition="top"
                        cols={getRandomIntInclusive(1, 2)} rows={this.cols}>
                <img src={business.image_url}/>
              </GridTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }

}

export default withStyles(SearchResults, s);
