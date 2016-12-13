import PersonActions from '../../../actions/change_person'

class ChangeUserController {
  constructor ($ngRedux) {
    this.unsubscribe = $ngRedux.connect(this.mapToState, PersonActions)(this)
    this.newPerson = ""
  }

  $onDestroy () {
    this.unsubscribe()
  }

  mapToState (state) {
    return {
      person: state.person
    }
  }

  updatePerson (newPerson) {
    this.changePerson(newPerson);
    this.onUpdate({
      $event: {
        updated: true
      }
    })
  }
}

export default ChangeUserController;