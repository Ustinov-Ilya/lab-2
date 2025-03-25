// BEGIN
export const getUserNames = (listOfUsers) => {
    const result = [];
    for (let users of listOfUsers) {
        const {name} = users;
        result.push(name);
    }
    return result.sort();
}

export default getUserNames;
// END