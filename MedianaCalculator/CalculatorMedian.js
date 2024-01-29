expenses = {
	"2023-01": {
		"01": {
			food: [22.11, 43, 11.72, 2.2, 36.29, 2.5, 19],
			fuel: [210.22],
		},
		"09": {
			food: [11.9],
			fuel: [190.22],
		},
	},
	"2023-03": {
		"07": {
			food: [20, 11.9, 30.2, 11.9],
		},
		"04": {
			food: [10, 20, 21.5],
			fuel: [],
		},
	},
	"2023-04": {},
};

function get_median_of_first_week_expenses(expenses) {
	let result = null;
	let counter = 0;

	function calculateMedian(values) {
		const sortedValues = values.slice().sort((a, b) => a - b);
		const middleIndex = Math.floor(values.length / 2);

		if (values.length % 2 === 1 && values.length > 0) {
			return sortedValues[middleIndex];
		} else if (values.length % 2 === 0 && values.length > 0) {
			return (sortedValues[middleIndex - 1] + sortedValues[middleIndex]) / 2;
		}

		return 0;
	}

	function medianCalculation(expensesFood, expensesFuel) {
		const medianFood = calculateMedian(expensesFood);
		const medianFuel = calculateMedian(expensesFuel);
		const total = medianFood + medianFuel;
		counter += total;
	}

	for (const data in expenses) {
		const firstDayOfMonth = new Date(`${data}-01`);
		const dayOfWeek = firstDayOfMonth.getDay();
		let arrayFood = [];
		let arrayFuel = [];

		for (const day in expenses[data]) {
			const checkedDay = new Date(`${data}-${day}`);
			const monthDay = checkedDay.getDate();

			if (monthDay < 7 && (dayOfWeek === 0 || monthDay < 7)) {
				arrayFood.push(...expenses[data][day].food);
				arrayFuel.push(...expenses[data][day].fuel);
			}
		}

		if (arrayFood.length !== 0 && arrayFuel.length !== 0) {
			medianCalculation(arrayFood, arrayFuel);
		}
	}
	result = counter.toFixed(2);
	return result;
}
console.log(get_median_of_first_week_expenses(expenses));
