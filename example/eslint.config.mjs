import telepixConfig from "@telepix-lab/eslint-config";
import tseslint from "typescript-eslint";

export default tseslint.config(telepixConfig, {
  settings: {
    react: {
      version: "19.0.0",
    },
  },
});
