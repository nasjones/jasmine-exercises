describe("Tests for the functions in helper.js", function () {
	beforeEach(function () {
		billAmtInput.value = 200;
		tipAmtInput.value = 40;
	});

	it("tests the tip percentage calculation", function () {
		expect(calculateTipPercent(200, 40)).toEqual(20);
	});

	it("tests append td function updates the dom", function () {
		let newTr = document.createElement("td");
		paymentTbody.appendChild(newTr);

		appendTd(newTr, "$50.00");
		expect(newTr.innerText).toEqual("$50.00");
	});

	it("tests sumpayment function", function () {
		submitPaymentInfo();

		expect(sumPaymentTotal("tipAmt")).toEqual(40);
		expect(sumPaymentTotal("billAmt")).toEqual(200);
		expect(sumPaymentTotal("tipPercent")).toEqual(20);
	});

	afterEach(function () {
		document.getElementById("paymentTable").children[1].innerHTML = "";
		billAmtInput.value = "";
		tipAmtInput.value = "";
		allPayments = {};
		summaryTds[0].innerHTML = "";
		summaryTds[1].innerHTML = "";
		summaryTds[2].innerHTML = "";
		// serverId = 0;
	});
});
