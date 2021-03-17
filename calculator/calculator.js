window.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("calc-form");
	if (form) {
		setupIntialValues();
		form.addEventListener("submit", function (e) {
			e.preventDefault();
			update();
		});
	}
});

function getCurrentUIValues() {
	return {
		amount: +document.getElementById("loan-amount").value,
		years: +document.getElementById("loan-years").value,
		rate: +document.getElementById("loan-rate").value,
	};
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
	const form = document.getElementById("calc-form");
	let values = {
		amount: 10000,
		years: 5,
		rate: 3.25,
	};
	form[0].value = values.amount;
	form[1].value = values.years;
	form[2].value = values.rate;
	// console.log(form);
	update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
	// setupIntialValues();
	let values = getCurrentUIValues();
	// console.log(values);
	updateMonthly(calculateMonthlyPayment(values));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
	let p = values.amount;
	let i = values.rate / 100 / 12;
	let n = values.years * 12;
	let numerator = p * i;
	let denominator = Number(1 - Math.pow(i + 1, -n));
	return (numerator / denominator).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
	let monthlyPay = document.getElementById("monthly-payment");
	monthlyPay.innerText = monthly;
}
