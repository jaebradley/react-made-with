import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/fontawesome-free-solid';

import Maker from './index';
import README from './README.md';

const wrapComponent = (component) => (
  withInfo(README)(() => component)
);

storiesOf('Maker', module)
  .add('basic usage', wrapComponent(
    <Maker identifier={ 'Jae Bradley' } />
  ))
  .add('with email address, no icon', wrapComponent(
    <Maker identifier={ 'jae.b.bradley@gmail.com' } showIcon={ false } />
  ))
  .add('Twitter URL with icon and inferred display name', wrapComponent(
    <Maker identifier={ 'https://twitter.com/jaebradley' } />
  ))
  .add('GitHub URL with icon and explicit display name', wrapComponent(
    <Maker identifier={ 'https://github.com/jaebradley' } display={ 'Jae Bradley' } />
  ))
  .add('with email address and envelope icon', wrapComponent(
    <Maker identifier={ 'jae.b.bradley@gmail.com' } />
  ))
  .add('url without explicit display name', wrapComponent(
    <Maker identifier={ 'https://example.com' } />
  ))
  .add('url with explicit display name', wrapComponent(
    <Maker identifier={ 'https://example.com' } display={ 'Example Dot Com' } />
  ));