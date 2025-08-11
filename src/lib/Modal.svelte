<script lang='ts'>
    import Flex from '$lib/Flex.svelte';
    import Button from '$lib/Button.svelte';
	import type { Snippet } from "svelte";

    let {
        isShow = $bindable(true),
        disabled = false,
        closeable,
        header,
        children,
        footer
    } : {
        isShow?: boolean,
        disabled?: boolean,
        closeable?: Function,
        header?: Snippet,
        children: Snippet,
        footer?: Snippet
    } = $props();

    function close() {
        if (disabled) {
            return
        } else {
            closeable
            // isShow = false
        }
    }
</script>

{#if isShow}
    <!-- Какие значения лучше использовать % | vw / vh? -->
    <Button onclick={close} class='fixed top-0 left-0 size-full bg-black/20'>
        .
    </Button>
    <Flex col class='absolute left-1/2 top-1/2 w-fit -translate-1/2 bg-white max-w-200 p-4 gap-2 z-3 rounded-2xl'>
        <Flex class='w-full'>
            {@render header?.()}
            <Button onclick={close}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </Button>
        </Flex>
        <Flex class='w-full'>
            {@render children()}
        </Flex>
        <Flex class='w-full'>
            {@render footer?.()}
        </Flex>
    </Flex>
{/if} 