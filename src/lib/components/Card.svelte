<script>
  /** @type {string?} */
  export let text = null
</script>

<div>
  {#if text }
  { text }
  {/if}
  <slot/>
</div>


<style>
  div {
    background: yellowgreen;
    border-radius: 20px;
    padding: 20px;
  }
</style>