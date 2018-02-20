import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/fontawesome-free-solid';

import Author from './index';
// import README from './README.md';

// const wrapComponent = (component) => (
//   withInfo(README)(() => component)
// );

storiesOf('Author', module)
  .add('basic usage', () => (
    <Author identifier={ 'Jae Bradley' } />
  ))
  .add('with email address, no icon', () => (
    <Author identifier={ 'jae.b.bradley@gmail.com' } showIcon={ false } />
  ))
  .add('Twitter URL with icon and inferred display name', () => (
    <Author identifier={ 'https://twitter.com/jaebradley' } />
  ))
  .add('GitHub URL with icon and explicit display name', () => (
    <Author identifier={ 'https://github.com/jaebradley' } display={ 'Jae Bradley' } />
  ))
  .add('with email address and envelope icon', () => (
    <Author identifier={ 'jae.b.bradley@gmail.com' } />
  ))
  .add('url without explicit display name', () => (
    <Author identifier={ 'https://example.com' } />
  ))
  .add('url with explicit display name', () => (
    <Author identifier={ 'https://example.com' } display={ 'Example Dot Com' } />
  ));