import {
  addParameters
} from '@storybook/react';
import {
  setConsoleOptions
} from '@storybook/addon-console';

addParameters({
  options: {
    /**
     * display the top-level grouping as a "root" in the sidebar
     * @type {Boolean}
     */
    showRoots: false,
  },
});

setConsoleOptions({
  panelExclude: [],
});