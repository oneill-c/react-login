import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class FaIcon extends Component {
  render() {
    const { mode, icon, styles, spin } = this.props;
    return (
      <i
        className={classNames(mode, `fa-${icon}`, { 'fa-spin': spin })}
        style={styles}
      />
    );
  }
}

FaIcon.defaultProps = {
  mode: 'fa'
};

FaIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  mode: PropTypes.string,
  styles: PropTypes.object,
  spin: PropTypes.bool
};

export default FaIcon;
