<script lang="ts">
	import type { Category } from "../Model/Category";
	import type { Unsubscriber } from "../SvelteTypes";
	import { categoryStore } from "../Stores/CategoryStore";
	import { onDestroy, onMount } from "svelte";

	export let categoryName: string;
	export let options: Array<string>;
	let category: Category = {name: "", value: "", color: ""};
	let index: number;
	let unsubscribe: Unsubscriber;

	onMount(() => {
        index = categoryStore.getIndexByName(categoryName);
		unsubscribe = categoryStore.subscribe(() => {
			category = categoryStore.getByIndex(index);
		});
    })

	onDestroy(() => unsubscribe());
</script>
<style>
    div {
        display: flex;
        align-items: baseline;
    }
    label { padding: 7px; }
    .selected { border: 3px solid black; }
</style>
<div>
    { category.name }:
    { #each options as option }
        <label style="background: { option === category.value ? category.color : `initial` };"
               class:selected="{ option === category.value }">
            <input type="radio"
                   name="{category.name}"
                   on:input={e => {
                        category.value = e.target.value;
                        categoryStore.updateAt(index, category);
                      }}
                   value="{ option }"
                   checked="{ option === category.value }"
            > { option }
        </label>
    {/each}
</div>
