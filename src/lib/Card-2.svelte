<script lang='ts'>
    let {
        heading,
        description,
        img,
        index
    } : {
        heading : string
        description : string
        img : string,
        index : number
    } = $props();
</script>

<div class='lg:w-95 w-82 h-67 pl-5 pt-5 grid grid-rows-[auto_1fr] gap-[10px] rounded-[20px] bg-[#F5F7F9]'>
    <div class='w-[252px] flex flex-col gap-3'>
        <h3 class='text-[20px] font-[500]'>{heading}</h3>
        <p class='text-[16px]'>{description}</p>
    </div>
    <div class='min-h-full flex justify-between items-end'>
        <h1 class='font-[500] text-[40px] text-[#EDF1F4]'>{index}</h1>
        <img src={img} alt='' class='max-w-3/4 h-full rounded-br-[20px]'>
    </div>
</div>