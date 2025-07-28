<script lang='ts'>
	import Block1 from '$lib/Block1.svelte';
	import Block3 from '$lib/Block3.svelte';

	const blocks : { title: string, description: string, imageUrl: string}[] = [
        { title: 'Sign up or log in', description: 'Log in to an existing MTrading account or sign up', imageUrl: 'card-2.png' },
        { title: 'Make a deposit', description: 'Deposit funds and choose the bonus size – up to 50%', imageUrl: 'image.png' },
        { title: 'Trade with bonus', description: 'The bonus lands to your account automatically as soon as money is deposited. Enjoy your trading!', imageUrl: 'card-2-2.png' },
    ];
	const button = {label: "Button", href: "#"};

</script>

<!-- Block 1 -->
<Block1 title={blocks[0].title} />

<!-- Block 3 -->
<Block3 title='title' blocks={blocks}/>