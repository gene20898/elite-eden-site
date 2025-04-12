import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {}
});

const eslintConfig = [
  ...compat.config({
    extends: ["eslint:recommended", "next/core-web-vitals", "next/typescript", "prettier"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          "vars": "all",
          "varsIgnorePattern": "^_",
          "args": "after-used",
          "argsIgnorePattern": "^_"
        }
      ],
      "@next/next/no-html-link-for-pages": "off",
      "react/jsx-sort-props": [
        "warn",
        {
          "callbacksLast": true,
          "shorthandLast": true,
          "ignoreCase": false,
          "multiline": "last",
          "reservedFirst": ["key", "ref"]
        }
      ]
    },
    settings: {
      next: {
        rootDir: ["src/*"],
      },
    },
  }),
];

export default eslintConfig;
