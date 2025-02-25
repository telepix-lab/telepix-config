# Installation

```bash
pnpm add -D @telepix-lab/eslint-config
```

# Usage

vite ts-swc template을 기준으로 설명합니다.

```ts
// eslint.config.js
import telepixConfig from "@telepix-lab/eslint-config";
import tseslint from "typescript-eslint";

export default tseslint.config(telepixConfig);
```
