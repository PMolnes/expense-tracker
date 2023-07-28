import type { Category } from './category';

export interface Expense {
	title: string;
	amount: number;
	date: Date;
	description?: string;
	category?: Category;
}
