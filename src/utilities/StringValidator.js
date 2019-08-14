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
}

export default StringValidator;
