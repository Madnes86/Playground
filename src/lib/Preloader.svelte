<script lang='ts'>
    import Flex from '$lib/Flex.svelte';

    let {
        isShow = true,
        isActive = true,
        ...rest
    } : {
        isShow?:   boolean
        isActive?: boolean
        class?:    string
    } = $props();

</script>

{#if isShow}
    <Flex col class='w-full items-start {rest.class}'>
        {#each {length: 3}, i}
            <div class:animate-pulse={isActive} class='{i == 2 ? 'w-2/3' : 'w-full'} line'></div>
        {/each}
    </Flex>
{/if}


<style>
    @reference "@src/app.css";
    .line { @apply rounded-sm bg-gray-200 h-4; }
</style>