<script lang="ts">
	import type { Snippet } from "svelte";

    let {
        children,
        onclick,
        ...rest
    } : {
        children: Snippet
        onclick?: (e: MouseEvent) => void 
        class?: string
    } = $props();
</script>

<button onclick={onclick} class='click {rest.class}'>
    {@render children()}
</button>

<style>
    /* .primary {
        @apply lg:w-fit w-full px-[24px] py-[16px] rounded-[8px] font-[500] text-[16px] text-white bg-[#8A24F3]
    } */
</style>