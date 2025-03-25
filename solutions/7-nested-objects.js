// BEGIN
export const getValueKeys = (object, arrKeys) => {
  let keys = Object.keys(object);
  if (keys.length === 0) return null;

  let result = object;
  for (let key of arrKeys) {
    if (Object.hasOwn(result, key)) {
      result = result[key];
    } else {
      result = null;
      break
    }
  }
  return result;
}

export default getValueKeys;
// END