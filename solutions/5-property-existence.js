import _, { lowerCase } from 'lodash';

// BEGIN
export const getCountWords = (text) => {
    const result = {};
    const lowerText = text.toLowerCase();
    const arr = _.words(lowerText);

    for (const name of arr) {
        if (Object.hasOwn(result, name)) {
            result[name] += 1;
        } else {
            result[name] = 1;
        }
    }
    return result;
}

export default getCountWords;
// END