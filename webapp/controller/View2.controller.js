sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.demo.sapui5.controller.View2", {
        onInit() {
        },
        Back: function(){
          //this.getOwnerComponent().getRouter().navTo("RouteView1");
          history.go(-1);
        }
    });
});