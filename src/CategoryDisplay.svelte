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

<ul>
    {#each categories as category}
        <p style="background-color: {category.color}">{category.value}</p>
    {/each}
</ul>

