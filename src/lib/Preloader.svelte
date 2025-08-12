<script lang='ts'>
    import Flex from '$lib/Flex.svelte';

    let {
        isShow = true,
        isActive,
        width = '50'
    } : {
        isShow?:   boolean
        isActive?: boolean
        width?:    string
    } = $props();

</script>
<!-- TODO: Доделать width -->
{#if isShow}
    <Flex col class='w-{width} items-start'>
        {#each {length: 3}, i}
            <div class:animate-pulse={isActive} class='{i == 2 ? 'w-2/3' : 'w-full'} line'></div>
        {/each}
    </Flex>
{/if}


<style>
    @reference "@src/app.css";
    .line { @apply rounded-sm bg-gray-200 h-4; }
</style>