const { override, fixBabelImports, addWebpackAlias, addLessLoader, adjustStyleLoaders } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@/pages": path.resolve(__dirname, "src/pages"),
    "@/components": path.resolve(__dirname, "src/components"),
    "@/http": path.resolve(__dirname, "src/http"),
  }),

  fixBabelImports("import", {
    libraryName: "antd",
    style: true, //或者true, true代表运用less
  }),
  addLessLoader({
    lessOptions: {
      modifyVars: { "@primary-color": "#9775fa" },
      javascriptEnabled: true,
      localIdentName: '[local]--[hash:base64:5]'
    },
  }),
  // !!! Remember to put adjustStyleLoaders after addLessLoader in override chain.
  // https://github.com/arackaf/customize-cra/issues/315#issuecomment-1017081592
  adjustStyleLoaders(({ use: [, , postcss] }) => {
    const postcssOptions = postcss.options;
    postcss.options = { postcssOptions };
  })
);
