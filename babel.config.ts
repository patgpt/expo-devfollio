import type { ConfigAPI } from "@babel/core";

const config = (api: ConfigAPI) => {
  api.cache.forever();
  return {
    presets: ["babel-preset-expo"],
    plugins: [["inline-import", { extensions: [".sql"] }]],
  };
};

export default config;
