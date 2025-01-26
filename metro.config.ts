import { getDefaultConfig } from "expo/metro-config";

const defaultConfig = getDefaultConfig(__dirname);
const config = {
  ...defaultConfig,
  resolver: {
    ...(defaultConfig.resolver ?? {}),
    sourceExts: [...(defaultConfig.resolver?.sourceExts ?? []), "sql"],
  },
};

export default config;
