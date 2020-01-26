export default class HttpRequestTimeOutError extends Error {
  constructor(res) {
    super('Request Time-Out');
    this.res = res;
  }
}
