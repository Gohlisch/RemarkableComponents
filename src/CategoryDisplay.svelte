<script lang="ts">
	import { categoryStore} from "./CategoryStore";
    import type { Category } from "./Category";
    let value: string;
    let categories: Array<Category>;
    categoryStore.subscribe(updated => categories = updated);
    categoryStore.add({name: "Geschlecht", value: "Männlich", color: "#d8a2d4"});
    categoryStore.add({name: "Name", value: "Müller", color: "#d6d8a2"});
    categoryStore.add({name: "Anliegen", value: "Bearbeiten", color: "#a2d8b3"});
</script>

<input bind:value>
<button on:click={e=>categoryStore.add({name: value, value: "", color: ""})}>
    hinzufügen
</button>

<button on:click={e=>categoryStore.removeByName(value)}>
    entfernen
</button>

{#each categories as category, i}
    <div>
        <input type="color" on:input={e=>categoryStore.update(i,{name: category.name, value: category.value, color: e.target.value})} style="background-color:{category.color}">
        <input type="text" contenteditable="true" on:input={e=>categoryStore.update(i,{name: e.target.value, categorie: value, color: category.color})} style="background-color:{category.color}" value="{category.name}">
        <button on:click={e => categoryStore.removeAtIndex(i)}>❌</button>
    </div>
{/each}

