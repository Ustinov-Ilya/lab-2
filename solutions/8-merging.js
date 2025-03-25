import _ from 'lodash';

// BEGIN
export const getMarege = (obj, keys, dataForMerging) => {
    let result;
    if (keys.length > 0) {
        let data = _.pick(dataForMerging, keys);
        return result = _.merge(obj, data);
    } else {
        return result = _.merge(obj, dataForMerging);
    }
}

export default getMarege;
// END