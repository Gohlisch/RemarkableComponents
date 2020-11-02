<script lang="ts">
    import type { Category } from "../Model/Category";
    import type { Unsubscriber } from "../SvelteTypes";
    import {categoryStore} from "../Stores/CategoryStore";
    import {onDestroy, onMount} from "svelte";

    export let categoryName: string;
    let category: Category = {name: "", value:"", color:""};
    let unsubscriber: Unsubscriber;

    onMount(()=> unsubscriber = categoryStore.subscribe(() => category = categoryStore.getByName(categoryName)));

    const marker: EventListener = () => {
    	// TODO: Display SVG as cursor, to give the user a hint of what is happening
	    const selected: string = window.getSelection().toString().trim();
	    if (selected) {
		    category.value = selected;
		    categoryStore.updateWithName(category.name, category);
		    putDownMarker();
	    }
    };

    function pickUpMarker(): void {
	    document.getElementsByTagName("html").item(0).style.cursor="grab";
	    window.addEventListener("mouseup", marker);
    }

    function putDownMarker(): void {
	    document.getElementsByTagName("html").item(0).style.cursor="auto";
	    window.removeEventListener("mouseup", marker);
    }

    onDestroy(()=>unsubscriber())
</script>
<button on:click={pickUpMarker} style="background-color: {category ? category.color : `initial`}">
    { categoryName }
</button>
