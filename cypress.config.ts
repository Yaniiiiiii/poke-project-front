/* eslint @typescript-eslint/no-var-requires: "off" */

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '1o8rjz',
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
      webpackConfig: {
        mode: "development",
        devtool: false,
        module: {
          rules: [
            {
              "@typescript-eslint/no-var-requires": 0,

              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ["@babel/preset-env", "@babel/preset-react"],
                  plugins: ["istanbul"],
                },
              },
            },
          ],
        },
      },
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
