<script lang="ts">
  import { onMount } from 'svelte';
  import { wrap } from "comlink";
  import type WorkerInit from "./worker"

  onMount(async () => {
    const wasmModule = await import('@sample/hello_wasm');
    console.log(wasmModule.addOne(1));

    const worker = new Worker(new URL('./worker.ts', import.meta.url), {
      type: 'module',
    });
    const init = wrap<WorkerInit>(worker);
    const instance = await init();
    console.log(`${await instance.addOne(2)}`);

  });
</script>

<main>
  Check Console
</main>
