export function numberToPrice(num) {
	return num.toLocaleString("en-US", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});
}

export function isPrice(input) {
	return /^\d*\.?\d{0,2}$/.test(input);
}
