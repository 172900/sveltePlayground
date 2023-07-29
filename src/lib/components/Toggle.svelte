<script>
  let active = false
</script>

<button on:click={() => { active = !active}} class:active={active} class:inactive={!active} >
  버튼
</button>

<style>
   .inactive {
    background: black;
    color: white
  }
  .active {
    background: red;
    color: black
  }
</style>