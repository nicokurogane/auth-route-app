class StringValidator {
  static isStringNull(stringToCheck) {
    return !stringToCheck;
  }

  static isStringEmpty(stringToCheck) {
    return stringToCheck === '';
  }

  static isStringOnlyNumber(stringToCheck) {
    return isNaN(stringToCheck);
  }

  static isStringLengthGreaterThanAValue(stringToCheck, value) {
    return stringToCheck.length > value;
  }

  static isStringLengthLesserThanAValue(stringToCheck, value) {
    return stringToCheck.length < value;
  }

  static isStringAValidURL(stringToCheck) {
    const pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return pattern.test(stringToCheck);
  }
}

export default StringValidator;
