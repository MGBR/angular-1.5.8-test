export function changePerson (newPerson) {
  return {
    type: 'PERSON_CHANGED',
    person: newPerson
  }
}

export default {
  changePerson
}