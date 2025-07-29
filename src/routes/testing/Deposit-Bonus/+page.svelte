<script lang="ts">
	import { WrapperPage } from '$lib';
	import { slide } from 'svelte/transition';
	// DATA
	const ROW = {
		title: '200% Deposit Bonus*',
		description: 'Make your trading x3 more efficient',
		button: 'Get your bonus',
		link: 'Terms and Conditions',
		linkUrl: '/',
		imageUrl: 'https://mtr-cdn.com/img/web/deposit-bonus/200-speed-logo.webp'
	};
	const BLOCKS = [
		{
			title: 'Automated and instant',
			description: 'Bonus is ready for trading right after deposit is made',
			imageUrl: 'https://mtr-cdn.com/img/web/deposit-bonus/bonus-1.webp'
		},
		{
			title: 'Unlimited Bonus Size',
			description: 'Enjoy trading with extra deposit funds',
			imageUrl: 'https://mtr-cdn.com/img/web/deposit-bonus/bonus-2.webp'
		},
		{
			title: 'Increase Your Margin',
			description: 'Choose your bonus from 25-50-70% or even up to 200%',
			imageUrl: 'https://mtr-cdn.com/img/web/deposit-bonus/bonus-3.webp'
		}
	];
	const TRADES = [
		{
			title: 'Without bonus',
			grath: {
				title: 'Buy 1 lot EUR/USD',
				subtitle: '10 pips profit',
				open: 'open 1.1280',
				close: 'close 1.1290'
			},
			details: [
				{ text: 'Deposited', value: '300 USD' },
				{ text: 'Free margin', value: '300 USD' },
				{ text: 'Required margin', value: '225 USD' },
				{ text: 'Valume', value: '1 lot' },
				{ text: 'Pip price', value: '10 USD' },
				{ text: 'Profut', value: '<b>100 USD</b>' }
			]
		},
		{
			title: '200% bonus',
			grath: {
				title: 'Buy 3 lots EUR/USD',
				subtitle: '10 pipss profit',
				open: 'open 1.1280',
				close: 'close 1.1290'
			},
			details: [
				{
					text: 'Deposited',
					value:
						'<span class="flex gap-2">300 USD + <p class="text-blue-400">600 USD added as bonus</p></span>'
				},
				{ text: 'Free margin', value: '900 USD' },
				{ text: 'Required margin', value: '675 USD' },
				{ text: 'Volume', value: '3 lot' },
				{ text: 'Pip price', value: '30 USD' },
				{ text: 'Profit', value: '<b class="text-purple-400">300 USD</b>' }
			]
		}
	];
	const BLOCKS2 = [
		{
			title: 'Sing up or log in',
			description: 'Log in to an existing MTrading account or sign up',
			imageUrl: 'https://mtr-cdn.com/img/web/deposit-bonus/step-1.webp'
		},
		{
			title: 'Make a Deposit',
			description: 'Deposit funds and choose the bonus size - from 25% to 200%',
			imageUrl: 'https://mtr-cdn.com/img/web/deposit-bonus/step-2.webp'
		},
		{
			title: 'Trade with bonus',
			description: 'The bonux lands to your account automatically as soon as money is deposited',
			imageUrl: 'https://mtr-cdn.com/img/web/deposit-bonus/step-3.webp'
		}
	];
	const CARDS = [
		{
			title: 'Who is eligible to claim the deposit bonus?',
			description: 'Any MTrading customer with an .Premium account, either new or existing.'
		},
		{
			title: 'What to do if the bonus expries?',
			description: 'No worries, claim it again! You can do it as many times as you want.'
		},
		{
			title: 'Can I use wire transfer for depositing?',
			description:
				'Yes. In this case, please notify your account manager via e-mail after the account has been funded.'
		},
		{
			title: 'How can I keep the bonus?',
			description:
				'You should get teh bonus rules fulfulled. Please read Terms and Conditions for more information.'
		}
	];
	const SLIDER = [
		{
			imageUrl: 'https://mtr-cdn.com/img/web/home/skrill_neteller.png',
			title: 'Skrill / Neteller'
		},
		{
			imageUrl: 'https://mtr-cdn.com/img/web/home/visa_mastercard.png',
			title: 'Visa / Mastercard'
		},
		{ imageUrl: 'https://mtr-cdn.com/img/web/home/swift.png', title: 'Swift' },
		{ imageUrl: 'https://mtr-cdn.com/img/web/home/bank.png', title: 'Local Online banking' },
		{ imageUrl: 'https://mtr-cdn.com/img/web/home/wire_transfer.png', title: 'Wire Transfer' }
	];
	const ROW2 = {
		title: 'Get Your 200% Deposit Bonus Now!',
		button: 'Continue',
		imageUrl: 'https://mtr-cdn.com/img/web/registration-block/img.png'
	};
	// SCRIPT
	let activeTrade = $state('Without bonus');
	let windowWidth = $state(0);
	let activeSlide = $state(1);
	function setTrade(title: string) {
		activeTrade = title
	};
	function rigthSlide() { ++activeSlide};
	function leftSlide() { --activeSlide};
</script>

<svelte:window bind:innerWidth="{windowWidth}"/> 

<section class="h-full w-full">
	<div class="bg-[#080816]">
		<WrapperPage>
			<div id="headerRow" class="flex xl:flex-row flex-col justify-between items-center gap-4 p-4 text-white">
				<div class="flex flex-col items-center">
					<h1>{ROW.title}</h1>
					<p>{ROW.description}</p>
					<div class="flex flex-col items-center gap-5 md:flex-row">
						<button class="click px-2 py-1 bg-purple-400 rounded-sm">{ROW.button}</button>
						<a href={ROW.linkUrl} class="click text-gray-400">{ROW.link}</a>
					</div>
				</div>
				<img src={ROW.imageUrl} alt="" class="w-full max-w-xl" />
			</div>
			<div class="flex flex-col items-center gap-5 bg-[#080816] p-4 text-white">
				<h1>Best bonus on the market</h1>
				<div class="w-full flex md:flex-row flex-col gap-5">
					{#each BLOCKS as { title, description, imageUrl }}
						<div class="flex w-full flex-col items-end rounded-2xl bg-[#150C2E] pt-5 pl-5">
							<h3 class="w-full">{title}</h3>
							<p class="w-full">{description}</p>
							<img src={imageUrl} alt="" />
						</div>
					{/each}
				</div>
			</div>
		</WrapperPage>
	</div>
	<div class="-translate-y-2 bg-white">
		<svg class="h-[100px] w-full" viewBox="0 0 1440 100" preserveAspectRatio="none">
			<path d="M0,100 A1440,400 0 0,1 1440,100 L1440,0 L0,0 Z" fill="rgb(8 8 22)"></path>
		</svg>
	</div>
	<WrapperPage>
		<div class="mt-4 flex flex-col items-center gap-4 p-4">
			<h2>Trade more and get more with your bonus</h2>
			<div class="flex w-full md:hidden">
				{#each ['Without bonus', '200% bonus'] as title}
					<button onclick={() => {setTrade(title)}} class:text-purple-400={activeTrade == title} class:border-purple-400={activeTrade == title} class="click w-full border-b-2 border-gray-400 p-3 text-lg font-medium text-gray-400">{title}</button>
				{/each}
			</div>
		</div>
		<div class="flex flex-col xl:flex-row gap-4 p-5">
			{#each TRADES as { title, grath, details }}
				{#if 768 > windowWidth ? activeTrade === title : true }
					{#snippet trade()}
						<div class="w-full flex flex-col gap-5 rounded-xl border border-gray-400/40 p-5">
							<h3>{title}</h3>
							<div class="relative flex flex-col gap-14 rounded-xl bg-gray-50 p-4">
								<div class="flex items-center gap-2">
									<p class="font-medium">{grath.title}</p>
									<p class="text-gray-400">{grath.subtitle}</p>
								</div>
								<!-- TODO: refactoring this each -->
								{#each [grath.close, grath.open] as el}
									<div class="flex w-full items-center gap-2 whitespace-nowrap text-gray-400">
										<p>{el}</p>
										<div class="w-full border-b border-dashed border-gray-400/40"></div>
									</div>
								{/each}
								<img
									src="https://mtr-cdn.com/img/web/deposit-bonus/graph.png"
									loading="lazy"
									alt=""
									class="absolute bottom-4 left-30"
								/>
							</div>
							<div class="flex flex-col gap-4">
								{#each details as { text, value }}
									<div class="flex items-center justify-between">
										<p class="text-gray-400">{text}</p>
										{@html value}
									</div>
								{/each}
							</div>
						</div>				
					{/snippet}
					{@render trade()}
				{/if}
			{/each}
		</div>
		<div class="w-full flex justify-center">
			<button class="click px-2 py-1 rounded-md bg-purple-400 text-white">Get your bonus</button>
		</div>
		<div class="mt-5 flex flex-col items-center gap-4 p-4">
			<h2>How to get bonus</h2>
			<div class="flex w-full flex-col md:flex-row gap-5">
				{#each BLOCKS2 as { title, description, imageUrl }}
					<div class="flex w-full flex-col items-center rounded-2xl bg-gray-50 p-4">
						<img src={imageUrl} alt="" />
						<h3>{title}</h3>
						<p class="text-center">{description}</p>
					</div>
				{/each}
			</div>
		</div>
		<div>
			<h2 class="my-4">200% Deposit Bonus* FAQ</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				{#each CARDS as {title, description}}
					<div class="w-full flex flex-col gap-5 px-12 py-7 bg-gray-50">
						<h3>{title}</h3>
						<p class="text-gray-400">{description}</p>
					</div>
				{/each}
			</div>
		</div>
		<div class="flex flex-col gap-2">
			<h2>Deposit and withdraw via multiple payment options</h2>
			<p class="mb-2">Use one of the suggested safe and quick payment options for deposotong funds</p>
			<div class="relative flex gap-5 overflow-auto">
				<button onclick={leftSlide} class="click absolute -left-3 bottom-1/2 translate-y-1/2 h-10 w-10 rounded-full text-gray-400 bg-gray-50">&larr;</button>
				{#each SLIDER as {imageUrl, title}, index}
					{#if activeSlide == index || activeSlide == index + 1}
						<div transition:slide="{{ axis: "x" }}" class="min-w-165 h-34 flex gap-3 items-center border border-gray-400/50 rounded-lg px-2 py-4">
							<img src={imageUrl} alt="">
							<div>
								<h3 class="mb-2">{title}</h3>
								<p class="text-gray-400">Commission 0%</p>
								<p class="text-gray-400">Withdraw 0%</p>
							</div>
						</div>
					{/if}
				{/each}
				<button onclick={rigthSlide} class="click absolute right-0 bottom-1/2 translate-y-1/2 h-10 w-10 rounded-full text-gray-400 bg-gray-50">&rarr;</button>
			</div>
		</div>
	</WrapperPage>
	<div class="flex bg-gray-50">
		<div class="max-w-[1200px] w-full px-4 pt-4 flex flex-col gap-4">
			<div class="flex flex-col gap-4">
				<h2>registration-block</h2>
			</div>
			<img src={ROW2.imageUrl} alt="">
		</div>
	</div>
	<div class="flex gap-2 py-4 px-4">
		<p>*Bonus percent varies in countries. For more details please check</p>
		<a href="/" class="text-purple-400">Terms and Conditions.</a>
	</div>

	<!-- 
        relarive, absolute
        width, height
        margin, padding
        flex, gap, jusrify, items
        rounded, border
        colors & bg
        animation
     --><!-- 
        style moder:style
    -->
</section>

<style>
	@media (max-width: 768) {
		h1 {
			font-size: 1.5rem;
			font-weight: 500;
		}
		h2 {
			font-size: 1.5rem;
			font-weight: 500;
		}
		h3 {
			font-size: 1rem;
			font-weight: 500;
		}
	}
	h1 {
		font-size: 2.25rem;
		font-weight: 500;
	}
	h2 {
		font-size: 1.75rem;
		font-weight: 500;
	}
	h3 {
		font-size: 1.25rem;
		font-weight: 500;
	}
	button {
		font-size: 20px;
		font-weight: 500px;
	}
	.click {
		cursor: pointer;
	}
	.click:hover {
		opacity: 0.7;
	}
	/* .active {
		@apply text-purple-400 border-purple-400
	} */
	/* 
    colors:
    [#080816] black
    [#150C2E] semi blue
    bg-gray-50
    text-gray-400
    text-purple-400

    radius:
    6px
    8px
    12px
    16px
    rounded-2xl

    padding:
    16px
    20px
    24px
    28px 48px 48px 32px
    18px 8px 18px 8px
*/
</style>
