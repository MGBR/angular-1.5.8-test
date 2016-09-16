import angular from 'angular';
import UserService from './user.service';

const services = angular
  .module('services', [])
  .service('UserService', UserService)
  .name;

export default services;
