import type { StorybookConfig } from '@storybook/nextjs';
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const { merge } = require('webpack-merge');

const config: StorybookConfig = {
  stories: ['../components/elemets/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  staticDirs: ['../public'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) =>
    merge(config, {
      plugins: [new VanillaExtractPlugin()],
    }),
};
export default config;
