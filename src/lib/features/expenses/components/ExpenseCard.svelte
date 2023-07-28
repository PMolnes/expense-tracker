<script lang="ts">
	import type { Expense } from '../types/expense';

	export let expense: Expense;

	const formattingOptions = {
		style: 'currency',
		currency: 'NOK',
		minimumFractionDigits: 2
	};

	const moneyFormat = new Intl.NumberFormat('no-NO', formattingOptions);

	const formatNumber = () => {
		return moneyFormat.format(expense.amount);
	};

	$: formattedNumber = formatNumber();
</script>

<div class="p-4 rounded-md drop-shadow-md aspect-square bg-white grid place-items-center">
	<p>{expense.title}</p>
	<p class="text-red-500 text-xl">{`- ${formattedNumber}`}</p>
	<p class="text-sm text-gray-400">{expense.date.toDateString()}</p>
</div>
