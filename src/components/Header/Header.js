/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import Link from '../Link';
import Navigation from '../Navigation';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import FlatButton from 'material-ui/lib/flat-button';
import FontIcon from 'material-ui/lib/font-icon';
import Location from '../../core/Location';
import LeftNav from 'material-ui/lib/left-nav';
import Colors from 'material-ui/lib/styles/colors';

const iconStyles = {
  marginRight: 24,
};

const appBarStyles = {
  height: '200px',
  background: 'none',
  backgroundImage: `url('google_inspired_wallpaper__night__by_brebenel_silviu-d6pg3lr.jpg')`,
  backgroundPosition: '60% 50%', // THis is fucking cool. This is how I will do simple parallax effect.
  marginBottom: '10px',
}

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      navigationOpen: false,
    }

    this._handleChange = this._handleChange.bind(this);
    this._handleSearch = this._handleSearch.bind(this);
  }

  _handleSearch(e) {
    Location.push('/?q=' + this.state.query);
  }

  _handleChange(e) {
    this.setState({
      query: e.target.value
    });
  }

  render() {
    return (
      <div>
        <AppBar title="Nightlife" showMenuIconButton={true}
          style={appBarStyles}
          onLeftIconButtonTouchTap={open => this.setState({open})}
          iconElementRight={
            <div>
              <IconButton onClick={this._handleSearch}>
                <FontIcon className="material-icons" style={iconStyles} color={Colors.blue50}>search</FontIcon>
              </IconButton>
            </div>
          }
        />
        <LeftNav
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
        >
          <MenuItem>Login</MenuItem>
          <MenuItem>README</MenuItem>
        </LeftNav>
      </div>
    );
  }

}

export default withStyles(Header, s);
