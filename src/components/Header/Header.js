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
import Location from '../../core/Location';
import Navigation from '../Navigation';

import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';
import FontIcon from 'material-ui/lib/font-icon';
import Colors from 'material-ui/lib/styles/colors';
import Divider from 'material-ui/lib/divider';
import Toggle from 'material-ui/lib/toggle';
import Avatar from 'material-ui/lib/avatar';
import Popover from 'material-ui/lib/popover/popover';

var appBarStyles = {
  height: '200px',
  background: 'none',
  backgroundImage: `url('google_inspired_wallpaper__night__by_brebenel_silviu-d6pg3lr.jpg')`,
  //backgroundPosition: '60% 50%', // This is fucking cool. This is how I will do simple parallax effect.
  backgroundPositionY: '50%',
  marginBottom: '10px',
  animationName: 'example',
  animationDuration: '5s',
  animationTimingFunction: 'ease-in-out',
  animationDelay: '2s',
  WebkitAnimationName: s.example,
  WebkitAnimationDuration: '5s',
  WebkitAnimationDelay: '2s',
  WebkitAnimationTimingFunction: 'ease-in-out',
  WebkitAnimationFillMode: 'forwards',
};

const styles = {
  textField: {
    backgroundColor: '#fafafa',
    height: '38px',
  },
  avatar: {
    position: 'relative',
    top: 7,
    marginLeft: 20,
    marginRight: 20,
    cursor: 'pointer',
    paddingTop: '0',
    backgroundColor: '#fafafa',
  },
  avatar2: {
    color: 'black',
  },
  popover: {
    padding: '10px',
    backgroundColor: '#fafafa',
  },
  toggle: {
  },
  toggleLabelStyle: {
    display: 'inline',
    width: '300px',
    color: 'whitesmoke',
  },
  buttonLabelStyle: {
    textTransform: 'none',
  },
  buttonStyle: {
    marginLeft: 10,
  }
};

var boxMullerRandom = (function () {
  var phase = 0,
    RAND_MAX,
    array,
    random,
    x1, x2, w, z;

  if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
    RAND_MAX = Math.pow(2, 32) - 1;
    array = new Uint32Array(1);
    random = function () {
      crypto.getRandomValues(array);

      return array[0] / RAND_MAX;
    };
  } else {
    random = Math.random;
  }

  return function () {
    if (!phase) {
      do {
        x1 = 2.0 * random() - 1.0;
        x2 = 2.0 * random() - 1.0;
        w = x1 * x1 + x2 * x2;
      } while (w >= 1.0);

      w = Math.sqrt((-2.0 * Math.log(w)) / w);
      z = x1 * w;
    } else {
      z = x2 * w;
    }

    phase ^= 1;

    return z;
  }
}());

function randomWalk(steps, randFunc) {
  steps = steps >>> 0 || 100;
  if (typeof randFunc !== 'function') {
    randFunc = boxMullerRandom;
  }

  var points = [],
    value = 0,
    t;

  for (t = 0; t < steps; t += 1) {
    value += randFunc();
    points.push([t, value]);
  }

  return points;
}

class Header extends Component {
  constructor(props) {
    super(props);

    this.setGeolocation = this.setGeolocation.bind(this);

    this.state = {
      query: '',
      navigationOpen: false,
      movementX: randomWalk(),
      movementY: randomWalk(),
      currentIndex: 0,
      avatarPopoverOpen: false,
      textLocation: '',
      geolocation: {},
      reverseGeo: 'Loading...',
    };

    if (typeof navigator !== 'undefined') {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(this.setGeolocation);
      }
    }

    this._update = this._update.bind(this);
    this._handleAvatarPopover = this._handleAvatarPopover.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this._onLocationEnterKey = this._onLocationEnterKey.bind(this);
    this._handleTitleTouchTap = this._handleTitleTouchTap.bind(this);
    this._handleLocationChange = this._handleLocationChange.bind(this);
  }

  setGeolocation(position) {
    this.setState({geolocation: position});
  }

  componentDidMount() {
    //setTimeout(this._update, 10000);
  }

  componentWillReceiveProps(nextProps) {
    console.log('Header Component Will Receipt Props: ', nextProps);
    this.setState({textLocation: nextProps.location});
  }

  _update() {
    var self = this;
    appBarStyles.backgroundPosition = this.state.movementX[this.state.currentIndex][1] + '% ' + this.state.movementY[this.state.currentIndex][1] + '%';
    this.setState({currentIndex: this.state.currentIndex + 1});
    //setTimeout(self._update, 10000);
    //this.forceUpdate();
  }

  _handleAvatarPopover(e) {
    this.setState({
      avatarPopoverOpen: !this.state.avatarPopoverOpen,
      popoverAnchor: e.currentTarget,
    });
  }

  handleRequestClose() {
    this.setState({
      avatarPopoverOpen: false,
    });
  };

  _onLocationEnterKey(e) {
    Location.push('/?l=' + e.target.value);
  }

  _handleTitleTouchTap(e) {
    if (e.target.innerHTML.toString() === 'Nightlife') {
      Location.push('/');
      return;
    }
  }

  _handleLocationChange(e) {
    this.setState({textLocation: e.target.value});
  }

  render() {
    //<Toggle style={styles.toggle} labelStyle={styles.toggleLabelStyle} labelPosition="right" label={'Use Geolocation: ' + this.state.reverseGeo}/>
    var self = this;

    const signIn = () => {Location.push('/signin'); self.handleRequestClose();};

    const signOut = () => {
      fetch('/api/users/signout', {
        credentials: 'same-origin'
      }).then(response => {
        self.handleRequestClose();
        Location.push('/');
      });
    };

    var popover = (<div></div>);

    if (this.props.user.username !== null) {
      popover = (
        <Popover open={this.state.avatarPopoverOpen}
                 anchorEl={this.state.popoverAnchor}
                 anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                 targetOrigin={{horizontal: 'right', vertical: 'top'}}
                 useLayerForClickAway={false}
                 onRequestClose={this.handleRequestClose}
                 style={styles.popover}>
          <div className={s.userbox}>
            <div className={s.topSection}>
              <i className={'material-icons ' + s.largerPersonIcon}>person</i>
              <span className={s.userTitle}>Hey {this.props.user.username}</span>
            </div>
            <div className={s.bottomSection}>
              <FlatButton style={styles.buttonStyle} labelStyle={styles.buttonLabelStyle}
                          label="Sign out" onClick={signOut} />
            </div>
          </div>
        </Popover>
      );
    }
    else {
      popover = (
        <Popover open={this.state.avatarPopoverOpen}
                 anchorEl={this.state.popoverAnchor}
                 anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                 targetOrigin={{horizontal: 'right', vertical: 'top'}}
                 useLayerForClickAway={false}
                 onRequestClose={this.handleRequestClose}
                 style={styles.popover}>
          <div className={s.userbox}>
            <div className={s.topSection}>
              <i className={'material-icons ' + s.largerPersonIcon}>person</i>
              <span className={s.userTitle}>Hey stranger.</span>
            </div>
            <div className={s.bottomSection}>
              <FlatButton style={styles.buttonStyle} labelStyle={styles.buttonLabelStyle}
                          label="Sign in" onClick={signIn} />
              <FlatButton style={styles.buttonStyle} labelStyle={styles.buttonLabelStyle}
                          label="Register" />
            </div>
          </div>
        </Popover>
      );
    }

    return (
      <div>
        <AppBar title={<span className={s.title}>Nightlife</span>} showMenuIconButton={false}
          style={appBarStyles} zDepth={3} onTitleTouchTap={this._handleTitleTouchTap}
          iconElementRight={
            <div className={s.appbarToolbar}>
              <i className={'material-icons ' + s.locationIcon}>edit_location</i>
              <TextField inputStyle={styles.textField} hintText="Zipcode or City, State"
                         underlineShow={false} onEnterKeyDown={this._onLocationEnterKey}
                         value={this.state.textLocation} onChange={this._handleLocationChange} />
              <Avatar style={styles.avatar} onClick={this._handleAvatarPopover}
               icon={<i className={'material-icons ' + s.smallPersonIcon}>person</i>}/>
              {popover}
            </div>
          }
        >
        </AppBar>
      </div>
    );
  }

}

export default withStyles(Header, s);
