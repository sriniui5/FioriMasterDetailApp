jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"my/root/test/integration/NavigationJourneyPhone",
		"my/root/test/integration/NotFoundJourneyPhone",
		"my/root/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});