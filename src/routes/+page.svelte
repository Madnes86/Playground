<script lang='ts'>
	let { 
		textPositionX = 'left' 
	} : {
		textPositionX : string
	} = $props()
</script>

<div class='py-[24px] w-[1180px] border flex gap-[64px] items-center'>
	<img src='image.png' alt='' class='w-1/2 rounded-[20px]'>
	<div class='w-[calc(50%-64px)] flex flex-col gap-[16px]'>
		<span class='flex flex-col gap-[12px]'>
			<h1 class='font-[500] text-[36px]'>Heading</h1>
			<p class='text-[20px]'>Short Discription</p>
		</span>
		<button class='w-fit px-[24px] py-[16px] rounded-[8px] font-[500] text-[16px] text-white bg-[#8A24F3]'>Button 1</button>
	</div>
</div>