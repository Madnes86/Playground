<script lang='ts'>
	import Block1 from '$lib/Card.svelte';
	import Block2 from '$lib/Cards.svelte';
	import Button from '$lib/Button.svelte';

	const cards : { title: string, description: string, imageUrl: string}[] = [
        { title: 'Sign up or log in', description: 'Log in to an existing MTrading account or sign up', imageUrl: 'card-2.png' },
        { title: 'Make a deposit', description: 'Deposit funds and choose the bonus size – up to 50%', imageUrl: 'image.png' },
        { title: 'Trade with bonus', description: 'The bonus lands to your account automatically as soon as money is deposited. Enjoy your trading!', imageUrl: 'card-2-2.png' },
    ];

</script>

<!-- Block 1 -->
<Block1>
	<Button/>
</Block1>

<!-- Block 2 -->
<!-- <Block2 {cards} >
	<h3 class='lg:text-[36px] text-[24px] font-[500] text-[#171E27]'>title</h3>
</Block2> -->