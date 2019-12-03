sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.fcaCorsoSCP.controller.View1", {
		onItemPress: function (oEvent) {
			var oContext = oEvent.getSource().getBindingContext();
			this.getView().byId("page2").setBindingContext(oContext);
			this.getView().byId("app").to(this.getView().byId("page2"));
		},
		onSave: function(oEvent) {
			this.getView().getModel().submitChanges();
		},
		onNew: function(oEvent) {
			this.getView().byId("app").to(this.getView().byId("page2"));
			this.getView().byId("username").setEditable(true);
			var oModel = this.getView().getModel();
			var oContext = oModel.createEntry("/PeopleSet");
			this.getView().byId("page2").setBindingContext(oContext);
		}
	});
});