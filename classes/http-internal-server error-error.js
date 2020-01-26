export default class HttpInternalServerErrorError extends Error {
  constructor(res) {
    super('Internal Server Error');
    this.res = res;
  }
}
