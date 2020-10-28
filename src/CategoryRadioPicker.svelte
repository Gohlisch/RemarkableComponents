<script lang="ts">
	import type {Category} from "./Category";
	import {categoryStore} from "./CategoryStore";
	import {onDestroy} from "svelte";
	import type {Unsubscriber} from "./SvelteTypes";

	export let categoryName: string;
	export let options: Array<string>;
	let category: Category = {name: "", value: "", color: ""};

	const unsubscribe: Unsubscriber = categoryStore.subscribe(() => {
		category = categoryStore.getByName(categoryName);
	});

	onDestroy(()=> unsubscribe())
</script>
<style>
    div {
        display: flex;
        align-items: baseline
    }
    label { padding: 7px;}
    .selected {border: 3px solid black;}
</style>
<div>
    {category.name}:
    {#each options as option}
        <label style="background: {option === category.value ? category.color : `initial`};" class:selected="{option === category.value}">
            <input type="radio"
                   name="{category.name}"
                   on:input={e => {
                        category.value = e.target.value;
                        categoryStore.updateWithName(category.name, category);
                      }}
                   value="{option}"
                   checked="{option === category.value}"
            > {option}
        </label>
    {/each}
</div>
