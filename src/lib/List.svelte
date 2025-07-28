<!-- TODO: refactofing -->
<script lang="ts">
    import { nanoid } from 'nanoid';

    let lists: {id: string, value: string}[] = $state([
        {id: nanoid(), value: 'test number 1'},
        {id: nanoid(), value: 'test number 2'},
        {id: nanoid(), value: 'test number 3'},
        {id: nanoid(), value: 'test number 4'}
    ]);
    const VALIDATOR: {length: number, max: number} = {
        length: 3,
        max: 6
    };
    let value: string = $state('');
    let isActive: boolean = $derived(value.length + 1 > 3);
    let selectedId: string[] = $state([]);
    function add() {
        if (lists.length >= VALIDATOR.max) {
            alert('Массив переполнен');
            return
        };
        if (value.length > VALIDATOR.length) {
            lists.push({id: nanoid(), value: value});
            value = '';
        };
    };
    function remove(id?: string) {
        lists = lists.filter((lists) => { return lists.id != id});
    };
    function removeAll() {
        lists = lists.filter((el) => !selectedId.includes(el.id));
        selectedId = [];
    };
    function addRemove(id: string) {
        selectedId.push(id);
    };
</script>

<section class="m-auto w-100 p-4 flex flex-col gap-4 rounded-2xl border border-black/50">
    <div class="w-full flex gap-2">
        <input bind:value={value} type="text" class="w-full rounded-2xl">
        <button onclick={add} class:bg-red-400={isActive} class="bg-green-400 click">ADD</button>
    </div>
    {#each lists as {id, value}, index}
        <div class="relative p-2 flex gap-2 items-center rounded-2xl bg-gray-400">
            <input onclick={() => {addRemove(id)}} id={id} type="checkbox" class="border-none rounded-2xl click">
            <label for={id} class="w-full flex gap-2 text-white click">
                <span>{index + 1}</span>
                <p>{value}</p>
            </label>
            <div class="absolute p-2 -right-38 top-0 flex gap-2">
                <button onclick={() => {remove(id)}} class="bg-red-400 click">DEL</button>
                <button class="bg-gray-400 click">CHANGE</button>
            </div>
        </div>
    {/each}
    <button onclick={removeAll} class="bg-red-600 click">DEL SELECT</button>
</section>

<style>
    button {
        color: white;
        padding: 2px 8px 2px 8px;
        border-radius: 12px;
    }
    .click {
        cursor: pointer;
    }
    .click:hover {
        opacity: 0.7;
    }
    .click::after {
        opacity: 0.5;
    }
</style>