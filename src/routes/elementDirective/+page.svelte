<script>
  import Toggle from "$lib/components/Toggle.svelte";

  let counter = 0;
  let num = 0
  function increment() {
    counter = counter + 1;
  }

  /** @param {MouseEvent} event */
  function track(event) {
    console.log(num)
  }

  /** @param {number} value */
  function 소리지르기(value) {
    console.log(value)
  }
  $:소리지르기(num) 
</script>

<input type="number" bind:value={num} />
<button on:click={increment} on:click={track} on:click={() => { num+= 1}}>Click me!</button>
<Toggle />