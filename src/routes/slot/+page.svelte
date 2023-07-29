<script>
    import FancyList from "$lib/components/FancyList.svelte";
import Widget from "$lib/components/Widget.svelte";
    let items = ['1', '2', '3', '4',]
</script>
<Widget>
    <h1 slot="header" >헤더</h1>
    <svelte:fragment slot="footer">
        <h1>one</h1>
        <h2>two</h2>
    </svelte:fragment>
</Widget>

<FancyList {items}>
    <div slot="item" let:prop>{prop}</div>
    <p slot="footer" let:prop>Copyright (c) {prop} svelte</p>
</FancyList>
