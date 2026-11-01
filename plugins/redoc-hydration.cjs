const path = require("node:path");

module.exports = function redocHydration() {
  return {
    name: "wppconnect-redoc-hydration",
    configureWebpack(_config, isServer, { currentBundler }) {
      if (isServer) return {};
      const bundler = currentBundler.instance || require("webpack");
      return {
        plugins: [
          new bundler.NormalModuleReplacementPlugin(
            /[\\/]theme[\\/]Redoc[\\/]Styles(?:\.[jt]sx?)?$/,
            path.resolve(__dirname, "../src/components/RedocStyles.tsx"),
          ),
        ],
      };
    },
  };
};
