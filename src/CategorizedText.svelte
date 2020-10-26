<script lang="ts">
    import { categoryStore } from "./CategoryStore";
    import { onMount } from "svelte";

    export let text: string = "";
    let tokenized: string[] = [];
    onMount(()=> {
	    categoryStore.subscribe(() => tokenized = text.split(/([^a-zA-ZäöüÖÄÜ])/i));
    });
</script>

{#each tokenized as token}
    {#if categoryStore.getByValue(token)}
        <mark style="background-color: {categoryStore.getByValue(token).color}">{token}</mark>
    {:else}
        <span>{token}</span>
    {/if}
{/each}
