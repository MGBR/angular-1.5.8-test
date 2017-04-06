import angular from 'angular';
import ngRedux from 'ng-redux';
import config from './config';
import components from './components/components';
import common from './common/common';
import appComponent from './components/app.component';

const root = angular
  .module('app', [
    ngRedux,
    common,
    components
  ])
  .config(config)
  .component('appRoot', appComponent)
  .name;

export default root;
