<div>
    <slot name="header"/>

    {#if $$slots.footer}
        <hr/>
        <slot name="footer"/>
    {/if}
</div>