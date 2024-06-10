import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import typescriptParser from "@typescript-eslint/parser";

// common
import stylistic from "@stylistic/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import unusedImportsPlugin from "eslint-plugin-unused-imports";

// astro
import eslintPluginAstro from "eslint-plugin-astro";
import astroEslintParser from "astro-eslint-parser";

// jsx
import stylisticPluginJSX from "@stylistic/eslint-plugin-jsx";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  js.configs.recommended,
  ...eslintPluginAstro.configs["flat/recommended"],
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["src/pages/*.astro"],
    languageOptions: {
      parser: astroEslintParser,
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
    rules: {
      "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    },
  },
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      "@stylistic/jsx": stylisticPluginJSX,
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": jsxA11yPlugin,
    },
    rules: {
      ...stylisticPluginJSX.configs["all-flat"].rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...jsxA11yPlugin.configs.recommended.rules,
    },
  },
  {
    files: ["src/**/*.{ts,tsx,astro}"],
    plugins: {
      import: importPlugin,
      "unused-imports": unusedImportsPlugin,
      "@stylistic": stylistic,
    },
    rules: {
      "@stylistic/ts/no-unused-vars": "off",
      "import/no-duplicates": "error",
      "import/order": [
        "error",
        {
          "newlines-between": "never",
          pathGroups: [
            {
              pattern: "@/**",
              group: "external",
              position: "after",
            },
          ],
        },
      ],
      "import/no-named-as-default": "off",
      "import/no-restricted-paths": ["error"],
      "import/extensions": [
        "error",
        "never",
        {
          ignorePackages: true,
          pattern: { css: "always", json: "always", svg: "always" },
        },
      ],
      "import/no-internal-modules": [
        "warn",
        {
          allow: ["@*/**"],
        },
      ],
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  {
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      ...stylistic.configs["recommended-flat"].rules,
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": ["error", "always"],
      // TODO: off のものを調べて極力 Error にする
      "@stylistic/no-tabs": "off",
      "@stylistic/jsx-indent": "off",
      "@stylistic/no-trailing-spaces": "off",
      "@stylistic/no-multiple-empty-lines": "off",
      "@stylistic/object-curly-spacing": "off",
    },
  },
];
