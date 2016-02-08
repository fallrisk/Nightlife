/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SigninPage.scss';
import fetch from '../../core/fetch';
import Location from '../../core/Location';

import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import Snackbar from 'material-ui/lib/snackbar';

const title = 'Sign in';

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

class SigninPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      snackbarOpen: false,
    }

    this._handleSignin = this._handleSignin.bind(this);
    this._onInputChange = this._onInputChange.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
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

  _handleSignin() {
    fetch('/api/users/signin', {
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
      params: {
        username: this.state.username,
        password: this.state.password,
      }
    }).then(response => {
      return response.json();
    }).then(json => {
      //console.log('Signin Results: ', json);
      if (json.isLoginSuccessful) {
        Location.goBack();
      } else {
        this.setState({snackbarOpen: true});
      }
    }).catch(error => {
      console.log('Failed to sign in: ', error);
    });
  }

  handleRequestClose = () => {
    this.setState({
      snackbarOpen: false,
    });
  };

  handleCancel = () => {
    Location.goBack();
  };

  render() {
    return (
      <div className={s.root}>
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          <Paper style={paperStyle} zDepth={1}>
            <h1>{title}</h1>
            <TextField name="username" style={buttonStyle} hintText="Username"
                       onChange={this._onInputChange}
                       ref={(c) => this._input = c} />
            <TextField name="password" style={buttonStyle} hintText="Password" type="password"
                       onChange={this._onInputChange} onEnterKeyDown={this._handleSignin} /><br/>
            <RaisedButton style={buttonStyle} labelStyle={buttonLabelStyle} label="Cancel"
                          onClick={this.handleCancel} />
            <RaisedButton style={buttonStyle} labelStyle={buttonLabelStyle} label="Sign in"
                          onClick={this._handleSignin} primary={true} />
          </Paper>
        </ReactCSSTransitionGroup>
        <Snackbar
          open={this.state.snackbarOpen}
          message="Failed to sign in."
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }

}

export default withStyles(SigninPage, s);
