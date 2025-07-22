<script lang='ts'>
	import Button from '$lib/Button.svelte';
	let { 
		isButton = true,
		isReverse = true
	} : {
		isButton : boolean
		isReverse : boolean
	} = $props()
</script>

<div class:lg:flex-row-reverse={isReverse} class='py-[24px] lg:w-[1180px] w-[328px] flex lg:flex-row flex-col lg:gap-[64px] gap-[24px] items-center'>
	<img src='image.png' alt='' class='lg:w-1/2 w-full rounded-[20px] lg:aspect-auto aspect-4/3 object-cover'>
	<div class='lg:w-1/2 w-full flex flex-col gap-[16px] -order-1'>
		<span class='flex flex-col gap-[12px]'>
			<h1 class='font-[500] lg:text-[36px] text-[24px]'>Heading</h1>
			<p class='lg:text-[20px] text-[16px]'>Short Discription</p>
		</span>
		<div class='{isButton ? isReverse ? 'lg:flex hidden' : 'flex' : 'hidden'}'>
			<Button />
		</div>
	</div>
	<div class='{isReverse && isButton ? 'lg:hidden flex w-full' : 'hidden'}'>
		<Button />
	</div>
</div>