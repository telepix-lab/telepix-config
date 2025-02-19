import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginReactRefresh from "eslint-plugin-react-refresh";
import eslintPluginTailwindcss from "eslint-plugin-tailwindcss";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,

  // typescript config
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // prettier config
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  {
    rules: {
      /* prettier 설정 경고 처리 */
      "prettier/prettier": "warn",
    },
  },

  // tailwindcss config
  eslintPluginTailwindcss.configs["flat/recommended"],
  {
    rules: {
      "tailwindcss/no-custom-classname": "warn",
      "tailwindcss/enforces-shorthand": "warn",
      "tailwindcss/classnames-order": "warn",
    },
  },

  // react config
  eslintPluginReact.configs.flat.recommended,
  eslintPluginReactRefresh.configs.recommended,
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    plugins: {
      "react-hooks": eslintPluginReactHooks,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      ...eslintPluginReactHooks.configs.recommended.rules,
    },
  },

  // default ignore config
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      "build/**",
      "coverage/**",
      "**/*.test.ts",
      "**/*.test.tsx",
      "eslint.config.mjs",
      "example/**",
    ],
  }
);
