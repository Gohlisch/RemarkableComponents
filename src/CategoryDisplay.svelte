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
        <input type="color" on:input={e=>categoryStore.update(i, "", e.target.value)} style="background-color:{category.color}">
        <input type="text" contenteditable="true" on:input={e=>categoryStore.update(i, e.target.value, "")} style="background-color:{category.color}" value="{category.value}">
        <button on:click={e => categoryStore.removeAtIndex(i)}>❌</button>
    </div>
{/each}

