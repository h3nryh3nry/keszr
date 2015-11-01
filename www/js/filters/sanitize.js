// See http://stackoverflow.com/a/25513186
angular.module("keszr").filter("sanitize", ['$sce', function($sce) {
    return function(htmlCode){
        return $sce.trustAsHtml(htmlCode);
    }
}]);