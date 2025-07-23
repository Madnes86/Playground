<script lang='ts'>
    import type { Snippet } from 'svelte';

    let { 
        cards, 
        children 
    } : { 
        cards: {title: string, description: string, imageUrl: string}[]
        children : Snippet
    } = $props();

</script>

<div class='flex flex-col lg:gap-6 gap-4'>
    {@render children()}
    <div class='flex lg:flex-row flex-col lg:gap-5 gap-4'>
        {#each cards as {title, description, imageUrl}, index}
            <div class='lg:w-95 w-82 h-67 pl-5 pt-5 grid grid-rows-[auto_1fr] gap-[10px] rounded-[20px] bg-[#F5F7F9]'>
                <div class='w-[252px] flex flex-col gap-3'>
                    <h3 class='text-[20px] font-[500]'>{title}</h3>
                    <p class='text-[16px]'>{description}</p>
                </div>
                <div class='min-h-full flex justify-between items-end'>
                    <h1 class='font-[500] text-[40px] text-[#EDF1F4]'>{index + 1}</h1>
                    <img src={imageUrl} alt='' class='max-w-3/4 h-full rounded-br-[20px]'>
                </div>
            </div>
        {/each}
    </div>
</div>