const rules = {
  strict: [ "error", "global" ],
  quotes: [ "error", "double", { allowTemplateLiterals: true } ],
  semi: [ "error", "always" ],
  curly: [ "error", "all" ],
  "dot-notation": [ "error", { allowKeywords: true } ],
  "no-multi-spaces": [
    "error",
    { exceptions: { Property: false }, ignoreEOLComments: false },
  ],
  "no-restricted-syntax": "off",
  "no-plusplus": [ "error", { allowForLoopAfterthoughts: true } ],
  "no-await-in-loop": "off",
  "no-param-reassign": "off",
  "no-loop-func": "off",
  "no-console": [ "error", { allow: [ "info", "warn", "error" ] } ],
  "import/no-extraneous-dependencies": [ "error", { devDependencies: true } ],
  "brace-style": [ "error", "1tbs", { allowSingleLine: true } ],
  indent: [ "error", 2 ],
  "array-bracket-spacing": [ "error", "always", { objectsInArrays: true } ],
  "padding-line-between-statements": [
    "error",
    { blankLine: "always", prev: "*", next: "return" },
    { blankLine: "always", prev: [ "const", "let", "var" ], next: "*" },
    { blankLine: "any", prev: [ "const", "let", "var" ], next: [ "const", "let", "var" ] }
  ],
  "object-curly-spacing": [ "error", "always" ],
  "comma-dangle": [ "error", "only-multiline" ],
  "comma-spacing": [ "error", { before: false, after: true } ],
  "array-bracket-newline": [ "error", { multiline: true } ],
  "function-paren-newline": [ "error", "consistent" ],
  "object-curly-newline": [ "error", { multiline: true } ],
  "eol-last": [ "error", "always" ],
  "prefer-const": "error",
  "no-var": "error",
  "space-before-function-paren": [
    "error",
    { anonymous: "always", named: "never", asyncArrow: "always" },
  ],
  "multiline-comment-style": [ "error", "starred-block" ],
  "lines-around-comment": [
    "error",
    {
      beforeBlockComment: true,
      afterBlockComment: false,
      beforeLineComment: true,
      afterLineComment: false,
    },
  ],
  "space-before-blocks": [ "error", "always" ],
  "keyword-spacing": [ "error", { before: true, after: true } ],
  "arrow-spacing": [ "error", { before: true, after: true } ],
  "no-self-assign": [ "error", { props: true } ],
  "space-infix-ops": [ "error", { int32Hint: false } ],
  "import/extensions": [
    "error",
    "ignorePackages",
    {
      js: "never",
      jsx: "never",
      ts: "never",
      tsx: "never",
    },
  ],
  "no-underscore-dangle": "off",
};
  
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [ "airbnb-base", "prettier" ],
  parserOptions: { ecmaVersion: 11 },
  ignorePatterns: [ "dist", "build" ],
  rules,
  overrides: [
  
    
    // Portal User Interface (Vue.JS)
    {
      files: [ "./**/PortalUserInterface/**/*.vue" ],
      env: { node: true },
      extends: [ "plugin:vue/essential", "airbnb-base", "@vue/prettier" ],
      parserOptions: { parser: "babel-eslint" },
      rules: {
        "no-restricted-syntax": "off",
        "no-param-reassign": "off",
        "vue/valid-v-slot": "off",
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "prettier/prettier": [ "error", { htmlWhitespaceSensitivity: "ignore" } ],
        "padding-line-between-statements": [
          "error",
          { blankLine: "always", prev: "*", next: "return" },
          { blankLine: "always", prev: [ "const", "let", "var" ], next: "*" },
          { blankLine: "any", prev: [ "const", "let", "var" ], next: [ "const", "let", "var" ] }
        ],
      },
      settings: {
        "import/resolver": {
          alias: {
            map: [ [ "@", "./PortalUserInterface/src" ] ],
            extensions: [ ".js", ".vue" ],
          },
        },
      },
    },
  ],
};
