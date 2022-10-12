const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addLessLoader,
  adjustStyleLoaders,
  addDecoratorsLegacy,
  useBabelRc,
  addBundleVisualizer,
  addWebpackPlugin,
  addWebpackExternals,
} = require("customize-cra");
const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = override(
  (config) => {
    config.devtool = false; //去掉map文件
    return config;
  },
  addWebpackExternals({
    react: "React",
    "react-dom": "ReactDOM",
  }),
  addDecoratorsLegacy(),
  addWebpackAlias({
    "@/pages": path.resolve(__dirname, "src/pages"),
    "@/components": path.resolve(__dirname, "src/components"),
    "@/imgs": path.resolve(__dirname, "src/static/imgs"),
    "@/http": path.resolve(__dirname, "src/http"),
    "@/package.json": path.resolve(__dirname, "package.json"),
    "@/router": path.resolve(__dirname, "src/router"),
    "@/store": path.resolve(__dirname, "src/store"),
  }),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true, //或者true, true代表运用less
  }),
  addLessLoader({
    lessOptions: {
      modifyVars: { "@primary-color": "#9775fa" },
      javascriptEnabled: true,
      localIdentName: "[local]--[hash:base64:5]",
    },
  }),
  // !!! Remember to put adjustStyleLoaders after addLessLoader in override chain.
  // https://github.com/arackaf/customize-cra/issues/315#issuecomment-1017081592
  adjustStyleLoaders(({ use: [, , postcss] }) => {
    const postcssOptions = postcss.options;
    postcss.options = { postcssOptions };
  }),
  addBundleVisualizer(
    {
      analyzerMode: "static",
      reportFilename: "report.html",
    },
    true
  ),
  addWebpackPlugin(
    new CompressionPlugin({
      filename: "[path][base].gz", // 目标资源名称。[file] 会被替换成原资源。[path] 会被替换成原资源路径，[query] 替换成原查询字符串
      algorithm: "gzip", // 算法
      test: new RegExp("\\.(js|css)$"), // 压缩 js 与 css
      threshold: 10240, // 只处理比这个值大的资源。按字节计算
      minRatio: 0.8, // 只有压缩率比这个值小的资源才会被处理
    })
  ),
  useBabelRc()
);
