({
    doSave : function(component, event, helper) {
        component.find("edit").get("e.recordSave").fire();
        component.find("overlayLib").notifyClose();
    }
})