class UserService {
  constructor () {
    this.user = "matt"
  }
  getUser () {
    return this.user;
  }
  changeUser (newUser) {
    this.user = newUser;
    return this.getUser();
  }
}

export default UserService;