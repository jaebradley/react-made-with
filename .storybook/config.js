import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { setDefaults } from '@storybook/addon-info';

setDefaults({
  inline: true,
  header: true,
  source: true,
});

setTimeout(() => setOptions({
  name: 'REACT MADE WITH',
  url: 'https://github.com/jaebradley/react-made-with',
  showDownPanel: true,
  downPanelInRight: true,
}), 1000);

function loadStories() {
  require('../src/MadeWith/MadeWith.stories.js');
  require('../src/Author/Author.stories.js');
}

configure(loadStories, module);
