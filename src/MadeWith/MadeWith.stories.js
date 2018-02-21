
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faUserSecret, faPlus } from '@fortawesome/fontawesome-free-solid';

import MadeWith from './index';
// import README from './README.md';

// const wrapComponent = (component) => (
//   withInfo(README)(() => component)
// );

storiesOf('Made With', module)
  .add('basic usage', () => (
    <MadeWith
      love
      react
      maker={{
        identifier: 'https://github.com/jaebradley'
      }}
    />
  ))
  .add('with email address', () => (
    <MadeWith
      love
      react
      maker={{
        identifier: 'jae.b.bradley@gmail.com',
        display: 'Jae Bradley',
        iconColor: 'blue',
      }}
    />
  ))
  .add('with icon as display', () => (
    <MadeWith
      react
      love
      maker={{
        identifier: 'https://github.com/jaebradley',
        display: <FontAwesomeIcon icon={ faUserSecret } />,
        showIcon: false,
      }}
    />
  ))
  .add('custom separator', () => (
    <MadeWith
      love
      react
      separator={ <FontAwesomeIcon icon={ faPlus } /> }
      maker={{
        identifier: 'https://github.com/jaebradley'
      }}
    />
  ));