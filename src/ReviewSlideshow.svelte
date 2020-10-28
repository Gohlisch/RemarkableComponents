<script lang="ts">
	import {reviewStore} from "./ReviewStore";
	import CategorizedText from "./CategorizedText.svelte";
	import {categoryStore} from "./CategoryStore";
	import {get} from "svelte/store";
	import type {Review} from "./Review";

	let current: number = 0;
	let max: number = 0;

	reviewStore.subscribe((reviews) => {
		max = reviews.length-1;
	});

	function updateCategories(i: number) {
		const reviews: Array<Review> = get(reviewStore);
		categoryStore.updateAt(1, {name: "", value: reviews[i].name.split(" ").pop().replace(".",""), color: ""})
	}
</script>
<style>
    .disabled {
        background-color: grey;
    }
</style>
<span>{current+1} / {max+1}
    <button class:disabled="{current === 0}" disabled="{current === 0}" on:click={(e)=> updateCategories(--current)}>⏪</button>
    <button class:disabled="{current === max}" disabled="{current === max}" on:click={(e)=> updateCategories(++current)}>⏩</button>
</span>

{#each $reviewStore as review, i}
    {#if i === current}
        <span>
            {#each Array(review.rating) as _}<span>⭐️</span>{/each}
            <CategorizedText text="{review.name}"/>
            <span>{review.date}</span>
        </span><br/>
        <CategorizedText text="{review.text}"/>
        <div style="display:flex;justify-content:center;align-items:center; margin: 10px 20px 0 20px;">
            <textarea style="border: 3px solid black; margin-right: 20px" cols="50" rows="10" bind:value={review.answer}/>
            <div style="justify-content:flex-end; align-items:center; flex-direction: row;">
                <button style="">Neue Antwort</button>
                <button style="">Absenden</button>
            </div>
        </div>
    {/if}
{/each}
