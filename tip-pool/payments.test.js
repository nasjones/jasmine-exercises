describe("Tests for the functions in payments.js", function () {
	beforeEach(function () {
		billAmtInput.value = 200;
		tipAmtInput.value = 40;
	});

	it("tests the submitPaymentInfo function", function () {
		submitPaymentInfo();
		// expect(paymentId).toEqual(1);
		expect(billAmtInput.value).toEqual("");
		expect(tipAmtInput.value).toEqual("");
	});

	it("tests the createCurPayment function", function () {
		expect(createCurPayment()).toEqual({
			billAmt: "200",
			tipAmt: "40",
			tipPercent: 20,
		});
	});

	it("tests empty inputs for createCurPayment", function () {
		billAmtInput.value = "";
		tipAmtInput.value = "";
		expect(createCurPayment()).toEqual();
	});

	it("tests the appendPaymentTable function", function () {
		appendPaymentTable(createCurPayment());
		expect(paymentTbody.children[0].children[0].innerText).toEqual("$200");
		expect(paymentTbody.children[0].children[1].innerText).toEqual("$40");
		expect(paymentTbody.children[0].children[2].innerText).toEqual("20%");
	});

	it("tests the updateSummary function", function () {
		submitPaymentInfo();
		updateSummary();
		expect(summaryTds[0].innerHTML).toEqual("$200");
		expect(summaryTds[1].innerHTML).toEqual("$40");
		expect(summaryTds[2].innerHTML).toEqual("20%");
	});

	afterEach(function () {
		document.getElementById("paymentTable").children[1].innerHTML = "";
		billAmtInput.value = "";
		tipAmtInput.value = "";
		for (let item in allPayments) {
			delete allPayments[item];
		}
		summaryTds[0].innerHTML = "";
		summaryTds[1].innerHTML = "";
		summaryTds[2].innerHTML = "";
	});
});
