<script lang="ts">
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
        {title: 'Automated and instant', description: 'Bonus is ready for trading right after deposit is made', imageUrl: 'https://mtr-cdn.com/img/web/deposit-bonus/bonus-1.webp'},
        {title: 'Unlimited Bonus Size', description: 'Enjoy trading with extra deposit funds', imageUrl: 'https://mtr-cdn.com/img/web/deposit-bonus/bonus-2.webp'},
        {title: 'Increase Your Margin', description: 'Choose your bonus from 25-50-70% or even up to 200%', imageUrl: 'https://mtr-cdn.com/img/web/deposit-bonus/bonus-3.webp'}
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
                {text: 'Deposited', value: '300 USD'},
                {text: 'Free margin', value: '300 USD'},
                {text: 'Required margin', value: '225 USD'},
                {text: 'Valume', value: '1 lot'},
                {text: 'Pip price', value: '10 USD'},
                {text: 'Profut', value: '<b>100 USD</b>'}
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
                {text: 'Deposited', value: '<span class="flex gap-2">300 USD + <p class="text-blue-400">600 USD added as bonus</p></span>'},
                {text: 'Free margin', value: '900 USD'},
                {text: 'Required margin', value: '675 USD'},
                {text: 'Volume', value: '3 lot'},
                {text: 'Pip price', value: '30 USD'},
                {text: 'Profit', value: '<b class="text-purple-400">300 USD</b>'}
            ]
        }
    ];
    const BLOCKS2 = [
        {title: 'Sing up or log in', description: 'Log in to an existing MTrading account or sign up', imageUrl: 'https://mtr-cdn.com/img/web/deposit-bonus/step-1.webp'},
        {title: 'Make a Deposit', description: 'Deposit funds and choose the bonus size - from 25% to 200%', imageUrl: 'https://mtr-cdn.com/img/web/deposit-bonus/step-2.webp'},
        {title: 'Trade with bonus', description: 'The bonux lands to your account automatically as soon as money is deposited', imageUrl: 'https://mtr-cdn.com/img/web/deposit-bonus/step-3.webp'}
    ];
    const CARDS = [
        {title: 'Who is eligible to claim the deposit bonus?', description: 'Any MTrading customer with an .Premium account, either new or existing.'},
        {title: 'What to do if the bonus expries?', desctiption: 'No worries, claim it again! You can do it as many times as you want.'},
        {title: 'Can I use wire transfer for depositing?', description: 'Yes. In this case, please notify your account manager via e-mail after the account has been funded.'},
        {title: 'How can I keep the bonus?', desctiprion: 'You should get teh bonus rules fulfulled. Please read Terms and Conditions for more information.'}
    ];
    const SLIDER = [
        {imageUrl: 'https://mtr-cdn.com/img/web/home/skrill_neteller.png', title: 'Skrill / Neteller'},
        {imageUrl: 'https://mtr-cdn.com/img/web/home/visa_mastercard.png', title: 'Visa / Mastercard'},
        {imageUrl: 'https://mtr-cdn.com/img/web/home/swift.png', title: 'Swift'},
        {imageUrl: 'https://mtr-cdn.com/img/web/home/bank.png', title: 'Local Online banking'},
        {imageUrl: 'https://mtr-cdn.com/img/web/home/wire_transfer.png', title: 'Wire Transfer'}
    ]
    const ROW2 = {
        title: 'Get Your 200% Deposit Bonus Now!',
        button: 'Continue',
        imageUrl: 'https://mtr-cdn.com/img/web/registration-block/img.png'
    };
    // SCRIPT
    let trade
    let slide
    function setTrade() {}
    function rigthSlide() {}
    function leftSlide() {}
</script>

<section class="w-full h-full">
    <div id="headerRow" class="p-4 flex flex-col gap-4 items-center text-white bg-[#080816]">
        <div class="flex flex-col items-center">
            <h1>{ROW.title}</h1>
            <p>{ROW.description}</p>
        </div>
        <div class="flex flex-col md:flex-row gap-5 items-center">
            <button class="click">{ROW.button}</button>
            <a href={ROW.linkUrl} class="text-gray-400 click">{ROW.link}</a>
        </div>
        <img src={ROW.imageUrl} alt="" class="max-w-xl w-full">
    </div>
    <div class="p-4 flex flex-col gap-4 items-center text-white bg-[#080816]">
        <h1>Best bonus on the market</h1>
        {#each BLOCKS as {title, description, imageUrl}}
            <div class="pt-5 pl-5 w-full flex flex-col items-end rounded-2xl bg-[#150C2E]">
                <h3 class="w-full">{title}</h3>
                <p class="w-full">{description}</p>
                <img src={imageUrl} alt="">
            </div>
        {/each}
    </div>
    <div class="bg-white">
        <svg class="w-full h-[100px]" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,100 A1440,400 0 0,1 1440,100 L1440,0 L0,0 Z" fill="rgb(8 8 22)"></path>
        </svg>
    </div>
    <div class="mt-4 p-4 flex flex-col items-center gap-4">
        <h2>Trade more and get more with your bonus</h2>
        <div class="w-full flex md:hidden">
            {#each ['Without bonus', '200% bonus'] as title}
                <button class="w-full p-3 border-b-2 text-lg font-medium text-gray-400 border-gray-400 click">{title}</button>
            {/each}
        </div>
    </div>
    <div class="flex flex-col gap-4 p-5">
        {#each TRADES as {title, grath, details}}
            <div class="p-5 flex flex-col gap-5 border border-gray-400/40 rounded-xl">
                <div class="relative p-4 flex flex-col gap-14 rounded-xl bg-gray-50">
                    <div class="flex gap-2 items-center">
                        <p class="font-medium">{grath.title}</p>
                        <p class="text-gray-400">{grath.subtitle}</p>
                    </div>
                    <!-- TODO: refactoring this each -->
                    {#each [grath.close, grath.open] as el}
                        <div class="w-full flex gap-2 items-center whitespace-nowrap text-gray-400">
                            <p>{el}</p>
                            <div class="w-full border-b border-dashed border-gray-400/40"></div>
                        </div>
                    {/each}
                    <img src="https://mtr-cdn.com/img/web/deposit-bonus/graph.png" loading="lazy" alt="" class="absolute left-30 bottom-4">
                </div>
                <div class="flex flex-col gap-4">
                    {#each details as {text, value}} 
                        <div class="flex justify-between items-center">
                            <p class="text-gray-400">{text}</p>
                            {@html value}
                        </div>
                    {/each}
                </div>
            </div>
        {/each}
        <button class="rounded-md text-white bg-purple-400 click">Get your bonus</button>
    </div>
    <div class="mt-5 p-4 flex flex-col gap-4 items-center">
        <h2>How to get bonus</h2>
        <div class="w-full flex flex-col gap-5">
            {#each BLOCKS2 as {title, description, imageUrl}}
                <div class="w-full p-4 flex flex-col items-center rounded-2xl bg-gray-50">
                    <img src="{imageUrl}" alt="">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            {/each}
        </div>
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
    cards
    slider
    row
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