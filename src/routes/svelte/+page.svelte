<script>
    import DispatcherComponent from "$lib/components/DispatcherComponent.svelte";
import { afterUpdate, beforeUpdate, onMount } from "svelte";
    let state  = 0
    onMount(() => {
        console.log("mount")
        return () => { console.log("unMount")}
    })
    beforeUpdate(() => {
        console.log(state)

        console.log('the component is about to update');
    });
    afterUpdate(() => {
        console.log('the component just updated');
        console.log(state)
    });
</script>

<div>
    hello
</div>

<button on:click={() => { state += 1}}>
    {state}
</button>

<DispatcherComponent on:notify={(event) => { console.log(event.detail)}} />