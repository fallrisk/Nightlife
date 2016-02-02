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
import s from './MainPage.scss';
import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import Location from '../../core/Location';
import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';

const title = 'Nightlife';

const paperStyle = {
  height: '200px',
  padding: '20px',
};

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      geolocation: {},
      textLocation: '',
      useGeo: false, // Use Geolocation or what was put into the textfield?
    }

    if (typeof navigator !== 'undefined') {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(this.setLocation);
      }
    }

    this._handleChange = this._handleChange.bind(this);
    this._handleEnterKey = this._handleEnterKey.bind(this);
  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  setLocation(position) {
    this.setState({geolocation: position});
  }

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  _handleChange(e) {
    this.setState({textLocation: e.target.value});
  }

  _handleEnterKey() {
    console.log(this.state.textLocation);
    console.log(this.state.geolocation);
    Location.push('/?q=' + this.state.textLocation);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <p>Enter a location at the top or use your geolocation found by your browser.</p>
        </div>
      </div>
    );
  }

}

export default withStyles(MainPage, s);
