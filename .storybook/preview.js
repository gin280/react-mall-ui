import { addParameters, addDecorator } from '@storybook/react';
import { setConsoleOptions } from '@storybook/addon-console';
import Layout from './../components/Layout'

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

addDecorator(storyFn => <Layout>{storyFn()}</Layout>);