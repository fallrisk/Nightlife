/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.scss';
import Link from '../Link';

import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    }
  }

  componentDidUpdate() {
    this.setState({open: this.props.open})
  }

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <LeftNav open={this.state.open} docked={false}>
        <MenuItem>Login</MenuItem>
        <MenuItem>README</MenuItem>
      </LeftNav>
    );
  }

}

export default withStyles(Navigation, s);
