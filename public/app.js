var app = angular.module('simtec-app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when("/admin", {
            templateUrl : "Modules/admin/admin_view_products.html",
            controller: 'AdminController',
            controllerAs: 'adminC'
        })
        .when("/client", {
            templateUrl : "Modules/client/home.html",
            controller: 'ClientController'
        });
});