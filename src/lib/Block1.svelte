<script lang='ts'>

	type IButton = {
		label: string;
		href?: string;
	}

	let { 
		title,
		description,
		button,
		isReverse = false
	} : {
		title?  : string;
		description? : string;
		button? : IButton;
		isReverse? : boolean;
	} = $props();
</script>

{#snippet buttonSnippet(button: IButton)}
	<a href={button?.href} class='lg:w-fit w-full px-6 py-4 rounded-[8px] font-medium text-base text-white bg-[#8A24F3]'>
		{button.label}
	</a>
{/snippet}

<div class:lg:flex-row-reverse={isReverse} class='py-6 w-full flex lg:flex-row flex-col lg:gap-16 gap-6 items-center'>
	<img src='image.png' alt='' class='lg:w-1/2 w-full rounded-3xl lg:aspect-auto aspect-4/3 object-cover'>
	<div class='lg:w-1/2 w-full flex flex-col gap-[16px] -order-1'>
		<div class='flex flex-col gap-3'>
			<h1 class='font-[500] lg:text-4xl text-2xl'>
				{@html title}
			</h1>
			{#if description}
				<div class='lg:text- text-[16px]'>
					{@html description}
				</div>
			{/if}
		</div>
		<div class='{isReverse ? 'lg:flex hidden' : 'flex'}'>
			{#if button}
				{@render buttonSnippet(button)}
			{/if}
		</div>
	</div>
	<div class='{isReverse ? 'lg:hidden flex w-full' : 'hidden'}'>
		{#if button}
			{@render buttonSnippet(button)}
		{/if}
	</div>
</div>