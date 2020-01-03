import * as HtmlWebpackPlugin from "html-webpack-plugin"
import { Configuration } from "webpack"
import { name as title } from "./package.json"

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
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ title }),
    new WasmPackPlugin({ crateDirectory: __dirname }),
  ],
}

export default config
