import type { Category } from "../Model/Category";
import type { Writable } from "svelte/store";
import type {Invalidator, Subscriber, Unsubscriber} from "../SvelteTypes";
import {get, writable} from "svelte/store";

class CategoryStore {
	private readonly categories: Writable<Array<Category>>;
	private length: number = 0;

	constructor() {
		this.categories = writable(new Array<Category>());
		this.categories.subscribe(c => this.length = c.length);
	}

	public subscribe(run: Subscriber<Array<Category>>, invalidate?: Invalidator<Array<Category>>): Unsubscriber {
		return this.categories.subscribe(run, invalidate);
	}

	public add(category: Category): number {
		if(!category.name) return;
		const index: number = length;
		this.categories.update((c: Array<Category>) => c.concat(
			{
				name: category.name,
				value: category.value,
				color: category.color? category.color : this.determineColorHex()
			})
		);
		return index;
	}

	public updateAt(index: number, category: Category): void  {
		this.categories.update((c: Array<Category>) => {
			if(category.name) c[index].name = category.name;
			if(category.value) c[index].value = category.value;
			if(category.color) c[index].color = category.color;
			return c;
		})
	}

	public removeAtIndex(index: number): void {
		this.categories.update((c: Array<Category>) => {
			c.splice(index, 1);
			return c;
		});
	}

	public removeByValue(value: string): void {
		this.categories.update((c: Array<Category>) => {
			return c.filter(x => x.value !== value);
		});
	}

	public removeByName(name: string): void {
		this.categories.update((c: Array<Category>) => {
			return c.filter(x => x.name !== name);
		});
	}

	public getIndexByName(name: string): number | null {
		const categories = get(categoryStore);
		for(let i: number = 0; i < categories.length; ++i)
			if(categories[i].name === name) return i;
		return null;
	}

	public getByIndex(index: number): Category | null {
		return get(this.categories)[index];
	}

	public getByValue(value: string): Category | null {
		return get(this.categories).filter(x => x.value ? x.value.toLowerCase() === value.toLowerCase(): false).pop();
	}

	// TODO: Improve: if 255 0 0 was removed, and there were following colors, the first to be added after that  removal should be 255 0 0
	private determineColorHex(): string {
		const secondColor: number = (this.length < 3) ? 0 : (this.length < 6) ? 244 : 122
		const thirdColor: number = (this.length < 9) ? 0 : (this.length < 12) ? 244 : 122;
		const cycleIndex: number = this.length % 3;
		if(cycleIndex == 0) {
			return CategoryStore.rgbToHex(255, secondColor, thirdColor);
		} else if(cycleIndex == 1) {
			return CategoryStore.rgbToHex(thirdColor, 255, secondColor);
		} else {
			return CategoryStore.rgbToHex(secondColor, thirdColor, 255);
		}
	}

	private static rgbToHex(red, green, blue): string {
		const rgb = (red << 16) | (green << 8) | (blue << 0);
		return '#' + (0x1000000 + rgb).toString(16).slice(1);
	}
}

export const categoryStore: CategoryStore = new CategoryStore();
