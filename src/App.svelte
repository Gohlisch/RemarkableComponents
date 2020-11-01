<script lang="ts">
	import CategoryAdministration from "./Components/CategoryAdministration.svelte";
	import CategorizedText from "./Components/CategorizedText.svelte";
	import CategoryForm from "./Components/CategoryForm.svelte";
	import ReviewSlideshow from "./Components/ReviewSlideshow.svelte";
	import {categoryStore} from "./Stores/CategoryStore";
	import CategoryRadioPicker from "./Components/CategoryRadioPicker.svelte";
	import CategorySelectButton from "./Components/CategorySelectButton.svelte";

	categoryStore.add({name: "Geschlecht", value: "männlich", color: "#d8a2d4"});
	categoryStore.add({name: "Name", value: "Müller", color: "#d6d8a2"});
	categoryStore.add({name: "Anliegen", value: "Bearbeiten", color: "#a2d8b3"});

	const text: string = `Das hier ist ein wirklich langer Text mit sehr vielen Wörtern.
	Oh man, ich wette hier lassen sich so einige Schlüsselwörter finden! Wenn wir Worte finden,
	die auch eine Kategorie sind, dann werden sie in Farben wie Rot, Grün oder Blau markiert.
	Das ist gut, denn so können wir Ihnen Kategorien zuordnen und diese dann weiterverarbeiten. Clever!`;
</script>
<CategoryRadioPicker categoryName="Geschlecht" options={["unbekannt", "männlich", "weiblich"]} />
<CategoryAdministration/>
<CategorySelectButton categoryName="Anliegen"/>
<CategorizedText text={text}/>
<div style="max-width: 600px; margin-left: auto; margin-right: auto">
    <CategoryForm/>
    <ReviewSlideshow/>
</div>


