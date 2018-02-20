import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import buildIcons from './buildIcons';
import Author from '../Author';

class MadeWith extends Component {
  constructor(props) {
    super(props);
  }

  buildIcons() {
    const { separator } = this.props;
    return buildIcons(this.props)
      .map((icon, index) => <span key={ `icon-${index}` }>{ icon }</span>)
      .reduce((previous, current, index) => [
        previous,
        <span key={ `icon-separator-${index}` }> { separator } </span>,
        current
      ])
  }

  render() {
    const { className, author } = this.props;
    return (
      <div className={ classNames(className, 'made-with') }>
        Made with
        { ' ' }
        { this.buildIcons() }
        { author &&
          <span className={ 'author-wrapper' }> by
            { ' ' }
            <Author
              className={ 'author' }
              { ...author }
            />
          </span>
        }
      </div>
    )
  }
}

MadeWith.defaultProps = {
  author: {
    display: '',
    showIcon: true,
    iconColor: '',
  },
  love: true,
  react: false,
  separator: 'and',
  className: '',
}

MadeWith.propTypes = {
  author: PropTypes.shape({
    identifier: PropTypes.string.isRequired,
    display: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    showIcon: PropTypes.bool,
    iconColor: PropTypes.string,
  }).isRequired,
  love: PropTypes.bool,
  react: PropTypes.bool,
  separator: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
}

export default MadeWith;
