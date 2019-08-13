const AUTH_TOKEN_KEY = 'secret';

class LocalStorage {
  static saveAuthToken(token) {
    localStorage.setItem(AUTH_TOKEN_KEY, JSON.stringify(token));
  }

  static getAuthToken() {
    if (localStorage.getItem(AUTH_TOKEN_KEY) !== null)
      return JSON.parse(localStorage.getItem(AUTH_TOKEN_KEY));
    else return null;
  }

  static cleanAuthToken() {
    localStorage.setItem(AUTH_TOKEN_KEY, null);
  }
}

export default LocalStorage;
