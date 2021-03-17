it("should calculate the monthly rate correctly", function () {
	// ...
	let values = {
		amount: 35000,
		years: 6,
		rate: 5,
	};
	expect(calculateMonthlyPayment(values)).toEqual("563.67");
});

it("should return a result with 2 decimal places", function () {
	// ..
	let values = {
		amount: 35000,
		years: 6,
		rate: 5,
	};
	expect(calculateMonthlyPayment(values).split(".")[1].length).toEqual(2);
});

/// etc
