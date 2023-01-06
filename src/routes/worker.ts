import { expose, proxy } from 'comlink';

async function init() {
  // load async resources for initialization...
  const wasmModule = await import('@sample/hello_wasm');

  return proxy({
    hello: () => 'World',
    addOne: wasmModule.addOne,
  });
}

expose(init);
type Init = typeof init;
export default Init;
