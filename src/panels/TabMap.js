import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class TabMap extends Component {
  static propTypes = {
    update: PropTypes.func.isRequired,
    go: PropTypes.func.isRequired,
  };

  render() {
    return (
      <Fragment>
        Карта
      </Fragment>
    );
  }
}
