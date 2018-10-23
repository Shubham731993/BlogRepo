angular.module("myContactApp",[])
.controller("ContactPageController",function($scope){
$scope.contactDetails={};
$scope.submit=function(){
  // if ($scope.userForm.$invalid) {
  //   console.log("we");
  //       return;
  //     }
  // else{
  //   console.log("we are here");
  // }
  if($scope.contactDetails.userName==undefined || $scope.contactDetails.email==undefined || $scope.contactDetails.phone==undefined || $scope.contactDetails.message==undefined){
    return;
  }
  else {
    console.log(" "+$scope.contactDetails.userName);
    console.log(" "+$scope.contactDetails.email);
    console.log(" "+$scope.contactDetails.phone);
    console.log(" "+$scope.contactDetails.message);
  }



  }
});
