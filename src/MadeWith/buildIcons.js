import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/fontawesome-free-solid';
import { faReact } from '@fortawesome/fontawesome-free-brands';

const Icon = ({ icon, style }) => (
  <FontAwesomeIcon
    className={'made-with-icon'}
    icon={icon}
    style={style}
  />
)

const namesToIcons = Object.freeze({
  'love': <Icon icon={ faHeart } style={ { color: 'red' } }/>,
  'react': <Icon icon={ faReact } style={ { color: 'aqua' } } />,
});

const buildIcons = (props) => {
  const icons = [];
  Object.keys(props).forEach(propName => {
    if (Object.keys(namesToIcons).indexOf(propName) >= 0) {
      icons.push(namesToIcons[propName]);
    }
  });
  return icons;
}

Icon.propTypes = {
  icon: PropTypes.element.isRequired,
  style: PropTypes.object.isRequired,
};

export default buildIcons;
