export default {
  input: "index.mjs",
  output: [
    {
      dir: "dist/esm",
      format: "esm",
      sourcemap: true,
      exports: "named",
      preserveModules: true,
      preserveModulesRoot: ".",
    },
    {
      dir: "dist/cjs",
      format: "cjs",
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: ".",
    },
  ],
};
