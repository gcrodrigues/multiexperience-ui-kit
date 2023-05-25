import React from "react";
import type { Preview } from "@storybook/react";
import MultiexperienceProvider from '../packages/multiexperience-provider/MultiexperienceContext'
import '../packages/palette/styles.css'
import './styles.css'


const withProvider = (
	Story: React.ComponentType<any>,
	context: { args: any },
) => {
	return (
		<MultiexperienceProvider>
			<Story {...context.args} />
		</MultiexperienceProvider>
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
