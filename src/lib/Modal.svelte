<script lang='ts'>
    import Flex from '$lib/Flex.svelte';
    import Button from '$lib/Button.svelte';
	import type { Snippet } from "svelte";

    let {
        isShow = $bindable(true),
        header,
        children,
        footer
    } : {
        isShow?: boolean,
        header?: Snippet,
        children: Snippet,
        footer?: Snippet
    } = $props();

    const close = () => isShow = false
</script>

{#if isShow}
    <Button onclick={close} class='fixed top-0 left-0 w-full h-full z-2 bg-black/20'>
        <Flex col class='absolute left-1/2 top-1/2 w-fit -translate-1/2 bg-red-400 text-white p-4 z-3 rounded-2xl'>
            <Flex class='w-full'>
                {@render header?.()}
                <Button onclick={close}>&Cross;</Button>
            </Flex>
            {@render children()}
            {@render footer?.()}
        </Flex>
    </Button>
{/if} 