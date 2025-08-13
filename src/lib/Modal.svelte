<script lang='ts'>
    import Flex from '$lib/Flex.svelte';
    import Button from '$lib/Button.svelte';
	import type { Snippet } from "svelte";

    let {
        isShow = $bindable(true),
        isDisabled = false,
        isLoading = false,
        isCross = true,
        isOverlay = true,
        position = 'center',
        onclose,
        header,
        children,
        footer
    } : {
        isShow?:     boolean
        isDisabled?: boolean
        isLoading?:  boolean
        isCross?:    boolean
        isOverlay?:  boolean
        position?:   'center' | 'top'
        onclose?:    Function
        header?:     Snippet
        children:    Snippet
        footer?:     Snippet
    } = $props();

    function close(): void {
        if (isDisabled || isLoading) return
        onclose?.()
        isShow = false
    }
    function keyDown(e: KeyboardEvent): void {
        e.key == 'Escape' && close()
    }
</script>

<svelte:window on:keydown={keyDown}/>

{#if isShow}
    <!-- Какие значения лучше использовать % | vw / vh? -->
    {#if isOverlay} 
        <button onclick={close} aria-label='wrapper' class='fixed top-0 left-0 size-full z-3 bg-black/20'></button>
    {/if}
    <div class:shadow-xl={!isOverlay} class='flex flex-col absolute {position} w-fit bg-white max-200 p-4 gap-2 z-3 rounded-2xl'>
        <Flex class='w-full'>
            {@render header?.()}
            {#if isCross}
                {#if isLoading}
                    <svg width="24" height="24" fill="hsl(228, 97%, 42%)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"><animateTransform attributeName="transform" type="rotate" dur="0.75s" values="0 12 12;360 12 12" repeatCount="indefinite"/></path></svg>
                {:else}
                    <button onclick={close} aria-label='wrapper'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>
                {/if}
            {/if}
        </Flex>
        <Flex class='w-full'>
            {@render children()}
        </Flex>
        <Flex class='w-full'>
            {@render footer?.()}
        </Flex>
    </div>
{/if} 

<style>
    @reference "@src/app.css";
    .top { @apply top-5 left-1/2 -translate-x-1/2;}
    .center { @apply top-1/2 left-1/2 -translate-1/2;}
</style>