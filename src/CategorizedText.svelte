<script lang="ts">
    import { categoryStore } from "./CategoryStore";
    import type { Category } from "./Category";
    import {onMount} from "svelte";

    export let text: string = "";
    let category: Category;
    let tokenized: string[];
    $: tokenized = text.split(/([^a-zA-ZäöüÖÄÜ])/i);

    onMount(()=>{categoryStore.subscribe(() => tokenized = tokenized); console.log("pop");},);
</script>

{#each tokenized as token}
    {#if (category = categoryStore.getByValue(token))}
        <mark style="background-color: {category.color}">{token}</mark>
    {:else}
        <span>{token}</span>
    {/if}
{/each}
