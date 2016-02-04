/**
 * Created by Justin on 2016-02-03.
 */

// {businessId: '', username: '', dateAttending: Date}
var _attendings = [];

var _attendingsByBusiness = new Map();

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
  _attendingsByBusiness.get(businessId).push(attendee);
}

export default {
  get: get,
  getSize: getSize,
  getAll: getAll,
  add: add,
  Attendee: Attendee
};
