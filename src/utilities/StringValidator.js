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

  static getAge(dateString) {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}

export default StringValidator;
