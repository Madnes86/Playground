<script lang='ts'>

    type IBlock = {
        title: string;
        description?: string;
        imageUrl?: string;
    };

    let { 
        title,
        blocks,
        ...other
    } : {
        title?: string;
        blocks: IBlock[];
        class?: string;
    } = $props();

</script>

<div class='flex flex-col lg:gap-6 gap-4 {other?.class}'>
    <h3 class='lg:text-4xl text-2xl font-medium text-[#171E27]'>{@html title}</h3>
    <div class='grid grid-cols-1 lg:grid-cols-3 lg:gap-5 gap-4'>
        {#each blocks as block, index}
            <div class='relative flex flex-col gap-2.5 justify-between rounded-3xl bg-[#F5F7F9]'>
                <div class='pl-5 pt-5 flex flex-col gap-3'>
                    <h3 class='text-2xl font-medium'>{@html block.title}</h3>
                    <div class='text-base'>{@html block.description}</div>
                </div>
                <div class='flex justify-end items-end rounded-b-3xl overflow-hidden'>
                    <h1 class='absolute left-5 bottom-1 font-medium text-4xl text-[#EDF1F4]'>{index + 1}</h1>
                    <img src={block.imageUrl} alt=''>
                </div>
            </div>
        {/each}
    </div>
</div>