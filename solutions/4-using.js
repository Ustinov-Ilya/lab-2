// BEGIN
export const getDomainInfo = (filepath) => {
    let scheme;
    let name;
    if (filepath.startsWith('https://')) {
      scheme = 'https';
    } else {
      scheme = 'http';
    }
    if (filepath.startsWith('https://')) {
      name = filepath.replace('https://', '');
    } else if (filepath.startsWith('http://')) {
      name = filepath.replace('http://', '');
    } else {
      name = filepath;
    }
    const info = {scheme: scheme, name: name};
  
    return info;
  }

  export default getDomainInfo;
// END