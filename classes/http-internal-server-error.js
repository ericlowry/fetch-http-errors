export default class HttpInternalServerError extends Error {
  constructor(res) {
    super('Internal Server');
    this.res = res;
  }
}
