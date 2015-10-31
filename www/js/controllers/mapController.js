var MapController = angular.module('keszr').controller('MapController', ['$scope', '$http', function($scope, $http) {
    /**
     * Finds the name, location and type of nearest caches using OKAPI.
     */
    var apiUrlGetNearestCaches = function(lat, lng) {
        return 'http://opencaching.pl/okapi/services/caches/shortcuts/search_and_retrieve' +
            '?consumer_key=' + CONSUMER_KEY +
            '&search_method=services/caches/search/nearest' +
            '&retr_method=services/caches/geocaches' +
            '&retr_params={"fields": "name|location|type"}' +
            '&wrap=false' +
            '&search_params={"center": "' + lat + '|' + lng + '", "status": "Available"}';
    };
    
    /**
     * Finds the id's of nearest caches using OKAPI
     */
    var apiUrlGetNearestCachesSimple = function(lat, lng) {
        return 'http://opencaching.pl/okapi/services/caches/search/nearest?consumer_key=' + CONSUMER_KEY + '&center=' + lat + "|" + lng;
    };
    
    /**
     * Proof of concept 
     */
    $http.get(apiUrlGetNearestCaches("52.407", "16.934")).success(function(response) {
        response = _.map(response, function(a) {
            var pipeLocation = a.location.indexOf('|');
            return {
                lat : +a.location.substr(0, pipeLocation),
                lng : +a.location.substr(pipeLocation + 1),
                message : a.name
            };
        });
        
        angular.extend($scope, {
            markers : response
        });
    });
    
    // Default data
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
        },
        tileLayers: [   // To be used in future
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