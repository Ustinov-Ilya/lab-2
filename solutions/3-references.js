// BEGIN
export const getVerified = (company1, company2) => {
    if (company1.name === company2.name && company1.state === company2.state && company1.website === company2.website) {
      return true;
    } else {
      return false
    }
  }

  export default getVerified;
// END