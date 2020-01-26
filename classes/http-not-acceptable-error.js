export default class HttpNotAcceptableError extends Error {
  constructor(res) {
    super('Not Acceptable');
    this.res = res;
  }
}
