# MRE: Path issue with SvelteKit WebWorker + WASM

To run:
```bash
npm install
npm run wasm:build
npm run build
npm run preview
```

Check import path of WASM modules in the Browser Dev Tools Network tab.

For the wasm imported from the `+page.ts` it should be prefixed by `_app/immutable/assets`.
The one imported by the `worker.ts` is served by `assets` and is missing the `cache-control` headers.