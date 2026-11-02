# Working TypeScript Decorators Examples

Tested with Node.js 22.16.0 and TypeScript 5.8.3.

```bash
npm install
npm test
```

This runs and checks the outputs of all six **legacy** TypeScript examples and one **standard TypeScript 5+** example.

To run any individual lab after building:
```bash
npm run build
node dist/legacy/03-method.js
node dist/standard/01-standard-decorators.js
```

`tsconfig.legacy.json` sets `experimentalDecorators: true` for class, method, property and parameter decorators. `tsconfig.standard.json` sets `experimentalDecorators: false` and uses the standard `(value, context)` decorator form. Do not mix the two signatures in a single file/project without explicitly selecting the intended compilation mode.

Angular labs 6-13 require an Angular application and are provided under `angular/`; see `angular/README.md` for commands. Angular build and browser behavior are **not** verified by the TypeScript-only `npm test`.

The educational explanation, outputs, troubleshooting and questions are in the accompanying `2. TypeScript Decorators - Fixed.md`.
