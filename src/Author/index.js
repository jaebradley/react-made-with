import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmail from 'isemail';
import urlParse from 'url';
import parseGitHubUrl from 'parse-github-url';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/fontawesome-free-solid';
import { faTwitter, faGithub } from '@fortawesome/fontawesome-free-brands';

class Author extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { identifier, display, showIcon, iconColor } = this.props;

    if (!identifier) {
      return null;
    }

    if (isEmail.validate(identifier)) {
      return (
        <span>
          <a href={ `mailto:${identifier}` }>
            { display || identifier }
          </a>
          { showIcon &&
            <span className={ 'author-icon' }> { <FontAwesomeIcon icon={ faEnvelope } style={ { color: iconColor } }/> }</span>
          }
        </span>
      );
    }

    const url = urlParse.parse(identifier);

    if (url && url.hostname) {
      let icon;
      let username;

      if (url.hostname === 'twitter.com') {
        icon = <FontAwesomeIcon icon={ faTwitter } style={ { color: iconColor || '#00aced' } } />
        // https://stackoverflow.com/questions/5948051/regex-extract-twitterusername-from-url#comment43986805_5948248
        username = identifier.match(/^https?:\/\/(www\.)?twitter\.com\/(#!\/)?([^/]+)(\/\w+)*$/)[3];
      } else if (url.hostname === 'github.com') {
        icon = <FontAwesomeIcon icon={ faGithub } style={ { color: iconColor || 'black' } } />
        username = parseGitHubUrl(identifier).owner;
      } else {
        return <a href={ identifier }>{ display || identifier }</a>;
      }

      return (
        <span>
          <a href={ identifier }>{ display || `@${username}` }</a>
          { showIcon &&
            <span className={'author-icon'}> { icon }</span> }
        </span>
      );
    }

    return <span>{ display || identifier }</span>;
  }
}

Author.defaultProps = {
  displayName: '',
  showIcon: true,
  iconColor: '',
};

Author.propTypes = {
  identifier: PropTypes.string.isRequired,
  display: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  showIcon: PropTypes.bool,
  iconColor: PropTypes.string,
};

export default Author;
