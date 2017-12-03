import uiRouter                 from 'angular-ui-router';
import ngAnimate                from 'angular-animate';
import appController            from './controller';
import solutionsDirective       from './solutions-directive';
import solutionsListDirective   from './solutions-list-directive';
import modulesListDirective     from './modules-list-directive';
import modulesCubicalHorizontal from './modules-cubical-horizontal';
import cube                     from './cube';
import appConfig                from './app-config';
import productsService          from './products-service';

const app = angular.module('app',[uiRouter, ngAnimate]);

app
    .config(appConfig)
    .controller('appCtrl', appController)
    .service('productsService', productsService)
    .directive('solutions', solutionsDirective)
    .directive('solutionsList', solutionsListDirective)
    .directive('modulesList', modulesListDirective)
    .directive('modulesCubicalHorizontal', modulesCubicalHorizontal)
    .directive('cube', cube);

// DI
//appController.$inject = ['$scope'];
//appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];