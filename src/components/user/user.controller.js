class UserController {
  constructor (UserService, UserHelper) {
    this.UserService = UserService;
    this.UserHelper = UserHelper;
    this.isUpdating = false;
    this.user = null;
  }

  $onInit () {
    let user = this.UserService.getUser();
    this.user = this.UserHelper.formatUserName(user);
  }

  beginNameChange () {
    this.isUpdating = true;
  }

  changeName (event) {
    let newUser = this.UserService.changeUser(event.user);
    this.user = this.UserHelper.formatUserName(newUser);
    this.isUpdating = false;
  }
}

export default UserController;