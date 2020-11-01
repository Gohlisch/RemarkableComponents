<script lang="ts">
    import type { Category } from "../Model/Category";
    import type { Unsubscriber } from "../SvelteTypes";
    import {categoryStore} from "../Stores/CategoryStore";
    import {onDestroy, onMount} from "svelte";

    export let categoryName: string = "  ";
    let category: Category = {name: "", value:"", color:""};
    let unsubscriber: Unsubscriber;

    onMount(()=> unsubscriber = categoryStore.subscribe(() => category = categoryStore.getByName(categoryName)));

    const marker: EventListener = () => {
	    const selected: string = window.getSelection().toString();
	    if (selected) {
		    console.log(selected);
		    category.value = selected;
		    categoryStore.updateWithName(category.name, category);
		    putDownMarker();
	    }
    };

    function pickUpMarker(): void {
    	console.log("clicked")
    	window.addEventListener("mouseup", marker);
    }

    function putDownMarker(): void {
    	window.removeEventListener("mouseup", marker);
    }

    onDestroy(()=>unsubscriber())
</script>
<button on:click={pickUpMarker} style="background-color: {category ? category.color : `initial`}">
    { categoryName }
</button>
