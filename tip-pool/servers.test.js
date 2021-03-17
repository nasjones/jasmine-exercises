describe("Servers test (with setup and tear-down)", function () {
	beforeEach(function () {
		// initialization logic
		serverNameInput.value = "Alice";
	});

	it("should add a new server to allServers on submitServerInfo()", function () {
		submitServerInfo();

		expect(Object.keys(allServers).length).toEqual(1);
		expect(allServers["server" + serverId].serverName).toEqual("Alice");
	});

	it("should update the server table with a new server", function () {
		submitServerInfo();
		updateServerTable();
		expect(serverTbody.children.length).toEqual(1);
		expect(serverTbody.children[0].children[0].innerText).toEqual("Alice");
		expect(serverTbody.children[0].children[1].innerText).toEqual("$0.00");
	});

	afterEach(function () {
		serverNameInput.value = "";
		serverTbody.innerHTML = "";
		allServers = {};
		paymentId = 0;
		serverId = 0;
	});
});
