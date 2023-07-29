<script>
  import Product from "$lib/components/Product.svelte";
  import DummyApi from "$lib/service/DummyApi";
  import { fade } from 'svelte/transition';

  let key = 1
</script>

{#key key}
  <div transition:fade>{key}</div>
{/key}

<button on:click={() => key++}> Increment key value </button>

{@debug key}
{#await DummyApi.getDummyProduct()}
  waiting.....
{:then value} 
  <div class={'container'}>
    {#each value as product}
    <div class="item">
      <Product {product}/>
    </div>
    {/each}
  </div>
{:catch error}
  {error}
{/await }


<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .item {
    margin-top: 20px;
  }
</style>