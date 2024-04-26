import type { Preview } from "@storybook/react";
import theme from "./theme";

import { themes } from '@storybook/theming';

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.light,
    },
  },
};

export default preview;