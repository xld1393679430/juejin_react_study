module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "refs": {
    "design-system": {
      title: "ld_xu Online`s Storybook",
      url: "https://635b759b38b662c9148cb6fe-qkoukcjyhr.chromatic.com",
      expanded: false,
    }
  }
}