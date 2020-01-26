export default class HttpNotFoundError extends Error {
  constructor(res) {
    super('Not Found');
    this.res = res;
  }
}
