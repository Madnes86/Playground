<script lang="ts">
    import Modal from '$lib/Modal.svelte';
    import Button from '$lib/Button.svelte';
    import Preloader from '$lib/Preloader.svelte';
    import Flex from '$lib/Flex.svelte';
    import Notification from '$lib/Notification.svelte';
	import { onMount } from 'svelte';

    let isShow = $state(true);
    let isLoading = $state(true);

    onMount(() => {
        setTimeout(() => {
           isLoading = false 
        }, 2_000)
    });
</script>

<Flex class='h-[2000px]'>
    <Button onclick={() => isShow = true} variant='link'>onShow</Button>
</Flex>

<Notification>
    {#snippet title()}
        <h2>Test title</h2>
    {/snippet}
    <Preloader />
</Notification>

<!-- <Modal bind:isShow {isLoading} position='top'>
    {#snippet header()}
        <h1>Header</h1>
    {/snippet}
    <Preloader class='!w-50'/>
    {#snippet footer()}
        <Button href='/' variant='link'>pay</Button>
    {/snippet}
</Modal> -->
