<script lang="ts">
	import type { Snippet } from "svelte";

    // TODO: Где мне хранить типы?
    type Variant = 'primary' | 'outline' | 'filled' | 'link'
    type Size = 'sm' | 'lg' | 'xl'

    let {
        children,
        onclick,
        href,
        variant = 'outline',
        rounded = 'sm',
        ...rest
    } : {
        children: Snippet
        // TODO: проверить onclick
        onclick?: (e: MouseEvent) => void 
        href?:    string
        variant?: Variant
        rounded?: Size
        class?:   string
    } = $props();
</script>

{#if href}
    <a {href} class='click button {variant} rounded-{rounded} {rest.class}'>
        {@render children()}
    </a>
{:else}
    <button {onclick} class='click button {variant} rounded-{rounded} {rest.class}'>
        {@render children()}
    </button>
{/if}


<style>
    @reference "@src/app.css";
    .button  { @apply px-3 py-1; }
    .primary { @apply lg:w-fit w-full px-[24px] py-[16px] rounded-[8px] font-[500] text-[16px] text-white bg-[#8A24F3]; }
    /* TODO:Проверить на работоспособность */
    .outline { @apply bg-gray-50; }
    .filled  { @apply bg-gray-200; }
    .link    { @apply text-blue-400; }

</style>