module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
  ],
  features: {
    postcss: false,
  },
  framework: "@storybook/react",
  core: {
    builder: "webpack4",
  },
  /* env: () => ({
    EXAMPLEVAR: "MY_SUPER_DUPER_SECRET",
    ANOTHERVAR: "ANOTHER_VAR",
  }), */

  // destructure the env vars from the file
  /* env: ({ STORYBOOK_BOPO }) => {
    return {
      EXAMPLEVAR: "MY_SUPER_DUPER_SECRET",
      ANOTHERVAR: "ANOTHER_VAR",
      BOPO: STORYBOOK_BOPO,
    };
  }, */
  env: (config) => ({
    ...config,
    EXAMPLEVAR: "MY_SUPER_DUPER_SECRET",
    ANOTHERVAR: "ANOTHER_VAR",
  }),
};
