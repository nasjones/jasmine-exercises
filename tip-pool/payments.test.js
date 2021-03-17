describe("Tests for the functions in payments.js", function () {
	beforeEach(function () {
		billAmtInput.value = 200;
		tipAmtInput.value = 40;
	});

	it("tests the submitPaymentInfo function", function () {
		submitPaymentInfo();

		expect(paymentId).toEqual(1);
	});

	it("tests the createCurPayment function", function () {});

	it("tests the appendPaymentTable function", function () {});

	it("tests the updateSummary function", function () {});
});
