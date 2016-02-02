
import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './BusinessPage.scss';
import Location from '../../core/Location';
import withViewport from '../withViewport';
import fetch from '../../core/fetch';

class BusinessPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount() {
    console.log(this.props.businessId);
  }

  render() {
    return (
      <div>Business Page</div>
    )
  }
}

export default withStyles(BusinessPage, s);
