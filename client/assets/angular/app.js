console.log("Loading Master App JS");

var app = angular.module('app', ['ngRoute', 'ngMessages']);

app.config( function ($routeProvider) {

  $routeProvider

    .when('/inventory', {
      templateUrl: 'partials/inventory.html',
      controller: 'inventoryController',
    })

    .when('/orders', {
      templateUrl: 'partials/orders.html',
      controller: 'ordersController'
    })

    .otherwise({
      redirectTo: '/'
    });

});
