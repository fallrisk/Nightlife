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
import withViewport from '../withViewport';
import fetch from '../../core/fetch';

import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import IconButton from 'material-ui/lib/icon-button';
import FontIcon from 'material-ui/lib/font-icon';
import Paper from 'material-ui/lib/paper';
import FlatButton from 'material-ui/lib/flat-button';
import RefreshIndicator from 'material-ui/lib/refresh-indicator';

const title = 'Nightlife';

const _sampleData = {
  "region": {
    "span": {
      "latitude_delta": 0.09701640070946382,
      "longitude_delta": 0.09639826865679879
    },
    "center": {
      "latitude": 38.78040036395885,
      "longitude": -121.251180394844
    }
  },
  "total": 178,
  "businesses": [
    {
      "is_claimed": true,
      "rating": 5.0,
      "mobile_url": "http://m.yelp.com/biz/craft-beer-vault-rocklin?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "rating_img_url": "http://s3-media1.fl.yelpcdn.com/assets/2/www/img/f1def11e4e79/ico/stars/v1/stars_5.png",
      "review_count": 13,
      "name": "Craft Beer Vault",
      "rating_img_url_small": "http://s3-media1.fl.yelpcdn.com/assets/2/www/img/c7623205d5cd/ico/stars/v1/stars_small_5.png",
      "url": "http://www.yelp.com/biz/craft-beer-vault-rocklin?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "categories": [
        [
          "Beer Gardens",
          "beergardens"
        ],
        [
          "Beer Bar",
          "beerbar"
        ]
      ],
      "phone": "9168996112",
      "snippet_text": "Fine craft beer establishment in a quiet area of the shopping center.\nTasteful indoor decor, ample outdoor seating where you can enjoy your beer selection...",
      "image_url": "http://s3-media4.fl.yelpcdn.com/bphoto/DXk31cXs-oDQh5lJL0Lb-g/ms.jpg",
      "snippet_image_url": "http://s3-media2.fl.yelpcdn.com/photo/y5y7WYFc-eHyzMcSmTbDDw/ms.jpg",
      "display_phone": "+1-916-899-6112",
      "rating_img_url_large": "http://s3-media3.fl.yelpcdn.com/assets/2/www/img/22affc4e6c38/ico/stars/v1/stars_large_5.png",
      "id": "craft-beer-vault-rocklin",
      "is_closed": false,
      "location": {
        "city": "Rocklin",
        "display_address": [
          "6508 Lontree Blvd",
          "Ste 108",
          "Rocklin, CA 95765"
        ],
        "geo_accuracy": 9.5,
        "postal_code": "95765",
        "country_code": "US",
        "address": [
          "6508 Lontree Blvd",
          "Ste 108"
        ],
        "coordinate": {
          "latitude": 38.8035351618068,
          "longitude": -121.294997789688
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
      "rating": 4.0,
      "mobile_url": "http://m.yelp.com/biz/boneshaker-public-house-rocklin-2?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "review_count": 289,
      "name": "Boneshaker Public House",
      "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "url": "http://www.yelp.com/biz/boneshaker-public-house-rocklin-2?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "categories": [
        [
          "Gastropubs",
          "gastropubs"
        ],
        [
          "Delis",
          "delis"
        ],
        [
          "Sandwiches",
          "sandwiches"
        ]
      ],
      "phone": "9162592337",
      "snippet_text": "Really great place. The blind pig mac and cheese is the best I have ever had. It was amazing!!! It had bacon, puuled pork and sausage, but not enought to...",
      "image_url": "http://s3-media1.fl.yelpcdn.com/bphoto/lS5SVXK91z6huThtY92xvg/ms.jpg",
      "snippet_image_url": "http://s3-media1.fl.yelpcdn.com/photo/chuqSqIze68S4KfIBFShzw/ms.jpg",
      "display_phone": "+1-916-259-2337",
      "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
      "id": "boneshaker-public-house-rocklin-2",
      "is_closed": false,
      "location": {
        "city": "Rocklin",
        "display_address": [
          "2168 Sunset Blvd",
          "Ste 104",
          "Rocklin, CA 95765"
        ],
        "geo_accuracy": 9.5,
        "postal_code": "95765",
        "country_code": "US",
        "address": [
          "2168 Sunset Blvd",
          "Ste 104"
        ],
        "coordinate": {
          "latitude": 38.8044442928764,
          "longitude": -121.274386924025
        },
        "state_code": "CA"
      }
    },
    {
      "is_claimed": false,
      "rating": 3.5,
      "mobile_url": "http://m.yelp.com/biz/fosters-pub-and-grill-rocklin?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "rating_img_url": "http://s3-media1.fl.yelpcdn.com/assets/2/www/img/5ef3eb3cb162/ico/stars/v1/stars_3_half.png",
      "review_count": 35,
      "name": "Foster's Pub & Grill",
      "rating_img_url_small": "http://s3-media1.fl.yelpcdn.com/assets/2/www/img/2e909d5d3536/ico/stars/v1/stars_small_3_half.png",
      "url": "http://www.yelp.com/biz/fosters-pub-and-grill-rocklin?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "categories": [
        [
          "Sports Bars",
          "sportsbars"
        ],
        [
          "Pubs",
          "pubs"
        ],
        [
          "American (Traditional)",
          "tradamerican"
        ]
      ],
      "phone": "9168242288",
      "snippet_text": "I had a vey good time there the burger was very good and the fries were plentiful.\nlooking forward to going back.",
      "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/S8McHkDqpFe5hG0abF2STQ/ms.jpg",
      "snippet_image_url": "http://s3-media1.fl.yelpcdn.com/photo/obLCgmsyvAc1EVjLLYLy7w/ms.jpg",
      "display_phone": "+1-916-824-2288",
      "rating_img_url_large": "http://s3-media3.fl.yelpcdn.com/assets/2/www/img/bd9b7a815d1b/ico/stars/v1/stars_large_3_half.png",
      "id": "fosters-pub-and-grill-rocklin",
      "is_closed": false,
      "location": {
        "city": "Rocklin",
        "display_address": [
          "4451 Pacific St",
          "Rocklin, CA 95677"
        ],
        "geo_accuracy": 8.0,
        "postal_code": "95677",
        "country_code": "US",
        "address": [
          "4451 Pacific St"
        ],
        "coordinate": {
          "latitude": 38.800411,
          "longitude": -121.224297
        },
        "state_code": "CA"
      }
    },
    {
      "is_claimed": true,
      "rating": 4.5,
      "mobile_url": "http://m.yelp.com/biz/the-chefs-table-rocklin?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "rating_img_url": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
      "review_count": 450,
      "name": "The Chef's Table",
      "rating_img_url_small": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
      "url": "http://www.yelp.com/biz/the-chefs-table-rocklin?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "categories": [
        [
          "American (Traditional)",
          "tradamerican"
        ]
      ],
      "menu_date_updated": 1454045521,
      "phone": "9167715656",
      "snippet_text": "This place ROCKS. The staff is awesome - the core of which has been together a very long time and it shows in very good ways. The vibe is heavily influenced...",
      "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/u6kwLI84j624JtlfDWf6MA/ms.jpg",
      "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/8rLlK1Go5rtaVZOFrbdM4A/ms.jpg",
      "display_phone": "+1-916-771-5656",
      "rating_img_url_large": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
      "menu_provider": "locu",
      "id": "the-chefs-table-rocklin",
      "is_closed": false,
      "location": {
        "city": "Rocklin",
        "display_address": [
          "6843 Lonetree Blvd",
          "Ste 103",
          "Rocklin, CA 95765"
        ],
        "geo_accuracy": 9.5,
        "postal_code": "95765",
        "country_code": "US",
        "address": [
          "6843 Lonetree Blvd",
          "Ste 103"
        ],
        "coordinate": {
          "latitude": 38.7964080881302,
          "longitude": -121.290666866223
        },
        "state_code": "CA"
      }
    },
    {
      "is_claimed": true,
      "rating": 4.0,
      "mobile_url": "http://m.yelp.com/biz/boneshaker-community-brewery-rocklin?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "review_count": 122,
      "name": "Boneshaker Community Brewery",
      "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "url": "http://www.yelp.com/biz/boneshaker-community-brewery-rocklin?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "categories": [
        [
          "Breweries",
          "breweries"
        ]
      ],
      "phone": "9166726292",
      "snippet_text": "Amazing and interesting beer list (also delicious). Didn't get food, but it all looks awesome. The bearded fellow working the bar was very helpful, quick,...",
      "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/XZxT3dIuiuvTnz24GLhtPA/ms.jpg",
      "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/uTnyrO8LMgcTuOBFqk6hrw/ms.jpg",
      "display_phone": "+1-916-672-6292",
      "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
      "id": "boneshaker-community-brewery-rocklin",
      "is_closed": false,
      "location": {
        "city": "Rocklin",
        "display_address": [
          "4810 Granite Dr",
          "Ste A-1",
          "Rocklin, CA 95677"
        ],
        "geo_accuracy": 9.5,
        "postal_code": "95677",
        "country_code": "US",
        "address": [
          "4810 Granite Dr",
          "Ste A-1"
        ],
        "coordinate": {
          "latitude": 38.7906183067694,
          "longitude": -121.224294923665
        },
        "state_code": "CA"
      }
    },
    {
      "is_claimed": true,
      "rating": 3.0,
      "mobile_url": "http://m.yelp.com/biz/halftime-bar-and-grill-rocklin?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "rating_img_url": "http://s3-media3.fl.yelpcdn.com/assets/2/www/img/34bc8086841c/ico/stars/v1/stars_3.png",
      "review_count": 60,
      "name": "Halftime Bar & Grill",
      "rating_img_url_small": "http://s3-media3.fl.yelpcdn.com/assets/2/www/img/902abeed0983/ico/stars/v1/stars_small_3.png",
      "url": "http://www.yelp.com/biz/halftime-bar-and-grill-rocklin?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "categories": [
        [
          "Sports Bars",
          "sportsbars"
        ],
        [
          "American (Traditional)",
          "tradamerican"
        ]
      ],
      "phone": "9166263600",
      "snippet_text": "UPDATE: The owner of Halftime contacted me through Yelp to make our negative experience up to us which we have accepted. I'm upgrading my review from 1 star...",
      "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/m_ud_EzWwfDFnXnw05Du2A/ms.jpg",
      "snippet_image_url": "http://s3-media2.fl.yelpcdn.com/photo/IfqZtZs3wP6fkjSrPB8Jkw/ms.jpg",
      "display_phone": "+1-916-626-3600",
      "rating_img_url_large": "http://s3-media1.fl.yelpcdn.com/assets/2/www/img/e8b5b79d37ed/ico/stars/v1/stars_large_3.png",
      "id": "halftime-bar-and-grill-rocklin",
      "is_closed": false,
      "location": {
        "city": "Rocklin",
        "display_address": [
          "5681 Lonetree Blvd",
          "Rocklin, CA 95765"
        ],
        "geo_accuracy": 8.0,
        "postal_code": "95765",
        "country_code": "US",
        "address": [
          "5681 Lonetree Blvd"
        ],
        "coordinate": {
          "latitude": 38.8127518,
          "longitude": -121.2887268
        },
        "state_code": "CA"
      }
    },
    {
      "is_claimed": true,
      "rating": 4.0,
      "mobile_url": "http://m.yelp.com/biz/dragas-brewing-rocklin?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "review_count": 66,
      "name": "Dragas Brewing",
      "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "url": "http://www.yelp.com/biz/dragas-brewing-rocklin?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "categories": [
        [
          "Breweries",
          "breweries"
        ]
      ],
      "deals": [
        {
          "is_popular": true,
          "what_you_get": "You get a voucher redeemable for $30 at Dragas Brewing.\nPrint out your voucher, or redeem on your phone with the <a href=\"http://www.yelp.com/mobile?source=deal_marketing\">Yelp app</a>.",
          "time_start": 1444760667,
          "title": "$25 for $30",
          "url": "http://www.yelp.com/deals/dragas-brewing-rocklin?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
          "additional_restrictions": "Promotion lasts for 1 year from date of purchase. After that period, your voucher is redeemable for the amount you paid, less any value you may have received. Not valid with other vouchers, certificates, or offers. Only 1 voucher(s) can be purchased and redeemed per person. Up to 3 can be purchased as gifts for others. Subject to the <a target=\"_blank\" href=\"http://www.yelp.com/tos/general_b2c_us_20120911\">General Terms</a>.",
          "options": [
            {
              "original_price": 3000,
              "title": "$25 for $30",
              "price": 2500,
              "purchase_url": "https://www.yelp.com/checkout/deal/vn4R-226ohQK8-yleO1xuQ?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
              "formatted_original_price": "$30",
              "formatted_price": "$25",
              "is_quantity_limited": false
            }
          ],
          "image_url": "http://s3-media2.fl.yelpcdn.com/dphoto/ev-_9j73H2e3hPWkHkKATQ/m.jpg",
          "id": "zvD7rCqarQHlMhn1OCegAg",
          "currency_code": "USD"
        }
      ],
      "phone": "9169057710",
      "snippet_text": "First brewery of 2016! And they have a Yelp check-in deal.\nPlenty of lot parking, and the facility is big and clean! They had a beer for everyone's tastes...",
      "image_url": "http://s3-media3.fl.yelpcdn.com/bphoto/3CrwsSP1JiykKrgdN9JGBw/ms.jpg",
      "snippet_image_url": "http://s3-media3.fl.yelpcdn.com/photo/ZBY_QHk8Lp_FRoyjN43sRw/ms.jpg",
      "display_phone": "+1-916-905-7710",
      "gift_certificates": [
        {
          "url": "http://www.yelp.com/gift-certificates/dragas-brewing-rocklin?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
          "unused_balances": "CREDIT",
          "options": [
            {
              "price": 1000,
              "formatted_price": "$10"
            },
            {
              "price": 2500,
              "formatted_price": "$25"
            },
            {
              "price": 5000,
              "formatted_price": "$50"
            },
            {
              "price": 7500,
              "formatted_price": "$75"
            },
            {
              "price": 10000,
              "formatted_price": "$100"
            },
            {
              "price": 15000,
              "formatted_price": "$150"
            }
          ],
          "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/4201C1GONqrccWTudUJPZg/m.jpg",
          "id": "etaMUQbMF79WdnXcjkapBQ",
          "currency_code": "USD"
        }
      ],
      "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
      "id": "dragas-brewing-rocklin",
      "is_closed": false,
      "location": {
        "city": "Rocklin",
        "display_address": [
          "5860 Pacific St",
          "Rocklin, CA 95677"
        ],
        "geo_accuracy": 9.5,
        "postal_code": "95677",
        "country_code": "US",
        "address": [
          "5860 Pacific St"
        ],
        "coordinate": {
          "latitude": 38.7821431884096,
          "longitude": -121.242273405576
        },
        "state_code": "CA"
      }
    },
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
      "rating": 4.0,
      "mobile_url": "http://m.yelp.com/biz/granite-rock-grill-rocklin?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "review_count": 230,
      "name": "Granite Rock Grill",
      "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "url": "http://www.yelp.com/biz/granite-rock-grill-rocklin?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "categories": [
        [
          "Breakfast & Brunch",
          "breakfast_brunch"
        ],
        [
          "American (Traditional)",
          "tradamerican"
        ]
      ],
      "menu_date_updated": 1454018461,
      "phone": "9166259252",
      "snippet_text": "So good! I'm rarely in this area but we stopped here for breakfast. I love the small country diner atmosphere but the place is pretty large and, on a Sunday...",
      "image_url": "http://s3-media4.fl.yelpcdn.com/bphoto/uA78Bq-tK6glE52kYawGJA/ms.jpg",
      "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/oXaF-QdokYuBukmuRYODfw/ms.jpg",
      "display_phone": "+1-916-625-9252",
      "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
      "menu_provider": "single_platform",
      "id": "granite-rock-grill-rocklin",
      "is_closed": false,
      "location": {
        "city": "Rocklin",
        "display_address": [
          "5140 Pacific St",
          "Rocklin, CA 95677"
        ],
        "geo_accuracy": 8.0,
        "postal_code": "95677",
        "country_code": "US",
        "address": [
          "5140 Pacific St"
        ],
        "coordinate": {
          "latitude": 38.791397,
          "longitude": -121.236023
        },
        "state_code": "CA"
      }
    },
    {
      "is_claimed": false,
      "rating": 4.0,
      "mobile_url": "http://m.yelp.com/biz/out-of-bounds-brewing-company-rocklin?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "review_count": 106,
      "name": "Out of Bounds Brewing Company",
      "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "url": "http://www.yelp.com/biz/out-of-bounds-brewing-company-rocklin?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "categories": [
        [
          "Breweries",
          "breweries"
        ]
      ],
      "menu_date_updated": 1453979644,
      "phone": "9162591511",
      "snippet_text": "Oh man! let me tell you about some good beer! Out of bounds has 12 beers to sample and I really liked 10 of them! if you are looking for a location that has...",
      "image_url": "http://s3-media3.fl.yelpcdn.com/bphoto/Dd_KBbm1VvbSrePegCBG1Q/ms.jpg",
      "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/Q07VVWxP5fPbYKdK1ydWlg/ms.jpg",
      "display_phone": "+1-916-259-1511",
      "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
      "menu_provider": "single_platform",
      "id": "out-of-bounds-brewing-company-rocklin",
      "is_closed": false,
      "location": {
        "city": "Rocklin",
        "display_address": [
          "4480 Yankee Hill Rd",
          "Ste 100",
          "Rocklin, CA 95677"
        ],
        "geo_accuracy": 9.5,
        "postal_code": "95677",
        "country_code": "US",
        "address": [
          "4480 Yankee Hill Rd",
          "Ste 100"
        ],
        "coordinate": {
          "latitude": 38.7990070723348,
          "longitude": -121.2294819206
        },
        "state_code": "CA"
      }
    },
    {
      "is_claimed": true,
      "rating": 3.5,
      "mobile_url": "http://m.yelp.com/biz/petes-restaurant-and-brewhouse-rocklin?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "rating_img_url": "http://s3-media1.fl.yelpcdn.com/assets/2/www/img/5ef3eb3cb162/ico/stars/v1/stars_3_half.png",
      "review_count": 78,
      "name": "Pete's Restaurant & Brewhouse",
      "rating_img_url_small": "http://s3-media1.fl.yelpcdn.com/assets/2/www/img/2e909d5d3536/ico/stars/v1/stars_small_3_half.png",
      "url": "http://www.yelp.com/biz/petes-restaurant-and-brewhouse-rocklin?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "categories": [
        [
          "Italian",
          "italian"
        ],
        [
          "Pizza",
          "pizza"
        ],
        [
          "Burgers",
          "burgers"
        ]
      ],
      "menu_date_updated": 1442172327,
      "phone": "9168996881",
      "snippet_text": "Update: Dining IN was a totally different experience! Two adults two kids, Friday evening. We were seated immediately and the place filled up pretty...",
      "image_url": "http://s3-media4.fl.yelpcdn.com/bphoto/ZIC2bhE689L11-1dbAbQTg/ms.jpg",
      "snippet_image_url": "http://s3-media3.fl.yelpcdn.com/photo/MkBB6zU3VBW6CmWybMYe7A/ms.jpg",
      "display_phone": "+1-916-899-6881",
      "rating_img_url_large": "http://s3-media3.fl.yelpcdn.com/assets/2/www/img/bd9b7a815d1b/ico/stars/v1/stars_large_3_half.png",
      "menu_provider": "single_platform",
      "id": "petes-restaurant-and-brewhouse-rocklin",
      "is_closed": false,
      "location": {
        "city": "Rocklin",
        "display_address": [
          "2210 Sunset Blvd",
          "Ste 180",
          "Rocklin, CA 95765"
        ],
        "geo_accuracy": 9.5,
        "postal_code": "95765",
        "country_code": "US",
        "address": [
          "2210 Sunset Blvd",
          "Ste 180"
        ],
        "coordinate": {
          "latitude": 38.8041047,
          "longitude": -121.2729995
        },
        "state_code": "CA"
      }
    },
    {
      "is_claimed": true,
      "rating": 3.5,
      "mobile_url": "http://m.yelp.com/biz/studio-movie-grill-rocklin-2?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "rating_img_url": "http://s3-media1.fl.yelpcdn.com/assets/2/www/img/5ef3eb3cb162/ico/stars/v1/stars_3_half.png",
      "review_count": 707,
      "name": "Studio Movie Grill",
      "rating_img_url_small": "http://s3-media1.fl.yelpcdn.com/assets/2/www/img/2e909d5d3536/ico/stars/v1/stars_small_3_half.png",
      "url": "http://www.yelp.com/biz/studio-movie-grill-rocklin-2?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "categories": [
        [
          "American (Traditional)",
          "tradamerican"
        ],
        [
          "Cinema",
          "movietheaters"
        ]
      ],
      "phone": "9162389000",
      "snippet_text": "SMG is a nifty idea. The food and drinks are pretty good. I ordered the veggie flatbread pizza with no cheese. It had all kinds of fresh veggies and a...",
      "image_url": "http://s3-media1.fl.yelpcdn.com/bphoto/kTJ-jJZiytWqsJM4X3CQTQ/ms.jpg",
      "snippet_image_url": "http://s3-media1.fl.yelpcdn.com/photo/2F9PuVOhvxB0ahe6YDJDmQ/ms.jpg",
      "display_phone": "+1-916-238-9000",
      "rating_img_url_large": "http://s3-media3.fl.yelpcdn.com/assets/2/www/img/bd9b7a815d1b/ico/stars/v1/stars_large_3_half.png",
      "id": "studio-movie-grill-rocklin-2",
      "is_closed": false,
      "location": {
        "city": "Rocklin",
        "display_address": [
          "5140 Commons Dr",
          "Rocklin, CA 95677"
        ],
        "geo_accuracy": 9.5,
        "postal_code": "95677",
        "country_code": "US",
        "address": [
          "5140 Commons Dr"
        ],
        "coordinate": {
          "latitude": 38.80388,
          "longitude": -121.207363
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
      "is_claimed": true,
      "rating": 3.0,
      "mobile_url": "http://m.yelp.com/biz/pyramid-bar-and-grill-rocklin?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "rating_img_url": "http://s3-media3.fl.yelpcdn.com/assets/2/www/img/34bc8086841c/ico/stars/v1/stars_3.png",
      "review_count": 9,
      "name": "Pyramid Bar & Grill",
      "rating_img_url_small": "http://s3-media3.fl.yelpcdn.com/assets/2/www/img/902abeed0983/ico/stars/v1/stars_small_3.png",
      "url": "http://www.yelp.com/biz/pyramid-bar-and-grill-rocklin?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "categories": [
        [
          "American (Traditional)",
          "tradamerican"
        ],
        [
          "Bars",
          "bars"
        ]
      ],
      "phone": "9166328333",
      "snippet_text": "I first learned about them after a Yelp Elite Event, so I decided to check them out again. We came out after some Christmas shopping, so it was already...",
      "image_url": "http://s3-media4.fl.yelpcdn.com/bphoto/ieJrpxSf-YwR9SFw-vv_9w/ms.jpg",
      "snippet_image_url": "http://s3-media1.fl.yelpcdn.com/photo/EmSlYmKXu82hSJDgyQPPtA/ms.jpg",
      "display_phone": "+1-916-632-8333",
      "rating_img_url_large": "http://s3-media1.fl.yelpcdn.com/assets/2/www/img/e8b5b79d37ed/ico/stars/v1/stars_large_3.png",
      "id": "pyramid-bar-and-grill-rocklin",
      "is_closed": false,
      "location": {
        "city": "Rocklin",
        "display_address": [
          "Whitney Oaks Golf Club",
          "2305 Clubhouse Dr",
          "Rocklin, CA 95677"
        ],
        "geo_accuracy": 9.5,
        "postal_code": "95677",
        "country_code": "US",
        "address": [
          "Whitney Oaks Golf Club",
          "2305 Clubhouse Dr"
        ],
        "coordinate": {
          "latitude": 38.8244987279177,
          "longitude": -121.240544691682
        },
        "state_code": "CA"
      }
    },
    {
      "is_claimed": true,
      "rating": 4.5,
      "mobile_url": "http://m.yelp.com/biz/the-monks-cellar-roseville-2?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "rating_img_url": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
      "review_count": 293,
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
    },
    {
      "is_claimed": false,
      "rating": 2.5,
      "mobile_url": "http://m.yelp.com/biz/rebounds-rocklin?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c7fb9aff59f9/ico/stars/v1/stars_2_half.png",
      "review_count": 9,
      "name": "Rebounds",
      "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/8e8633e5f8f0/ico/stars/v1/stars_small_2_half.png",
      "url": "http://www.yelp.com/biz/rebounds-rocklin?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "categories": [
        [
          "Pubs",
          "pubs"
        ]
      ],
      "phone": "9166249176",
      "snippet_text": "amazing food, cheap drinks, great people, tons of screens.\n\ni spent most of my 21st birthday there.  first drink on the house, and she treated me very well....",
      "snippet_image_url": "http://s3-media1.fl.yelpcdn.com/photo/SbRlKqoDmlXRDTtVjg1hzA/ms.jpg",
      "display_phone": "+1-916-624-9176",
      "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/d63e3add9901/ico/stars/v1/stars_large_2_half.png",
      "id": "rebounds-rocklin",
      "is_closed": false,
      "location": {
        "city": "Rocklin",
        "display_address": [
          "4451 Pacific St",
          "Rocklin, CA 95677"
        ],
        "geo_accuracy": 8.0,
        "postal_code": "95677",
        "country_code": "US",
        "address": [
          "4451 Pacific St"
        ],
        "coordinate": {
          "latitude": 38.8004608,
          "longitude": -121.2243729
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
      "rating": 5.0,
      "mobile_url": "http://m.yelp.com/biz/jerseys-haircuts-and-brews-roseville?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "rating_img_url": "http://s3-media1.fl.yelpcdn.com/assets/2/www/img/f1def11e4e79/ico/stars/v1/stars_5.png",
      "review_count": 18,
      "name": "Jersey's Haircuts & Brews",
      "rating_img_url_small": "http://s3-media1.fl.yelpcdn.com/assets/2/www/img/c7623205d5cd/ico/stars/v1/stars_small_5.png",
      "url": "http://www.yelp.com/biz/jerseys-haircuts-and-brews-roseville?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "categories": [
        [
          "Men's Hair Salons",
          "menshair"
        ],
        [
          "Sports Bars",
          "sportsbars"
        ]
      ],
      "phone": "9167824247",
      "snippet_text": "Just happened by.    Nice place. Girls are friendly.   Lots of TVs   Good haircut.  Highly recommend this place. Even just for a beer and watch the game",
      "image_url": "http://s3-media3.fl.yelpcdn.com/bphoto/3bQmk6rH1B4uk-KsUn3Kfw/ms.jpg",
      "snippet_image_url": "http://s3-media1.fl.yelpcdn.com/photo/h2xejsl2Om20zyZ4ygPyyQ/ms.jpg",
      "display_phone": "+1-916-782-4247",
      "rating_img_url_large": "http://s3-media3.fl.yelpcdn.com/assets/2/www/img/22affc4e6c38/ico/stars/v1/stars_large_5.png",
      "id": "jerseys-haircuts-and-brews-roseville",
      "is_closed": false,
      "location": {
        "city": "Roseville",
        "display_address": [
          "6726 Stanford Ranch Rd",
          "Ste 4",
          "Roseville, CA 95678"
        ],
        "geo_accuracy": 8.0,
        "postal_code": "95678",
        "country_code": "US",
        "address": [
          "6726 Stanford Ranch Rd",
          "Ste 4"
        ],
        "coordinate": {
          "latitude": 38.7826004,
          "longitude": -121.2658539
        },
        "state_code": "CA"
      }
    },
    {
      "is_claimed": true,
      "rating": 4.5,
      "mobile_url": "http://m.yelp.com/biz/house-of-oliver-roseville?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "rating_img_url": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
      "review_count": 137,
      "name": "House of Oliver",
      "rating_img_url_small": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
      "url": "http://www.yelp.com/biz/house-of-oliver-roseville?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=WvXOBk7fOhngdvk3nKR-7w",
      "categories": [
        [
          "Jazz & Blues",
          "jazzandblues"
        ],
        [
          "Wine Bars",
          "wine_bars"
        ],
        [
          "American (New)",
          "newamerican"
        ]
      ],
      "phone": "9167739463",
      "snippet_text": "First time here tonight, and I loved it. It's a perfect wine bar. (Note: glass are between $9-$23, there are mostly $12-$15 glasses)\n\nThe wine selection is...",
      "image_url": "http://s3-media4.fl.yelpcdn.com/bphoto/a5lku18alZaG6wXEeOKeRQ/ms.jpg",
      "snippet_image_url": "http://s3-media2.fl.yelpcdn.com/photo/__ZYJIc4R6QgNqQ5NRqM6Q/ms.jpg",
      "display_phone": "+1-916-773-9463",
      "rating_img_url_large": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
      "id": "house-of-oliver-roseville",
      "is_closed": false,
      "location": {
        "city": "Roseville",
        "display_address": [
          "3992 Douglas Blvd",
          "Ste 140",
          "Roseville, CA 95661"
        ],
        "geo_accuracy": 8.0,
        "postal_code": "95661",
        "country_code": "US",
        "address": [
          "3992 Douglas Blvd",
          "Ste 140"
        ],
        "coordinate": {
          "latitude": 38.7436857,
          "longitude": -121.226973
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
    marginBottom: 24,
    width: 900,
    margin: '0 auto',
  },
  gridTile: {
    cursor: 'pointer',
    boxShadow: '0 3px 10px rgba(0,0,0,0.16), 0 3px 10px rgba(0,0,0,0.23)',
  },
  imGoingButton: {
    color: 'whitesmoke',
    float: 'right',
  },
  imGoingButtonContainer: {
    position: 'relative',
    top: '-36px',
    left: '138px',
  },
};

const style = {
  container: {
    position: 'absolute',
    width: 50,
    height: 50,
  },
  refresh: {
    left: '-10070px',
  },
};


function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      l: this.props.l,
    };

    this._getYelpResults = this._getYelpResults.bind(this);
  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    //this.context.onSetTitle(title);
    this._getYelpResults();
  }

  componentDidMount() {
    //console.log('Did Mount');
  }

  componentDidUpdate() {
    //console.log('Did Update');
  }

  componentWillUpdate() {
    //console.log('Will Update');
  }

  componentWillReceiveProps() {
    //console.log('Will Receive Props', this.props.l, this.state.l);
    if (this.props.l !== this.state.l) {
      this.setState({
        results: [],
        l: this.props.l,
      });
      this._getYelpResults();
    }
  }

  shouldComponentUpdate() {
    //console.log('Should Component Update', this.props.l, this.state.l);
    return true;
  }

  _getYelpResults() {
    fetch('/api/yelp?l=' + this.props.l).then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({results: json});
      });
  }

  _handleTileClick(businessId, e) {
    Location.push('/business/' + businessId);
  }

  _handleAttendingClick(businessId, e) {
    e.preventDefault();
    console.log('Attending ', businessId);
    fetch('/api/users/attending/' + businessId)
    .then(response => {
      return response.json();
    }).then(json => {

    }).catch(error => {
      console.log('Failed to add RSVP: ', error);
    });
  }

  render() {
    //console.log('Render', this.props.l, this.state.l);
    const { width, height } = this.props.viewport;

    style.container.top = height / 2 - 25;
    style.container.left = width / 2 - 25;

    if (this.state.results.length === 0) {
      return (
        <div style={style.container}>
          <RefreshIndicator size={50} left={70} top={0} loadingColor={"#FF9800"} status="loading"
                               style={style.refresh}/>
        </div>
      );
    }

    const cellWidth = 182;
    const cellHeight = 244;
    const cellPadding = 10;
    const cols = Math.floor((width - 31) / (cellWidth + 2 * cellPadding));
    styles.gridList.width = cols * (cellWidth + 2 * cellPadding);

    // TODO JKW: Change the style on the tiles so they look like they lift up on hover.

    return (
      <div className={s.root}>
        <div style={styles.root}>
          <GridList cols={cols} cellHeight={cellHeight} padding={cellPadding} style={styles.gridList}>
            {this.state.results.businesses.map(business => (
              <GridTile key={business.name} style={styles.gridTile}
                        cols={1} rows={1} rootClass="blank">
                <div className={s.gridImageContainer} onClick={this._handleTileClick.bind(this, business.id)}>
                  <img className={s.gridImage} src={business.image_url}/>
                </div>
                <div className={s.gridInfoContainer}>
                  <div className={s.gridTitle} onClick={this._handleTileClick.bind(this, business.id)}>{business.name}</div>
                  <div className={s.gridAttendees} onClick={this._handleTileClick.bind(this, business.id)}>{business.attendees} attendees</div>
                  {() => {
                      if (this.props.user.username === null) {
                        return ;
                      } else {
                        return (
                          <IconButton style={styles.imGoingButtonContainer} tooltip="I'm attending!" touch={true}
                                      onClick={this._handleAttendingClick.bind(this, business.id)} rippleColor="whitesmoke" tooltipPosition="top-left">
                            <FontIcon className="material-icons" style={styles.imGoingButton} color={'whitesmoke'}>plus_one</FontIcon>
                          </IconButton>
                        )
                      }
                    }
                  }
                </div>
              </GridTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }

}

export default withViewport(withStyles(SearchResults, s));
