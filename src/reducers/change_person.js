import Actions from './reducer-actions/change_person_actions';

export default function changePerson (state = "Matthew", action) {
  return action ? Actions(action, state) : state;
}