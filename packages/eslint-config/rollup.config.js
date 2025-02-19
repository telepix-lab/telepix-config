import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import nodeResolve from "@rollup/plugin-node-resolve";

export default {
  input: "index.mjs",
  output: {
    dir: "dist",
    format: "cjs",
    sourcemap: true,
    preserveModules: true,
    preserveModulesRoot: ".",
    exports: "named",
  },
  plugins: [
    commonjs(),
    nodeResolve({
      preferBuiltins: true,
    }),
    json(),
  ],
};
