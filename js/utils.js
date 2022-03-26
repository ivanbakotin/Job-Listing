export function filterIncludes(array, filterValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].filterValue == filterValue) {
      return true;
    }
  }

  return false;
}
