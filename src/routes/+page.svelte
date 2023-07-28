<script lang="ts">
	import ExpenseCard from '$lib/features/expenses/components/ExpenseCard.svelte';
	import TotalExpenses from '$lib/features/expenses/components/TotalExpenses.svelte';
	import type { Expense } from '$lib/features/expenses/types/expense';

	let expenses: Expense[] = [
		{
			title: 'Starbucks',
			amount: 65,
			date: new Date('07-25-2023')
		},
		{
			title: 'Kantine',
			amount: 20,
			date: new Date('07-25-2023')
		},
		{
			title: 'Buss',
			amount: 15,
			date: new Date('07-25-2023')
		}
	];
</script>

<main class="m-2 text-gray-700">
	<TotalExpenses {expenses} />
	<h2 class="mt-4 font-medium">Today</h2>
	<div class="grid grid-cols-3 gap-8">
		{#each expenses as expense}
			<ExpenseCard {expense} />
		{/each}
	</div>
</main>
