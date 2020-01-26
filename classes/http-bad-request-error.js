export default class HttpBadRequestError extends Error {
  constructor(res) {
    super('Bad Request');
    this.res = res;
  }
}
