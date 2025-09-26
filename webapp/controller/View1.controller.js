sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.demo.sapui5.controller.View1", {
        onInit() {
        },
      Press() {
        this.getOwnerComponent().getRouter().navTo("RouteView2")
      },
      Saved() {
        var name = this.getView().byId('Inputf').getValue();
        var name1 = this.getView().byId('Inputs').getValue();
        var newname = "Hello " + name +  name1 + "! your details are saved successfully!!";

        this.getView().byId('main').setText(newname);
        this.getView().byId('save');
        this.getView().byId('save').setType("Reject");
      },
      
         
    });
});