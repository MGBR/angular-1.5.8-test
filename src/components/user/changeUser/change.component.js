import controller from './change.controller';

const ChangeUser = {
  controller,
  bindings: {
    user: '<',
    onUpdate: '&'
  },
  template: `
    <label>Change {{$ctrl.user}}'s Name:</label>
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <input type="text" class="form-control" ng-model="$ctrl.newUser">
          <div class="btn btn-primary" ng-click="$ctrl.saveChange()">Save</div>
        </div>
      </div>
    </div>
  `
};

export default ChangeUser;