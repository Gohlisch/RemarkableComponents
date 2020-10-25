<script lang="ts">
	import { categoryStore} from "./CategoryStore";
    import type { Category } from "./Category";
    let value: string;
    let categories: Array<Category>;
    categoryStore.subscribe(updated => categories = updated);
    categoryStore.add("Rot");
	categoryStore.add("Grün");
	categoryStore.add("Blau");
</script>

<input bind:value>
<button on:click={e=>categoryStore.add(value)}>
    hinzufügen
</button>

<button on:click={e=>categoryStore.removeByValue(value)}>
    entfernen
</button>

{#each categories as category, i}
    <div>
        <input type="color" bind:value={category.color} style="background-color:{category.color}">
        <input type="text" contenteditable="true" bind:value={category.value} style="background-color:{category.color}">
        <button on:click={e => categoryStore.removeAtIndex(i)}>❌</button>
    </div>
{/each}

