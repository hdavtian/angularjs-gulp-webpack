export default ['$scope', 'productsService', '$stateParams', '$state', function($scope, productsService){
    $scope.greeting = 'Hello Universe!';

    productsService.getData().then(function(response){
        $scope.products = response.data;
    })


}]