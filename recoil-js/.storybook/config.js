import { configure } from '@storybook/react';

const components = require.context('@components', true, /\.stories\.js$/);
const containers = require.context('@containers', true, /\.stories\.js$/);

function loadStories() {
	components.keys().forEach((filename) => components(filename));
	containers.keys().forEach((filename) => containers(filename));
}

configure(loadStories, module);
