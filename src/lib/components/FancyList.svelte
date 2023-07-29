<script lang="ts">
    export let items: string[] = []
</script>
<ul>
    {#each items as item}
        <li>
            <slot name="item" prop={item}/>
        </li>
    {/each}
</ul>

<footer>
    <slot name="footer" prop={'2020'}/>
</footer>

