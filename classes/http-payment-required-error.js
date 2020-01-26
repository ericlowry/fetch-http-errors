export default class HttpPaymentRequiredError extends Error {
  constructor(res) {
    super('Payment Required');
    this.res = res;
  }
}
