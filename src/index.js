import angular from 'angular';
import components from './components/components';
import common from './common/common';
import appComponent from './components/app.component';

const root = angular
  .module("app", [
    common,
    components
  ])
  .component('appRoot', appComponent)
  .name;

export default root;