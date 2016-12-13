import { formatName } from './helpers/format-user';

export default function changePerson (state = "Matthew", action) {
  const actions = {
    'PERSON_CHANGED': () => formatName(action.person),
    'default': () => state
  };

  return (actions[action.type] || actions.default)();
}