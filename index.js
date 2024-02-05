export function trigram(firstname, lastname) {
  return `${firstname.charAt(0).toUpperCase()}${lastname.charAt(0).toUpperCase()}${lastname.slice(-1).toUpperCase()}`;
}
