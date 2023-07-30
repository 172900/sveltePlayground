<script>
    import { createEventDispatcher } from "svelte";

    const dispatcher = createEventDispatcher()
</script>

<button  on:click={() => { dispatcher('notify', 'test value')}}>
    testDispatch
</button>