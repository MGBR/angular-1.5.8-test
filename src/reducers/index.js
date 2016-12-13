import { combineReducers } from 'redux';
import changePerson from './change_person'

export default combineReducers({
  person: changePerson
});