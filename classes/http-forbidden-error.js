export default class HttpForbiddenError extends Error {
  constructor(res) {
    super('Forbidden');
    this.res = res;
  }
}
