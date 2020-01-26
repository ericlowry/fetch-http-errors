export default class HttpConflictError extends Error {
  constructor(res) {
    super('Conflict');
    this.res = res;
  }
}
