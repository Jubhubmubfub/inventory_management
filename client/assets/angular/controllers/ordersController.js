console.log("Loading Clientside ordersController.js");


app.controller('ordersController', ['$scope', '$location', '$cookieStore', 'userFactory','orderFactory',function ($scope, $location, $cookieStore, userFactory,orderFactory) {


  // Initialize Required Attributes
  var _this = this
  $scope.orders = [
    {
      _id: 1,
      sender: {name: "Pete's Pizzas"},
      recipient: {email: 'nishant@inventory.com'},
      products: [
        {_id: 5, name: 'sausage', quantity: 10, price: 12},
        {_id: 6, name: 'cheese', quantity: 42, price: 3},
        {_id: 7, name: 'tomato', quantity: 9001, price: 4}
      ],
      created_at: "Tuesday, 28 February 2017"
    },
    {
      _id: 2,
      sender: {name: "Bob's Burgers"},
      recipient: {email: 'marcus@inventory.com'},
      products: [
        {_id: 1, name: 'buns', quantity: 10, price: 12},
        {_id: 2, name: 'patties', quantity: 2, price: 3},
        {_id: 3, name: 'lettuce', quantity: 2, price: 3},
        {_id: 4, name: 'pickles', quantity: 701, price: 5}
      ],
      created_at: "Tuesday, 28 February 2017"
    },
    {
      _id: 3,
      sender: {name: "Carl's Carbs"},
      recipient: {email: 'bion@inventory.com'},
      products: [
        {_id: 8, name: 'cake', quantity: 10, price: 12},
        {_id: 9, name: 'pie', quantity: 42, price: 3}
      ],
      created_at: "Tuesday, 28 February 2017"
    }
  ];
  // $scope.sortType = 'name';
  // $scope.sortReverse = true;
  // $scope.search = '';
  var _this = this;


  // -------------------------------------------------------------------------
  //                            Check Logged In User
  // -------------------------------------------------------------------------
  var CheckingUser = function () {
    if (!$cookieStore.get('logged-in')) {
      console.log("Not Logged In");
      $location.url('/');
    } else {
      console.log("logged in");

      console.log($cookieStore.get('user_id'));
    }
  };
  CheckingUser();

  // -------------------------------------------------------------------------
  //                            Log Out User
  // -------------------------------------------------------------------------
  _this.logout = function () {
    userFactory.logout(function (factoryResponse) {
      console.log(factoryResponse);
    });
  };

  // -------------------------------------------------------------------------
  //                            Add Required Methods
  // -------------------------------------------------------------------------
  $scope.show = function(order){
    $location.url('/orders/'+order._id);
  }
  orderFactory.indexNotReceived(function(orders_data){
    console.log('returned to the controller with the orders',orders_data.data);
    if(orders_data.data.errors){
      $scope.errors = orders_data.data.errors
    }
    $scope.orders = orders_data.data
  })
}]);
