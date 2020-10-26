<script lang="ts">
    import { categoryStore } from "./CategoryStore";

</script>
{#each $categoryStore as category, i}
    <div style="background-color: {category.color}">
        <label>
            {category.name}:
            <input style="background-color: {category.color}; border: none;" value="{category.value}" on:input={e=>categoryStore.update(i,{name: category.name, value: e.target.value, color: category.color})}>
        </label>
    </div>
{/each}
