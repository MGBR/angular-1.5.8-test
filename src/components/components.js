import angular from 'angular';
import user from './user/user';

const components = angular
  .module('app.components', [
    user
  ])
  .name;

export default components;