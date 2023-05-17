# fenris-date-tool
Date tool to convert to and from Locale times to UTC

# General usage
Currently only works with Danish time.

```JavaScript

```

# How to publish
```Console
npm run clean
npm run build
npm run build:types
npm publish
```

# How it was build
This is created and maintained with with rollup, typedocs (in theory), @microsoft/api-extractor

# How it was build
This is created and maintained with with rollup, typedocs (in theory), @microsoft/api-extractor

start:
```Console
npm install --save-dev \
            eslint \
            typescript \
            tslib \
            ts-node \
            rollup \
            @rollup/plugin-commonjs \
            @rollup/plugin-node-resolve \
            @rollup/plugin-typescript
npm install @microsoft/api-extractor
```

The scripts setup should look like:
```JSON
  "scripts": {
    "dev": "rollup -c -w",
    "build": "rollup -c --bundleConfigAsCjs",
    "prebuild:types": "rimraf ./build",
    "build:types": "tsc -p ./tsconfig.json --outDir build --declaration true && api-extractor run",
    "predocs": "rimraf ./docs",
    "docs": "typedoc src --out docs",
    "clean": "rimraf ./build ./dist ./docs",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

The rollup config should looklike
```JavaScript
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";

export default [
  {
    input: "src/index.ts",
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
    plugins: [
      commonjs(),
      nodeResolve(),
      typescript({ tsconfig: "./tsconfig.json" })],
  },
];
```

The TSconfig should look like:
```JSON
{
  "compilerOptions": {
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "esModuleInterop": true,
    "target": "es6",
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true
  }
}
```