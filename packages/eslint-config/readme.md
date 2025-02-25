# Installation

```bash
pnpm add -D eslint typescript-eslint @telepix-lab/eslint-config
```

# Usage

```ts
// eslint.config.js
import telepixConfig from "@telepix-lab/eslint-config";
import tseslint from "typescript-eslint";

export default tseslint.config(telepixConfig);
```
