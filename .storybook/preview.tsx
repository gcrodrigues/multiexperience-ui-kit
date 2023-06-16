import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from '../packages/core'
import './styles.css'
import '../packages/core/src/styles/global'


const withProvider = (
	Story: React.ComponentType<any>,
	context: { args: any },
) => {
	return (
		<ThemeProvider>
			<Story {...context.args} />
		</ThemeProvider>
	)
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
	decorators: [withProvider]
};

export default preview;
