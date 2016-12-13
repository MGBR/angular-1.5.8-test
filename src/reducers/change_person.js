import { formatName } from './helpers/format-user';

export default function changePerson (state = "Matthew", action) {
  if (!action) return state
  switch (action.type) {
    case 'PERSON_CHANGED':
      return formatName(action.person)
    default:
      return state
  }
}