import {get, writable} from "svelte/store";
import type { Writable } from "svelte/store";
import type { Category } from "./Category";

class CategoryStore {
	private categories: Writable<Array<Category>>;

	constructor() {
		this.categories = writable(new Array<Category>());
	}

	public subscribe(run: (value: Array<Category>) => void, invalidate?:(value?: Array<Category>) => void): void {
		this.categories.subscribe(run, invalidate);
	}

	public add(value: string): number {
		if(!value) return;
		const index: number = get(this.categories).length;
		this.categories.update((c: Array<Category>) => c.concat({value, color: this.determineColorHex()}));
		return index;
	}

	public update(value: string, index: number): void  {
		this.categories.update((c: Array<Category>) => {
			c[index].value = value;
			return c;
		})
	}

	public removeAtIndex(index: number): void {
		this.categories.update((c: Array<Category>) => {
			c.splice(index);
			return c;
		});
	}

	public removeByValue(value: string): void {
		this.categories.update((c: Array<Category>) => {
			return c.filter(x => x.value !== value);
		});
	}

	private determineColorHex(): string {
		const length: number = get(this.categories).length;
		const secondColor: number = (length < 3) ? 0 : (length < 6) ? 244 : 122
		const thirdColor: number = (length < 9) ? 0 : (length < 12) ? 244 : 122;
		const cycleIndex: number = length % 3;
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
