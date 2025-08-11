<script lang="ts">
    import List from '$lib/List.svelte';
    import Modal from '$lib/Modal.svelte';
    import Button from '$lib/Button.svelte';

    let isShow: boolean = $state(true);

    const close = () => isShow = false
</script>

<!-- <List /> -->

<Modal bind:isShow >
    {#snippet header()}
        <h1>header</h1>
    {/snippet}
    <p class='whitespace-nowrap'>content body</p>
    {#snippet footer()}
        <Button onclick={close}>close</Button>
    {/snippet}
</Modal>

<Button onclick={() => isShow = true}>onShow</Button>