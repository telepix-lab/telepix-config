import telepixConfig from "@telepix-lab/eslint-config";
import tseslint from "typescript-eslint";

export default tseslint.config(telepixConfig, {
  languageOptions: {
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
  settings: {
    react: {
      version: "19.0.0",
    },
  },
});
