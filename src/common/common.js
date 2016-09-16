import angular from 'angular';
import services from './services/services';

const common = angular
  .module('app.common', [
    services
  ])
  .name;

export default common;