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
import s from './RegisterPage.scss';
import fetch from '../../core/fetch';
import Location from '../../core/Location';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import Snackbar from 'material-ui/lib/snackbar';

const title = 'New User Registration';

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

class RegisterPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this._onInputChange = this._onInputChange.bind(this);
    this._handleRegistration = this._handleRegistration.bind(this);
    this.state = {
      username: '',
      password: '',
      snackbarMessage: '',
      snackbarOpen: false,
    }
  }

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  componentDidMount() {
    this._input.focus();
  }

  _onInputChange(e) {
    var state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  _handleRegistration() {
    fetch('/api/users/register', {
      method: 'post',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    }).then(response => {
      return response.json();
    }).then(json => {
      if (typeof json.data !== 'undefined') {
        Location.push('/signin');
      } else {
        this.setState({
          snackbarOpen: true,
          snackbarMessage: json.error.message,
        });
      }
    }).catch(error => {
      console.log('Failed to sign in: ', error);
    });
  }

  render() {
    return (
      <div className={s.root}>
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          <Paper style={paperStyle} zDepth={1}>
            <h1>{title}</h1>
            <p>Register so you can set your RSVP.</p>
            <TextField name="username" style={buttonStyle} hintText="Username"
                       onChange={this._onInputChange}
                       ref={(c) => this._input = c} />
            <TextField name="password" style={buttonStyle} hintText="Password" type="password"
                       onChange={this._onInputChange} onEnterKeyDown={this._handleRegistration} /><br/>
            <RaisedButton style={buttonStyle} labelStyle={buttonLabelStyle} label="Cancel"
                          onClick={this.handleCancel} />
            <RaisedButton style={buttonStyle} labelStyle={buttonLabelStyle} label="Register"
                          onClick={this._handleRegistration} primary={true} />
          </Paper>
        </ReactCSSTransitionGroup>
        <Snackbar
          open={this.state.snackbarOpen}
          message={this.state.snackbarMessage}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }

}

export default withStyles(RegisterPage, s);
