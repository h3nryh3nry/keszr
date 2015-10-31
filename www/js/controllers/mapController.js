var MapController = angular.module('keszr').controller('MapController', ['$scope', function($scope) {
    angular.extend($scope, {
        mapCenter : {
            lat : 52.407,
            lng : 16.934,
            zoom : 15
        },
        defaults: {
            tileLayer: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
            zoomControlPosition: 'topright',
        },
        markers: {
            testMarker : {
                lat : 52.40833,
                lng : 16.93255,
                message : 'Odwach - (Nie)zapomniane zwycięstwo',
                draggable : false,
                focus : false
            }
        },
        tileLayers: [
            {
                tileLayer: "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
                name: "arcgisonline"
            },
            {
                tileLayer: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
                name: "OpenStreetMap"
            }
        ]
    });
}]);