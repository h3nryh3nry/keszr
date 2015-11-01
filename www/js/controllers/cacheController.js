var CacheController = angular.module('keszr').controller('CacheController', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http) {
    /**
     * Returns URL to the OKAPI endpoint for the selected cache's log.
     */
    var apiUrlGetCacheLogs = function(cacheId) {
        return 'http://opencaching.pl/okapi/services/logs/logs' +
            '?cache_code=' + cacheId +
            '&consumer_key=' +  CONSUMER_KEY +
            '&langpref=pl';
    };
    
    /**
     * Returns URL to the OKAPI endpoint for detailed cache info.
     */
    var apiUrlGetCacheInfo = function(cacheId) {
        return 'http://opencaching.pl/okapi/services/caches/geocache' +
            '?cache_code=' + cacheId + 
            '&consumer_key=' +  CONSUMER_KEY +            
            '&langpref=pl' + 
            '&fields=code|name|location|type|status|url|owner|founds|notfounds|size2';
    };
    
    /**
     * Returns URL to the OKAPI endpoint, that gets all the OKAPI attributes
     * TODO: Move to separate OKAPI service
     * To be used in future 
     */
    var apiUrlGetAttributes = function(langpref) {
        if (typeof langpref === 'undefined') {
            langpref = 'pl';
        }
        return 'http://opencaching.pl/okapi/services/attrs/attribute_index' +
            '?consumer_key=' + CONSUMER_KEY +
            '&langpref=' + langpref;
    };
    
    $http.get(apiUrlGetCacheInfo($stateParams.cacheId)).success(function(response) {
        angular.extend($scope, {
            cache : response
        });
    })
    
    $http.get(apiUrlGetCacheLogs($stateParams.cacheId)).success(function(response) {
        angular.extend($scope, {
            entries : response
        });
    }).error(function(response, error){
        console.warn(response, error);
    });
    
    angular.extend($scope, {
        cacheId : $stateParams.cacheId
    });
}]);