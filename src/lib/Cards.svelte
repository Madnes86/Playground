<script lang='ts'>
    import Card from '$lib/Card-2.svelte';
    const CARDS : { heading: string, description: string, img: string}[] = [
        { heading: 'Sign up or log in', description: 'Log in to an existing MTrading account or sign up', img: 'card-2.png' },
        { heading: 'Make a deposit', description: 'Deposit funds and choose the bonus size – up to 50%', img: 'image.png' },
        { heading: 'Trade with bonus', description: 'The bonus lands to your account automatically as soon as money is deposited. Enjoy your trading!', img: 'card-2-2.png' },
    ]
</script>

<div class='flex flex-col lg:gap-6 gap-4'>
    <h3 class='lg:text-[36px] text-[24px] font-[500] text-[#171E27]'>Heading</h3>
    <div class='flex lg:flex-row flex-col lg:gap-5 gap-4'>
        {#each CARDS as {heading, description, img}, index}
            <Card {heading} {description} {img} index={index + 1}/>
        {/each}
    </div>
</div>