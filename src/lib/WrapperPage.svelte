<script lang="ts">
	import type { Snippet } from "svelte";

    let {
        children,
        classP,
        ...rest
    } : {
        children: Snippet;
        classP: string;
    } = $props();

</script>


<div class="max-w-[1200px] m-auto w-full flex flex-col p-4 gap-5 {classP}" {...rest}>
    {@render children()}
</div>
