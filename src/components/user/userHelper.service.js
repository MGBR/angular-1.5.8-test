class UserHelper {
  constructor () {}
  
  formatUserName (name) {
    const firstLetter = name[0].toUpperCase();
    const restOfName = name.substr(1, name.length);
    return `${firstLetter}${restOfName}`;
  }
}

export default UserHelper;