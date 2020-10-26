<script lang="ts">
	import CategoryDisplay from "./CategoryDisplay.svelte";
	import CategorizedText from "./CategorizedText.svelte";
	import CategoryShowcase from "./CategoryShowcase.svelte";

	const text: string = `Das hier ist ein wirklich langer Text mit sehr vielen Wörtern.
	Oh man, ich wette hier lassen sich so einige Schlüsselwörter finden! Wenn wir Worte finden,
	die auch eine Kategorie sind, dann werden sie in Farben wie Rot, Grün oder Blau markiert.
	Das ist gut, denn so können wir Ihnen Kategorien zuordnen und diese dann weiterverarbeiten. Clever!`;
</script>

<CategoryDisplay/>
<CategorizedText text={text}/>
<CategoryShowcase/>
