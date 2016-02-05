/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import emptyFunction from 'fbjs/lib/emptyFunction';
import s from './App.scss';
import Header from '../Header';
import Footer from '../Footer';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from '../../constants/MuiTheme';
//import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

injectTapEventPlugin();

//@ThemeDecorator(ThemeManager.getMuiTheme(MyRawTheme))
class App extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    context: PropTypes.shape({
      insertCss: PropTypes.func,
      onSetTitle: PropTypes.func,
      onSetMeta: PropTypes.func,
      onPageNotFound: PropTypes.func,
    }),
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired,
    onSetTitle: PropTypes.func.isRequired,
    onSetMeta: PropTypes.func.isRequired,
    onPageNotFound: PropTypes.func.isRequired,
    muiTheme: React.PropTypes.object,
  };

  getChildContext() {
    const context = this.props.context;
    return {
      insertCss: context.insertCss || emptyFunction,
      onSetTitle: context.onSetTitle || emptyFunction,
      onSetMeta: context.onSetMeta || emptyFunction,
      onPageNotFound: context.onPageNotFound || emptyFunction,
      muiTheme: ThemeManager.getMuiTheme(MyRawTheme),
    };
  }

  componentWillMount() {
    this.removeCss = this.props.context.insertCss(s);
  }

  componentWillUnmount() {
    this.removeCss();
  }

  render() {
    return !this.props.error ? (
      <div>
        <Header user={this.props.user} />
        {this.props.children}
        <Footer />
      </div>
    ) : this.props.children;
  }

}

export default App;
