var app = angular.module("AngularfilterApp", []);
    app.controller("filterctrl", function ($scope, $http) {
      $scope.searchtxt = '';  
      $scope.addItem = function(){
       
            var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=6a970fbb976a06193676f88ef2722cc8&text="+$scope.searchtxt+"&sort=relevance&privacy_filter=1&safe_search=1&format=json&nojsoncallback=1";
            $http.get(url).success(function(data) {
                  $scope.photos = data; // get data from json
                    angular.forEach($scope.photos, function(item){
                        angular.forEach(item.photo, function(ite){
                        $scope.users = item.photo;
                        // console.log(ite);
                })
            })
         });
      }
     

            
           
      
//     $scope.users = [{
//     name: "Madhav Sai",
//     age: 11
//     }, {
//     name: "Suresh Dasari",
//     age: 29
//     }, {
//     name: "Rohini Alavala",
//     age: 29
//     }, {
//     name: "Praveen Kumar",
//     age: 24
//     }];

    });