export default class HttpPreconditionFailedError extends Error {
  constructor(res) {
    super('Precondition Failed');
    this.res = res;
  }
}
