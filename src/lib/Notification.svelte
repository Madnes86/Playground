<script lang='ts'>
	import Flex from '$lib/Flex.svelte';
	import { onMount, type Snippet } from 'svelte';
	import { fade } from 'svelte/transition';

    type Size = 'sm' | 'lg' | 'xl'

    // isHover animation:slide description variant position bufer
    let {
        isShow = true,
        timer = 3000,
        title,
        children,
        rounded = 'lg',
        onclose
    } : {
        isShow?:   boolean
        timer?:    number
        title?:    Snippet
        children?: Snippet
        rounded?:  Size
        onclose?:  Function
    } = $props();

    onMount(() => {
        setTimeout(() => {
            close()
        }, timer);
    });

    function close() {
        onclose?.()
        isShow = false
    }

</script>

{#if isShow}
    <div transition:fade class='notification rounded-{rounded}' >
        <Flex class='justify-start'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            {@render title?.()}
        </Flex>
        {@render children?.()}
    </div>
{/if}

<style>
    @reference '@src/app.css';
    .notification { @apply flex flex-col gap-2 p-4 min-w-60 fixed top-5 right-5 shadow-2xl; }
</style>