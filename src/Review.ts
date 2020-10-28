export interface Review {
	name: string;
	rating: 1|2|3|4|5;
	date: string;
	text: string;
	answer?: string;
}
