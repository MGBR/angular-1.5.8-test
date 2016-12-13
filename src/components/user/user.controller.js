class UserController {
  constructor ($ngRedux) {
    this.unsubscribe = $ngRedux.connect(this.mapToState)(this)
    this.isUpdating = false;
  }

  $onDestroy () {
    this.unsubscribe()
  }

  mapToState (state) {
    return {
      person: state.person
    }
  }

  toggleUpdating () {
    this.isUpdating = !this.isUpdating;
  }

  updated (event) {
    if(event.updated) this.toggleUpdating()
  }
}

export default UserController;