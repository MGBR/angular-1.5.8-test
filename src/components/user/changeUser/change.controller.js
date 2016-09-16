class ChangeUserController {
  constructor () {}

  $onChanges (changes) {
    if(changes.user) {
      this.user = angular.copy(changes.user.currentValue);
      this.newUser = angular.copy(changes.user.currentValue);
    }
  }

  saveChange () {
    this.onUpdate({
      $event: {
        user: this.newUser
      }
    });
  }
  
}

export default ChangeUserController;