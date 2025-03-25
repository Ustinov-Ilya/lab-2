// BEGIN
export const getSpecifiedProperties = (object, arrName) => {
    const result = {};
    const entries = Object.entries(object);

    for (const name of arrName) {
      for (const [key, value] of entries) {
        if (name === key) {
          result[name] = value;
        }
      }
    }
    return result;
}

export default getSpecifiedProperties;
// END