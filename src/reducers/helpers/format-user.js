export function formatName (name) {
  const firstLetter = name[0].toUpperCase();
  const restOfName = name.substr(1, name.length).toLowerCase();
  return `${firstLetter}${restOfName}`;
}

export default {
  formatName
}
