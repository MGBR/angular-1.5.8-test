import controller from './user.controller';

const userComponent = {
  controller,
  template: `
    <h2> The user is: {{$ctrl.user}}</h2>
    <div class="btn btn-success" ng-if="!$ctrl.isUpdating" ng-click="$ctrl.beginNameChange()">Change User Name</div>
    <change-user user="$ctrl.user" on-update="$ctrl.changeName($event)" ng-if="$ctrl.isUpdating"></change-user>
  `
}

export default userComponent;