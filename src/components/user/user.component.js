import controller from './user.controller';

const userComponent = {
  controller,
  template: `
    <h2> The user is: {{$ctrl.person}}</h2>
    <div class="btn btn-success" ng-if="!$ctrl.isUpdating" ng-click="$ctrl.toggleUpdating()">Change User Name</div>
    <change-user ng-if="$ctrl.isUpdating" on-update="$ctrl.updated($event)"></change-user>
  `
}

export default userComponent;