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

<!-- <Modal bind:isShow {isLoading} position='top' onclose={() => alert('hello test')}>
    {#snippet header()}
        <h1>header</h1>
    {/snippet}
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam autem alias fugiat aperiam recusandae mollitia ratione consequuntur nostrum ab quasi.</p>
    {#snippet footer()}
        <Button href='/'>pay</Button>
    {/snippet}
</Modal>

<Button onclick={() => isShow = true}>onShow</Button>
<Button>test</Button> -->

<Preloader />