import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { setDefaults } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';
import { checkA11y } from '@storybook/addon-a11y';

addDecorator(centered);
addDecorator(checkA11y);

setDefaults({
  inline: false,
  header: true,
  source: true,
});

setTimeout(() => setOptions({
  name: 'REACT MADE WITH',
  url: 'https://github.com/jaebradley/react-made-with',
  showAddonPanel: true,
  addonPanelInRight: true,
}), 1000);

function loadStories() {
  require('../src/MadeWith/MadeWith.stories.js');
  require('../src/Maker/Maker.stories.js');
}

configure(loadStories, module);
