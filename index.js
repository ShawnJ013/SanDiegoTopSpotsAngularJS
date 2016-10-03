// using app1 as 1 module which is dependent of over the sandiegotopspots file


angular.module( "myApp1" , []); 

//  the controller: to use and set state and by adding behavior to the page; using dependencys to hold on to the controller and manipulate the DOM
//  using the app1 we stored our module in we created the controller
//  using component scope this gets the data form the controller to the view; the scope links the controller to the view
//  $Scope injects which means that it injects scope into the controller, so that it is included in the controller
//  $Scope is the process of data binding which adds it to the page;  
angular.module("myApp1").controller('myCtrl', function($scope, $http) {
	$http.get("sandiegotopspots.json").then(function (response) { 
		$scope.topspots= response.data;


});

});


