angular.module("myapp", [])
.controller("HomePageController",['$scope', function($scope) {
   $scope.helloTo = {};
   $scope.helloTo.title = "AngularJS";
}])

.directive('blogDirective', function() {
  return {
    template: 'Name: {{customer.name}} Address: {{customer.address}}'
  };
});
