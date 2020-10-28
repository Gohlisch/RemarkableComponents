<script lang="ts">
	import {categoryStore} from "./CategoryStore";
</script>

{#each $categoryStore as category, i}
    <label>
        <span style="background-color: {category.color}">{category.name}:</span>
        <input style="background-color: {category.color}; border: 3px solid black;" value="{category.value}"
               on:input={e=>categoryStore.updateAt(i,{name: category.name, value: e.target.value, color: category.color})}>
    </label>
{/each}
