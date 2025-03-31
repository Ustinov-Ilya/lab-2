import crc32 from 'crc-32';

// BEGIN
const make = () => {
    return [];
}

const set = (map, key, value) => {
    const hash = crc32.str(key);
    const index = Math.abs(hash) % 1000;
    const input = map[index];
    if (!input || input[0] === key) {
        map[index] = [key, value];
        return true;
    } else {
        return false;
    }
}

const get = (map, key, defaultValue = null) => {
    const hash = crc32.str(key);
    const index = Math.abs(hash) % 1000;
    const input = map[index];
    if (input && input[0] === key) {
        return input[1];
    } else {
        return defaultValue;
    }
}

export {make, set, get}; 
// END