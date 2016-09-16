import angular from 'angular';
import uiRouter from 'angular-ui-router';
import UserComponent from './user.component';
import UserHelper from './userHelper.service';
import ChangeUser from './changeUser/change';

const user = angular
  .module('user', [
    uiRouter,
    ChangeUser
  ])
  .component('user', UserComponent)
  .service('UserHelper', UserHelper)
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