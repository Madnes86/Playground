<script lang='ts'>
	import type { Snippet } from "svelte";

    let {
        col = false,
        children,
        ...rest
    } : {
        col?: boolean
        children: Snippet
        class?: string
    } = $props();
</script>

<div class:flex-col={col} class="flex justify-between items-center {rest.class}">
    {@render children?.()}
</div>