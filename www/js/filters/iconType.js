// Transforms OKAPI cache type string into appropriate ion-icon
angular.module("keszr").filter("iconType", function() {
    var iconAwesome = {
        icon: 'ion-ios-circle-filled',
        prefix: 'ion',
        type: 'awesomeMarker'
    };
    
    var iconTraditional = angular.extend(angular.copy(iconAwesome), {
        markerColor: 'blue'
    });

    var iconMulti = angular.extend(angular.copy(iconAwesome), {
        markerColor: 'green'
    });

    var iconQuiz  = angular.extend(angular.copy(iconAwesome), {
        markerColor: 'yellow'
    });

    var iconOther = angular.extend(angular.copy(iconAwesome), {
        markerColor: 'red'
    });

    var iconVirtual = angular.extend(angular.copy(iconAwesome), {
        markerColor: 'purple'
    });

    var iconMoving = angular.extend(angular.copy(iconAwesome), {
        markerColor: 'brown'
    });

    var iconUnknown = angular.extend(angular.copy(iconAwesome), {
        markerColor: 'black'
    });
    
    return function(icon){
        if (icon == "Traditional") {
            return iconTraditional;
        } else if (icon == "Multi") {
            return iconMulti;
        } else if (icon == "Other") {
            return iconOther;
        } else if (icon == "Quiz") {
            return iconQuiz;
        } else if (icon == "Virtual") {
            return iconVirtual;
        } else if (icon == "Moving") {
            return iconMoving;
        }
        
        console.error("iconType filter failed, unknown type of icon!", icon);
        
        return iconUnknown;
    }
});