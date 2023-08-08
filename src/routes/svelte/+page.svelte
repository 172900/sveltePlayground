<script>
    import DispatcherComponent from "$lib/components/DispatcherComponent.svelte";
    import One from "$lib/components/count/One.svelte";
    import Three from "$lib/components/count/Three.svelte";
    import Two from "$lib/components/count/Two.svelte";
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
    const options = [
    { count: 'one',   component: One   },
    { count: 'two', component: Two },
    { count: 'three',  component: Three  },
    ];
    $: statee = options[state]
</script>

<div>
    hello {state}
</div>

<button on:click={() => { state += 1}}>
    {state}
</button>

<svelte:component this={statee.component} />



<DispatcherComponent on:notify={(event) => { console.log(event.detail)}} />