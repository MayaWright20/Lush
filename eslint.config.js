const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");
const reactNativePlugin = require("eslint-plugin-react-native");

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,

  {
    plugins: {
      "react-native": reactNativePlugin,
    },
    rules: {
      "react-native/sort-styles": ["error", "asc", { ignoreClassNames: false }],
    },
    ignores: ["dist/*"],
  },
]);
