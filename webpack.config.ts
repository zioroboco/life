import * as HtmlWebpackPlugin from "html-webpack-plugin"
import * as path from "path"
import { Configuration } from "webpack"
import { name as title } from "./package.json"

const TreatPlugin = require("treat/webpack-plugin")
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin")

const config: Configuration = {
  mode: "development",
  entry: "./frontend",
  resolve: {
    extensions: [".ts", ".js", ".json", ".wasm"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
            plugins: ["babel-plugin-treat"],
          },
        },
      },
    ],
  },
  plugins: [
    new TreatPlugin({ test: /.css.ts$/ }),
    new HtmlWebpackPlugin({ title }),
    new WasmPackPlugin({
      crateDirectory: __dirname,
      watchDirectories: ["engine"],
    }),
  ],
}

export default config
