<script lang="ts">
    import List from '$lib/List.svelte';
    import Modal from '$lib/Modal.svelte';
    import Button from '$lib/Button.svelte';

    let isShow: boolean = $state(true);

    const close = () => isShow = false
</script>

<!-- <List /> -->

<Modal bind:isShow closeable={() => isShow = false}>
    {#snippet header()}
        <h1>header</h1>
    {/snippet}
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam autem alias fugiat aperiam recusandae mollitia ratione consequuntur nostrum ab quasi.</p>
    {#snippet footer()}
        <Button onclick={close}>close</Button>
    {/snippet}
</Modal>

<Button onclick={() => isShow = true}>onShow</Button>