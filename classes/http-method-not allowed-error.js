export default class HttpMethodNotAllowedError extends Error {
  constructor(res) {
    super('Method Not Allowed');
    this.res = res;
  }
}
