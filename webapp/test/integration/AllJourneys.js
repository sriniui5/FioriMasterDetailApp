jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 ProductSet in the list
// * All 3 ProductSet have at least one ToSupplier

sap.ui.require([
	"sap/ui/test/Opa5",
	"my/root/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"my/root/test/integration/pages/App",
	"my/root/test/integration/pages/Browser",
	"my/root/test/integration/pages/Master",
	"my/root/test/integration/pages/Detail",
	"my/root/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "my.root.view."
	});

	sap.ui.require([
		"my/root/test/integration/MasterJourney",
		"my/root/test/integration/NavigationJourney",
		"my/root/test/integration/NotFoundJourney",
		"my/root/test/integration/BusyJourney",
		"my/root/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});