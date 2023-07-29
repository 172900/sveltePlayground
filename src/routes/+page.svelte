<script>
  import Card from "$lib/components/Card.svelte";
  export let foo = 1
  function handleClick() {
    foo += 1
  }
  $: {
    console.log(foo)
  }
</script>

<h1>하하 {foo}</h1>
<Card text={'dd'}>
  <h1>아아</h1>
</Card>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> 끄아앙</p>


<button on:click={handleClick}>
  hi
</button>