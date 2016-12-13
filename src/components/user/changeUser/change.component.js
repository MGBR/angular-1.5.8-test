import controller from './change.controller';

const ChangeUser = {
  bindings: {
    onUpdate: '&'
  },
  controller,
  template: `
    <label>Change {{$ctrl.person}}'s Name:</label>
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <input type="text" class="form-control" ng-model="$ctrl.newPerson">
          <div class="btn btn-primary" ng-click="$ctrl.updatePerson($ctrl.newPerson)">Save</div>
        </div>
      </div>
    </div>
  `
};

export default ChangeUser;