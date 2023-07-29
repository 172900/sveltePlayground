<script lang="ts">
    export let product: Product
    import Card from "./Card.svelte";

</script>
<Card text={product.title} />
