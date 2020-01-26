export default class HttpUnauthorizedError extends Error {
  constructor(res) {
    super('Unauthorized');
    this.res = res;
  }
}
