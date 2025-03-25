import { keyBy } from "lodash";

// BEGIN
export const getClone = (obj) => {
    let result = {};
    let entries = Object.entries(obj);
    for (const [key, value] of entries) {
        result[key] = value;
    }
    return result;
}

export default getClone;
// END
