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
			food: [10.2, 11.5, 2.5],
			fuel: [],
		},
	},
	"2023-04": {},
};

function get_median_of_first_week_expenses(expenses) {
	let result = null;
	let arrayMedian = [];
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

	function medianCalculation(arrayMedian) {
		const medianTotal = calculateMedian(arrayMedian);
		const total = medianTotal;
		counter += total;
	}

	for (const data in expenses) {
		const firstDayOfMonth = new Date(`${data}-01`);
		const dayOfWeek = firstDayOfMonth.getDay();
		const toSunday = 7 - dayOfWeek + 1;

		for (const day in expenses[data]) {
			const checkedDay = new Date(`${data}-${day}`);
			const monthDay = checkedDay.getDate();

			if (dayOfWeek === 0 && checkedDay.getDay() === 0 && monthDay < 7) {
				arrayMedian.push(...expenses[data][day].food);
				arrayMedian.push(...expenses[data][day].fuel);
			} else if (
				dayOfWeek !== 0 &&
				checkedDay.getDate() >= firstDayOfMonth.getDate() &&
				monthDay <= toSunday
			) {
				console.log(day);
				arrayMedian.push(...expenses[data][day].food);
				arrayMedian.push(...expenses[data][day].fuel);
			}
		}
	}
	medianCalculation(arrayMedian);
	result = counter.toFixed(2);
	return result;
}

console.log(get_median_of_first_week_expenses(expenses));
