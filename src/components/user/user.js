import angular from 'angular';
import uiRouter from 'angular-ui-router';
import UserComponent from './user.component';
import ChangeUser from './changeUser/change';

const user = angular
  .module('user', [
    uiRouter,
    ChangeUser
  ])
  .component('user', UserComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('user', {
        url: "/",
        component: 'user'
      });
      $urlRouterProvider.otherwise('/');
  })
  .name;

export default user;