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
import s from './Footer.scss';
import Link from '../Link';
import fetch from '../../core/fetch';

class Footer extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <span className={s.text}>© Justin Watson</span>
          <span className={s.spacer}>·</span>
          <a className={s.link} href="http://www.freecodecamp.com/fallrisk">fallrisk@freecodecamp</a>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/README">README</Link>
          <span className={s.spacer}>·</span>
          <a className={s.link} href="https://github.com/fallrisk/Nightlife">
            <i className='fa fa-github-alt'></i><span>GitHub</span>
          </a>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/not-found">404 Page</Link>
        </div>
      </div>
    );
  }

}

export default withStyles(Footer, s);
