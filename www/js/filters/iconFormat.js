// Transforms OKAPI log entry type into ion-icon
angular.module("keszr").filter("iconFormat", function() {
    return function(status){
        if (status == "Found it") {
            return "ion-checkmark-circled";
        } else if (status == "Didn't find it") {
            return "ion-close-circled";
        } else if (status == "Temporarily unavailable") {
            return "ion-alert-circled";
        } else if (status == "Maintenance performed") {
            return "ion-android-done";
        } else if (status == "Comment") {
            return "ion-compose";
        } else if (status == "Ready to search") {
            return "ion-search";
        } else if (status == "Needs maintenance") {
            return "ion-settings";
        }
        
        console.error("iconFormat filter failed, unknown type of status!", status);
        
        return "ion-help-circled";
    }
});