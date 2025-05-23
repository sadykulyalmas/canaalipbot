const canaalip = require('canaalip-db');

const transformString = text => {
  let result = '';
  let isUpperCase = false;
  if (text.length) {
    for (const element of text) {
      const qlElement = qazLatyn[element.toLowerCase()];
      if (element && typeof qlElement === 'string') {
        isUpperCase = element !== element.toLowerCase();
        result += isUpperCase
          ? qlElement.charAt(0).toUpperCase() + qlElement.slice(1)
          : qlElement;
      } else {
        result += `${element}`;
      }
    }
  }
  return result;
};

module.exports = transformString;
