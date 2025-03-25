// BEGIN
export const getCompanyObject = (companyName, obj) => {
    const company = {name: companyName, state: 'moderating', createdAt: Date.now()};
    const mergetObject = {...company, ...obj};
    return mergetObject;
}

export default getCompanyObject;
// END