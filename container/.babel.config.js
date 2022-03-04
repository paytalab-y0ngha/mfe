module.exports = {
  presets: [
    ["@babel/preset-env", { modules: false }],
    "@babel/preset-typescript",
    "@babel/preset-react",
  ],
  env: {
    production: {
      only: ["src"],
      plugins: [
        ["transform-react-remove-prop-types", { removeImport: true }],
        "@babel/plugin-transform-react-inline-elements",
        "@babel/plugin-transform-react-constant-elements",
      ],
    },
  },
};
