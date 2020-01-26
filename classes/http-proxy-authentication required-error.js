export default class HttpProxyAuthenticationRequiredError extends Error {
  constructor(res) {
    super('Proxy Authentication Required');
    this.res = res;
  }
}
