/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 *
 * https://developers.google.com/maps/documentation/javascript/examples/geocoding-reverse
 *
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MainPage.scss';
import Link from '../Link';
import ReactDOM from 'react-dom';

import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import Location from '../../core/Location';


const title = 'Nightlife';

const paperStyle = {
  height: '400px',
  padding: '20px',
  width: '100%',
};

const buttonStyle = {
  marginLeft: 10,
};

const buttonLabelStyle = {
  textTransform: 'none',
};

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      geolocation: {},
      location: '',
    }

    this.setGeolocation = this.setGeolocation.bind(this);
    this._handleEnterKey = this._handleEnterKey.bind(this);
    this._handleLocationChange = this._handleLocationChange.bind(this);
  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  setGeolocation(position) {
    this.setState({geolocation: position});
  }

  componentWillMount() {
    this.context.onSetTitle(title);
    if (typeof navigator !== 'undefined') {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(this.setGeolocation);
      }
    }
  }

  componentDidMount() {
    this._input.focus();
  }

  _handleLocationChange(e) {
    this.setState({location: e.target.value});
  }

  _handleEnterKey() {
    Location.push('/?l=' + this.state.location);
  }

  render() {
    // Make the text field have focus on page load.
    // https://facebook.github.io/react/docs/more-about-refs.html
    // https://github.com/callemall/material-ui/issues/1594
    return (
      <div className={s.root}>
        <Paper style={paperStyle} zDepth={1}>
          <p className={s.info}>Find local bars by entering your location.</p>
          <TextField hintText="Zipcode or City, State" onEnterKeyDown={this._handleEnterKey}
                     value={this.state.location} onChange={this._handleLocationChange}
                     ref={(c) => this._input = c} />
          <RaisedButton style={buttonStyle} labelStyle={buttonLabelStyle} label="Find fun" primary={true}
                        onClick={this._handleEnterKey} />
          <p><Link to="/register">Register</Link> or <Link to="/signin">Sign in</Link> to let other people know you are attending.</p>
        </Paper>
      </div>
    );
  }

}

export default withStyles(MainPage, s);
