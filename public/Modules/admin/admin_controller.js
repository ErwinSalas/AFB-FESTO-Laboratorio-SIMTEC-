angular.module('simtec-app')
    .controller('AdminController',function(){
        var vm = this;
        vm.hola = "Hello Admin";
        vm.products =
            [{
                "name":"Producto1",
                "stock":20,
                "description":'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum dui vitae nunc porta porta. Sed sed pulvinar est.'
            },
            {
                "name":'Producto2',
                "stock":20,
                "description":'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum dui vitae nunc porta porta. Sed sed pulvinar est. '
            },
            {
                "name":'Producto3',
                "stock":20,
                "description":'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum dui vitae nunc porta porta. Sed sed pulvinar est.'
            },
            {
                "name":'Producto4',
                "stock":20,
                "description":'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum dui vitae nunc porta porta. Sed sed pulvinar est.'
            },
            {
                "name":'Producto5',
                "stock":20,
                "description":'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum dui vitae nunc porta porta. Sed sed pulvinar est.'
            },
            {
                "name":'Producto6',
                "stock":20,
                "description":'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum dui vitae nunc porta porta. Sed sed pulvinar est.'
            }];
    });