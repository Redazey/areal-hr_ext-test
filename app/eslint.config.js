import jsdoc from "eslint-plugin-jsdoc";

export default [
  {
    files: ["**/*.vue"],
    plugins: {
      jsdoc: jsdoc,
    },
    rules: {
      "jsdoc/require-description": "error",
      "jsdoc/check-values": "error",
    },
  },
];