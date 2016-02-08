/**
 * Created by Justin on 2016-02-03.
 */

var debug = require('debug')('attendees');

// {businessId: '', username: '', dateAttending: Date}
var _attendings = [];

var _attendingsByBusiness = new Map();

var _attendingsByUsername = new Map();

class Attendee {
  constructor(businessId, username) {
    this.businessId = businessId;
    this.username = username;
    this.dateAttending = Date.now();
  }
}

function getAll() {
  return _attendings;
}

function get(businessId) {
  return _attendingsByBusiness.get(businessId);
}

function getSize(businessId) {
  return get(businessId).length;
}

function add(businessId, attendee) {
  _attendings.push(new Attendee(businessId, attendee));
  let biz = _attendingsByBusiness.get(businessId);
  let user = _attendingsByUsername.get(attendee);

  if (biz === undefined) {
    _attendingsByBusiness.set(businessId, [attendee]);
  } else {
    biz.push(attendee);
  }

  if (user === undefined) {
    _attendingsByUsername.set(attendee, [businessId]);
  } else {
    user.push(businessId);
  }
}

function appendAttendees(yelpData) {
  var promise = new Promise((resolve, reject) => {
    let i = 0;
    let bizsToRemove = [];

    for (let yelpBusiness of yelpData.businesses) {

      // Remove those with no image_url.
      if (typeof yelpBusiness.image_url === 'undefined') {
        //console.log(yelpBusiness.id);
        bizsToRemove.push(i);
        i += 1;
        continue;
      }

      let attendees = _attendingsByBusiness.get(yelpBusiness.id);

      if (attendees !== undefined) {
        yelpData.businesses[i].attendees = attendees.length;
      } else {
        yelpData.businesses[i].attendees = 0;
      }
      i += 1;
    }

    for (i = 0; i < bizsToRemove.length; i++) {
      //console.log('removed: ', bizsToRemove[i]);
      yelpData.businesses.splice(bizsToRemove[i], 1);
    }

    resolve(yelpData);
  });
  return promise;
}

function setSampleData() {
  add('craft-beer-vault-rocklin', 'dandy');
}

function isUserAttending(businessId, username) {
  let businesses = _attendingsByUsername.get(username);

  if (businesses === undefined) {
    return false;
  } else {
    let i = businesses.findIndex(e => {
      return e === businessId;
    });
    if (i !== -1) {
      return true;
    } else {
      return false;
    }
  }
  return false;
}

function remove(username, businessId) {
  let ai = _attendings.findIndex(ele => {
    return businessId === ele.businessId && username === ele.username;
  });

  let b = _attendingsByBusiness.get(businessId);
  if (b !== -1) {
    let i = b.findIndex(ele => {
      return username === ele;
    });
    _attendingsByBusiness.get(businessId).splice(i, 1);
  }

  let u = _attendingsByUsername.get(username);
  if (u !== -1) {
    let i = u.findIndex(ele => {
      return businessId === ele;
    });
    _attendingsByUsername.get(username).splice(i, 1);
  }
}

export default {
  get: get,
  getSize: getSize,
  getAll: getAll,
  add: add,
  Attendee: Attendee,
  appendAttendees: appendAttendees,
  setSampleData: setSampleData,
  isUserAttending: isUserAttending,
  remove: remove,
};
