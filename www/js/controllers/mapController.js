var MapController = angular.module('keszr').controller('MapController', ['$scope', '$http', 'iconTypeFilter', 'leafletMapEvents', function($scope, $http, iconTypeFilter, leafletMapEvents) {
    /**
     * Finds the name, location and type of nearest caches using OKAPI.
     */
    var apiUrlGetNearestCaches = function(lat, lng) {
        lat = String(lat);
        lng = String(lng);
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
        lat = String(lat);
        lng = String(lng);
        return 'http://opencaching.pl/okapi/services/caches/search/nearest?consumer_key=' + CONSUMER_KEY + '&center=' + lat + "|" + lng;
    };
    
    /**
     * When position on map changes, find the nearest caches
     */
    var mapEvents = leafletMapEvents.getAvailableMapEvents();
    for (var k in mapEvents){
        var eventName = 'leafletDirectiveMap.' + mapEvents[k];
        $scope.$on(eventName, function(event){
            if (event.name == "leafletDirectiveMap.dragend") {
                getNewCaches($scope.mapCenter.lat, $scope.mapCenter.lng);
            }
        });
    }
    
    /**
     * Proof of concept 
     */
    var getNewCaches = function(lat, lng) {
        $http.get(apiUrlGetNearestCaches(lat, lng)).success(function(response) {
            response = _.map(response, function(cache, key) {
                var pipeLocation = cache.location.indexOf('|'); 
                return {
                    lat : +cache.location.substr(0, pipeLocation),
                    lng : +cache.location.substr(pipeLocation + 1),
                    type : cache.type,
                    icon : iconTypeFilter(cache.type),
                    message : "<a href='#/cache/" + key + "'>" + cache.name + "</a>, " + cache.type
                };
            });

            angular.extend($scope, {
                markers : response
            });
        }).error(function(response, error){
            console.warn(response, error);
        });
    };
    
    getNewCaches("52.407", "16.934");
    
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