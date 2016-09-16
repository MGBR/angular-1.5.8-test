import angular from 'angular';
import ChangeUser from './change.component';

const changeUser = angular
  .module('user.change', [])
  .component('changeUser', ChangeUser)
  .name;

export default changeUser;