<script lang="ts">
	import type { Expense } from '../types/expense';

	export let expenses: Expense[];

	const calculateTotalAmount = () => {
		return expenses.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0);
	};

	$: totalAmount = calculateTotalAmount();
</script>

<div
	class="text-center font-light bg-backgroundColor-700 rounded-md p-2 flex gap-10 justify-evenly"
>
	<button class="w-full font-normal text-white rounded-md py-1 bg-accentColor-500">Daily</button>
	<button class="w-full p-1">Weekly</button>
	<button class="w-full p-1">Monthly</button>
</div>
<div class="grid place-items-center">
	<div
		class="grid place-items-center rounded-full border-[2rem] border-black aspect-square max-w-md h-60"
	>
		<p class="font-semibold text-4xl">{totalAmount}</p>
	</div>
</div>
