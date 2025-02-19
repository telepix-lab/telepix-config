import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

export default {
  input: "index.mjs",
  output: [
    {
      dir: "dist/esm",
      format: "esm",
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: ".",
    },
    {
      dir: "dist/cjs",
      format: "cjs",
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: ".",
      exports: "auto",
    },
  ],
  plugins: [
    commonjs({
      requireReturnsDefault: "auto",
    }),
    json(),
  ],
};
