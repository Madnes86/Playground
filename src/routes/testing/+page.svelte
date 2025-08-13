<script lang="ts">
    import Modal from '$lib/Modal.svelte';
    import Button from '$lib/Button.svelte';
    import Preloader from '$lib/Preloader.svelte';
	import { onMount } from 'svelte';

    let isShow = $state(true);
    let isLoading = $state(true);

    onMount(() => {
        setTimeout(() => {
           isLoading = false 
        }, 2_000)
    });
</script>

<Modal bind:isShow {isLoading} position='top' onclose={() => alert('hello test')}>
    {#snippet header()}
        <h1>Header</h1>
    {/snippet}
    <Preloader class='!w-50'/>
    {#snippet footer()}
        <Button href='/' variant='link'>pay</Button>
    {/snippet}
</Modal>

<Button onclick={() => isShow = true} variant='link'>onShow</Button>